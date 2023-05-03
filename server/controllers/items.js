const itemController = require("../models/items");

const getAllItems = async (req, res) => {
  try {
    const rows = await itemController.getItems();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getItemsBySpaceId = async (req, res) => {
  try {
    const { spaceId } = req.params;
    const rows = await itemController.getItemsBySpaceId(spaceId);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const addItem = async (req, res) => {
  try {
    // const { spaceId } = req.params;

    const { name, description, quantity, owner, value, space_id, img_url } =
      req.body;

    if (!name || !description || !quantity || !owner || !space_id)
      return res.status(500).json({ error: "All fields compulsory!" });

    const item = await itemController.addItem(
      name,
      description,
      quantity,
      owner,
      value,
      space_id,
      img_url
    );
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await itemController.getItem(id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    await itemController.deleteItem(id);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, quantity, owner, value, space_id, img_url } =
      req.body;
    if (!name || !description || !quantity || !owner || !space_id)
      return res.status(500).json({ error: "All fields compulsory!" });

    await itemController.updateItem(
      id,
      name,
      description,
      quantity,
      owner,
      value,
      space_id,
      img_url
    );

    res.status(200);
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
