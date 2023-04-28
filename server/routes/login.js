const express = require("express");
const { Pool } = require("pg");

const router = express.Router();

// const connectionString = process.env.DB_URL_LOCAL;
const connectionString = process.env.DB_URL_DEV;

const pool = new Pool({
  connectionString,
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const { email, password} = req.body;
    res.json({'token': 'fake token'})
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
