import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo_app",
  password: "TharuN$bm124",
  port: 5432,
});
