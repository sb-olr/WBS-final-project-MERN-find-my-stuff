const express = require("express");
const itemsController = require("../controllers/items");

const router = express.Router();

// Get all items
router.get("/all", itemsController.getAllItems);

// Get a specific item by id
router.get("/:id", itemsController.getItem);

// Get all items for a specific space
router.get("/spaces/:spaceId", itemsController.getItemsBySpaceId);

// Add a new item
router.post("/", itemsController.addItem);

// Delete an item
router.delete("/:id", itemsController.deleteItem);

// Update an existing user
router.put("/:id", itemsController.updateItem);

module.exports = router;
