const express = require("express");
const {
  createTask,
  getTasks,
  markTaskDone,
} = require("../controllers/task.controller.js");

const router = express.Router();

router.post("/task", createTask);
router.get("/task", getTasks);
router.put("/task/:id", markTaskDone);

module.exports = router;
