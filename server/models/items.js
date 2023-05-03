const pool = require("../db/pg");

const getItems = async (id) => {
  const { rows } = await pool.query(
    "SELECT * FROM items WHERE space_id IN (SELECT id FROM spaces WHERE user_id = $1)",
    [id]
  );
  return rows;
};

const getItemsBySpaceId = async (spaceId) => {
  const { rows } = await pool.query("SELECT * FROM items where space_id = $1", [
    spaceId,
  ]);
  return rows;
};

const addItem = async (
  name,
  description,
  quantity,
  owner,
  value,
  space_id,
  img_url
) => {
  const { rows: user } = await pool.query(
    "INSERT INTO items (name, description, quantity, owner, value, space_id, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, description, quantity, owner, value, space_id, img_url]
  );
  return user;
};

const getItem = async (id) => {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
  return rows[0];
};

const deleteItem = async (id) => {
  await pool.query("DELETE FROM items WHERE id = $1", [id]);
};

const updateItem = async (
  id,
  name,
  description,
  quantity,
  owner,
  value,
  space_id,
  img_url
) => {
  const { rows: user } = await pool.query(
    "UPDATE items SET name = $1, description = $2, quantity = $3, owner = $4, value = $5, space_id = $6, img_url = $7 updated_at = NOW() WHERE id = $8  RETURNING *",
    [name, description, quantity, owner, value, space_id, img_url, id]
  );
  return user;
};

module.exports = {
  getItems,
  getItemsBySpaceId,
  addItem,
  getItem,
  deleteItem,
  updateItem,
};
