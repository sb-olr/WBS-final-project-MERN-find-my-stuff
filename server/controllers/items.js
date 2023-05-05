// Todo: authorization checks

const itemModel = require("../models/items");

const getAllItems = async (req, res) => {
  try {
    const rows = await itemModel.getItems(req.user.id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await itemModel.getItem(id);
    if (!item) res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getItemsBySpaceId = async (req, res) => {
  try {
    const { spaceId } = req.params;
    const rows = await itemModel.getItemsBySpaceId(spaceId);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const addItem = async (req, res) => {
  try {
    // const { spaceId } = req.params;
    const { name, description, quantity, value, space_id, img_url } = req.body;

    if (!name || !description || !quantity || !space_id)
      return res.status(500).json({ error: "All fields compulsory!" });

    const item = await itemModel.addItem(
      name,
      description,
      quantity,
      value,
      space_id,
      img_url
    );
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    await itemModel.deleteItem(id);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, quantity, value, space_id, img_url } = req.body;
    if (!name || !description || !quantity || !space_id)
      return res.status(500).json({ error: "All fields compulsory!" });

    const item = await itemModel.updateItem(
      id,
      name,
      description,
      quantity,
      value,
      space_id,
      img_url
    );

    res.status(200).json(item);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = {
  getAllItems,
  getItemsBySpaceId,
  addItem,
  getItem,
  deleteItem,
  updateItem,
};
