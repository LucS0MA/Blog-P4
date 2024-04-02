import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "S0MA",
  password: "lmhf",
  database: "blog",
});
