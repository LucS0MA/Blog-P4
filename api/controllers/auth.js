import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const login = (req, res) => {
  //CHECK de l'utilisateur
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json(err);
    }
    if (data.length === 0) {
      console.log("User not found!");
      return res.status(404).json("User not found!");
    }

    //Check du mot de passe
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      console.log("Incorrect password!");
      return res.status(400).json("Wrong username or password!");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    console.log("User logged in successfully!");

    // Ajout d'un message pour vérifier que le cookie est défini correctement
    console.log("Token:", token);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};
