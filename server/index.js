const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT || 3000;

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send(Date.now() + " - Hello World!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
