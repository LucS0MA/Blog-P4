import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "S0MA",
  password: "lmhf",
  db: "blog",
});
