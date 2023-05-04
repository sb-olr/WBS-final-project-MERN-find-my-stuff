const pool = require("../db/pg");

const getSpaces = async (user_id) => {
  const { rows } = await pool.query("SELECT * FROM spaces where user_id = $1", [
    user_id,
  ]);
  return rows;
};

const addSpace = async (name, user_id) => {
  const { rows } = await pool.query(
    "INSERT INTO spaces (name, user_id) VALUES ($1, $2) RETURNING *",
    [name, user_id]
  );
  return rows[0];
};

const getSpace = async (id) => {
  const { rows } = await pool.query("SELECT * FROM spaces WHERE id = $1", [id]);
  return rows[0];
};

const deleteSpace = async (id) => {
    await pool.query("DELETE FROM spaces WHERE id = $1", [id]);
    return true;
};

const updateSpace = async (id, name) => {
    const updated_at = new Date();
    const {rows} = await pool.query("UPDATE spaces SET name = $1, updated_at = $2 WHERE id = $3 RETURNING *", [name, updated_at, id]);
    return rows[0];
};
module.exports = { getSpaces, addSpace, getSpace, deleteSpace, updateSpace };
