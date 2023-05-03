// Todo: split spaces model logic

const pool = require("../db/pg");

const getAllSpaces = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM spaces where user_id = $1",
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const addSpace = async (req, res) => {
  try {
    const { name } = req.body;
    await pool.query("INSERT INTO spaces (name) VALUES ($1)", [name]);
    res.status(201);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM spaces WHERE id = $1", [
      id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const deleteSpace = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM spaces WHERE id = $1", [id]);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const updateSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updated_at = new Date();
    await pool.query(
      "UPDATE users SET name = $1, updated_at = $2 WHERE id = $3",
      [name, updated_at, id]
    );
    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};


module.exports = {
  getAllSpaces,
  addSpace,
  getSpace,
  deleteSpace,
  updateSpace,
};