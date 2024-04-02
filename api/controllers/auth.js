import { db } from "../db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const register = async (req, res) => {
  try {
    //check si l'utilisateur existe
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    const existingUser = await new Promise((resolve, reject) => {
      db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });

    if (existingUser.length) {
      return res.status(409).json("User already exists!");
    }

    //Hash le mot de passe et crée l'utilisateur
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
