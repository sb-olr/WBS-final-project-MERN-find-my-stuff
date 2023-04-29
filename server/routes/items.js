const express = require("express");
const itemsController = require("../controllers/itemsController");

const router = express.Router();

// Get all items
router.get("/all", itemsController.getAllItems);

// Get all items for a specific space
router.get("/spaces/:space-id", itemsController.getItemsBySpaceID);

// Add a new item
router.post("/", itemsController.addItem);

// Get a specific item by id
router.get("/:id", itemsController.getItem);

// Delete an item
router.delete("/:id", itemsController.deleteItem);

// Update an existing user
router.put("/:id");

module.exports = router;
