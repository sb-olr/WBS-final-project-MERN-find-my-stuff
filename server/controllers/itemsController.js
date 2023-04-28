const pool = require("../db/pg");

const getAllItems = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM items where user_id = $1",
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

const addItem = async (req, res) => {
  try {
    const { name, description, quantity, owner, value, space_id, img_url } =
      req.body;
    await pool.query(
      "INSERT INTO items (name, description, quantity, owner, value, item_id, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [name, description, quantity, owner, value, space_id, img_url]
    );
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [
      id,
    ]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, quantity, owner, value, space_id, img_url } =
      req.body;
    const updated_at = new Date();
    await pool.query(
      "UPDATE users SET name = $1, description = $2, quantity = $3, owner = $4, value = $5, space_id = $6, img_url = $7, updated_at = NOW() WHERE id = $8",
      [name, description, quantity, owner, value, space_id, img_url, id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};


module.exports = {
  getAllItems,
  addItem,
  getItem,
  deleteItem,
  updateItem,
};