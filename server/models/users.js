const pool = require("../db/pg");

const getUsers = async () => {
  const { rows } = await pool.query("SELECT * FROM users");
  console.log(rows);
  return rows;
};

const addUser = async (name, email, password) => {
  const { rows: user } = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password]
  );
  return user;
};

const loginUser = async (email, password) => {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, password]
  );
  return rows[0];
};

const getUser = async (id) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
};

const deleteUser = async (id) => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};

const editUser = async (id, name, email, password) => {
  const { rows } = await pool.query(
    "UPDATE users SET name = $1, email = $2, password = $3, updated_at = NOW() WHERE id = $4  RETURNING *",
    [name, email, password, id]
  );
  return rows;
};

module.exports = { getUsers, addUser, loginUser, getUser, editUser, deleteUser };
