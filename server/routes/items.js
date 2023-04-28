const express = require("express");
const itemsController = require("../controllers/itemsController");

const router = express.Router();

// Get all spaces
router.get("/all", spacesController.getAllSpaces);

// Add a new space
router.post("/", spacesController.addSpace);

// Get a specific space by id
router.get("/:id", spacesController.getSpace);

// Delete a space
router.delete("/:id", spacesController.deleteSpace);

// Update an existing user
router.put("/:id");

module.exports = router;
