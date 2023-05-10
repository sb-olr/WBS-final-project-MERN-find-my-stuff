const Jwt = require("jsonwebtoken");

const userModel = require("../models/users");
const spaceModel = require("../models/spaces");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const rows = await userModel.getUsers();
    return res.json(rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Could not get users" });
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
    if (user) {
      const space = await spaceModel.addSpace(
        "None",
        user.id,
        "Default space",
        "question circle"
      );
    } else {
      return res.status(500).json({ error: "User could not be created!" });
    }

    //sign a token with user Id
    const token = Jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "User could not be created!" });
  }
};

// Login a user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(500).json({ error: "All fields compulsory!" });

    //todo: hash password

    const user = await userModel.loginUser(email, password);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    //sign a token with user Id
    const token = Jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "User could not be logged in!" });
  }
};

// Get current user
const getUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await userModel.getUser(id);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Could not get user" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.user;
    return res.json("message", "User deleted successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Could not delete user" });
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const { id } = req.user;
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(500).json({ error: "missing data" });

    const user = await userModel.editUser(id, name, email, password);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Could not update user" });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  loginUser,
  getUser,
  deleteUser,
  updateUser,
};
