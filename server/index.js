const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// const connectionString = process.env.DB_URL_LOCAL;
const connectionString = process.env.DB_URL_DEV;

const pool = new Pool({
  connectionString,
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});



app.listen(port, () => console.log(`Listening on port ${port}`));
