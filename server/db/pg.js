const { Pool } = require("pg");

// const connectionString = process.env.DB_URL_LOCAL;
const connectionString = process.env.DB_URL_DEV;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
