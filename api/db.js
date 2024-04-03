import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "S0MA",
  password: "lmhf",
  database: "blog",
});
