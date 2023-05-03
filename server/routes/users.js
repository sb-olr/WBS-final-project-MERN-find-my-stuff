const express = require("express");
const verifyJWTToken = require("../middleware/verifyJWTToken");
const usersController = require("../controllers/users");

const router = express.Router();

// Get all users
router.get("/all", usersController.getAllUsers);

// Add a new user
router.post("/", usersController.addUser);

// Get a specific user by id
router.get("/", verifyJWTToken, usersController.getUser);

// Delete a user
router.delete("/", verifyJWTToken, usersController.deleteUser);

// Update an existing user
router.put("/", verifyJWTToken, usersController.updateUser);

module.exports = router;