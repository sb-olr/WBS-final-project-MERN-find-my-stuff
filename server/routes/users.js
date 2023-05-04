const express = require("express");
const verifyJWTToken = require("../middleware/verifyJWTToken");
const usersController = require("../controllers/users");

const router = express.Router();

// Get all users
router.get("/all", usersController.getAllUsers);

// Add a new user
router.post("/signup", usersController.addUser);

// Login
router.post("/login", usersController.loginUser);

// Get current user
router.get("/me", verifyJWTToken, usersController.getUser);

// Get a specific user by id (for testing) (to implement)
// router.get("/:id", verifyJWTToken, usersController.getUser);

// Delete a user
router.delete("/", verifyJWTToken, usersController.deleteUser);

// Update an existing user
router.put("/", verifyJWTToken, usersController.updateUser);

module.exports = router;