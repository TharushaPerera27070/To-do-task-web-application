const { pool } = require("../config/db.js");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getTasks = async (req, res) => {
  try {
    const allTasks = await pool.query(
      "SELECT * FROM task WHERE is_completed = FALSE ORDER BY created_at DESC LIMIT 5"
    );
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const markTaskDone = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("UPDATE task SET is_completed = TRUE WHERE id = $1", [id]);
    res.json("Task was marked as done!");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createTask, getTasks, markTaskDone };
