// Todo: authorization checks

const itemModel = require("../models/items");

const getAllItems = async (req, res) => {
  try {
    const {
      query: { term },
    } = req;
    const rows = await itemModel.getItems(req.user.id, term);
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
    res.status(500).json({ message: err.message });
  }
};

const addItem = async (req, res) => {
  try {
    // const { spaceId } = req.params;
    let { name, description, quantity, value, space_id, icon } = req.body;

    if (!name || !icon)
      return res.status(500).json({ error: "name & icon are compulsory!" });

    if (space_id === "-1") {
      space_id = null;
    }

    const item = await itemModel.addItem(
      name,
      description,
      quantity,
      value,
      space_id,
      icon
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
    res.status(500).json({ message: err.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    let { name, description, quantity, value, space_id, icon } = req.body;
    if (!name || !icon)
      return res.status(500).json({ error: "name & icon are compulsory!" });

    if (space_id === "-1") {
      space_id = null;
    }

    const item = await itemModel.updateItem(
      id,
      name,
      description,
      quantity,
      value,
      space_id,
      icon
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
