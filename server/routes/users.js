const express = require("express");
const { Pool } = require("pg");

const router = express.Router();

// const connectionString = process.env.DB_URL_LOCAL;
const connectionString = process.env.DB_URL_DEV;

const pool = new Pool({
  connectionString,
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, nickname } = req.body;
    await pool.query(
      "INSERT INTO users (name, email, password, nickname) VALUES ($1, $2, $3, $4)",
      [name, email, password, nickname]
    );
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Get a specific user by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Update an existing user
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
      name,
      email,
      id,
    ]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
