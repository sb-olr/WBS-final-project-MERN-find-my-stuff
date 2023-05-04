// Todo: authorization checks
const spaceController = require("../models/spaces");

const getAllSpaces = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const rows = await spaceController.getSpaces(user_id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const addSpace = async (req, res) => {
  try {
    const { id: user_id } = req.user;
    const { name } = req.body;
    const newSpace = await spaceController.addSpace(name, user_id);
    res.status(201).json(newSpace);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const getSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const space = await spaceController.getSpace(id);
    res.json(space);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const deleteSpace = async (req, res) => {
  try {
    const { id } = req.params;
    spaceController.deleteSpace(id);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const updateSpace = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const newSpace = spaceController.updateSpace(id, name);
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