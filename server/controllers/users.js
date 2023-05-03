const pool = require("../db/pg");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    return res.json(rows);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

// Add a new user
const addUser = async (req, res) => {
  try {
    const { name, email, password} = req.body;
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};

// Get a specific user by id
const getUser = async (req, res) => {
  try {
    const { id } = req.user;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.user;
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const { id } = req.user;
    const { name, email, password } = req.body;
    const updated_at = new Date();
    await pool.query(
      "UPDATE users SET name = $1, email = $2, password = $3, updated_at = NOW() WHERE id = $4",
      [name, email, password, id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
};
