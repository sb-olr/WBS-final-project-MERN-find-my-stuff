const pool = require("../db/pg");
const itemModel = require("../models/items");

const getSpaces = async (user_id) => {
  //TODO: add sort so None first
  const { rows } = await pool.query(
    "SELECT * FROM spaces where user_id = $1 ORDER BY CASE WHEN name = 'None' THEN 1 ELSE 2 END",
    [user_id]
  );
  return rows;
};

const addSpace = async (name, user_id, description, icon) => {
  const { rows } = await pool.query(
    "INSERT INTO spaces (name, user_id, description, img_url) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, user_id, description, icon]
  );
  return rows[0];
};

const getSpace = async (id) => {
  const { rows } = await pool.query("SELECT * FROM spaces WHERE id = $1", [
    parseInt(id),
  ]);

  return rows[0];
};

const deleteSpace = async (id) => {
  const space = await getSpace(id);

  if (space.name === "None") {
    throw new Error("Can't delete default space");
  }

  const items = await itemModel.getItemsBySpaceId(id);
  if (items.length !== 0) {
    await pool.query(
      "UPDATE items SET space_id = (SELECT id FROM spaces WHERE name = 'None' AND user_id = $1 ) WHERE space_id = $2",
      [space.user_id, id]
    );
  }

  await pool.query("DELETE FROM spaces WHERE id = $1 AND name != 'None'", [
    id,
  ]);

  return true;
};

const updateSpace = async (id, name, description, icon) => {
  const { rows } = await pool.query(
    "UPDATE spaces SET name = $1, description = $2, img_url = $3, updated_at = NOW() WHERE id = $4 RETURNING *",
    [name, description, icon, id]
  );
  return rows[0];
};
module.exports = { getSpaces, addSpace, getSpace, deleteSpace, updateSpace };
