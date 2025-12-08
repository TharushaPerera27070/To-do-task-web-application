const pkg = require("pg");
const { Pool } = pkg;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo_app",
  password: DB_PASSWORD,
  port: 5432,
});

module.exports = { pool };
