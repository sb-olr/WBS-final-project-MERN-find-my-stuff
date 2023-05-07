// Todo: authorization checks
const spaceModel = require("../models/spaces");

const getAllSpaces = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const rows = await spaceModel.getSpaces(user_id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const addSpace = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const { name, description, icon } = req.body;
    if (!name || !icon) {
      throw new Error("Name & icon are required");
    }
    const newSpace = await spaceModel.addSpace(
      name,
      user_id,
      description,
      icon
    );
    res.status(201).json(newSpace);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const space = await spaceModel.getSpace(id);
    if (!space) {
      res.status(404).json({ error: "Space not found" });
      return;
    }
    res.json(space);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const deleteSpace = async (req, res) => {
  try {
    const { id } = req.params;
    await spaceModel.deleteSpace(id);
    res.status(200).json({ message: "Space deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const updateSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, icon } = req.body;

    if (!name || !icon) {
      throw new Error("Name & icon are required");
    }

    const newSpace = await spaceModel.updateSpace(id, name, description, icon);
    res.json(newSpace);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = {
  getAllSpaces,
  addSpace,
  getSpace,
  deleteSpace,
  updateSpace,
};
