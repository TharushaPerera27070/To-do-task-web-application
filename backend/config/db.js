const pkg = require("pg");
const { Pool } = pkg;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "todo_app",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = { pool };
