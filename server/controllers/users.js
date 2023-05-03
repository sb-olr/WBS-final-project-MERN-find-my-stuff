const userModel = require("../models/users");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const rows = await userModel.getUsers();
    return res.json(rows);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
};

// Add a new user
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(500).json({ error: "All fields compulsory!" });


      //todo hash password
    const user = await userModel.addUser(name, email, password);

    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
};

// Get current user
const getUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await userModel.getUser(id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.user;
    res.status(200).json('message', 'User deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const { id } = req.user;
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.json({ error: "missing data" });

    const user = await userModel.editUser(id, name, email, password);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
};
