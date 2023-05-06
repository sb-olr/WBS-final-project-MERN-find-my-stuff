const pool = require("../db/pg");

const getItems = async (id) => {
  const { rows } = await pool.query(
    `SELECT items.* FROM items
    JOIN spaces ON items.space_id = spaces.id 
    WHERE  (spaces.user_id = $1 )`,
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
  value,
  space_id,
  img_url
) => {
  const { rows: user } = await pool.query(
    "INSERT INTO items (name, description, quantity,  value, space_id, img_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, description, quantity, value, space_id, img_url]
  );
  return user;
};

const getItem = async (id) => {
  const { rows } = await pool.query("SELECT * FROM items where id = $1", [id]);
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
  value,
  space_id,
  img_url
) => {
  const { rows: user } = await pool.query(
    "UPDATE items SET name = $1, description = $2, quantity = $3, value = $4, space_id = $5, img_url = $6, updated_at = NOW() WHERE id = $7 RETURNING *",
    [name, description, quantity, value, space_id, img_url, id]
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
