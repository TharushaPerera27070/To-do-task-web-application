const pkg = require("pg");
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo_app",
  password: "TharuN$bm124",
  port: 5432,
});

module.exports = { pool };
