const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const usersRouter = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use('/api/users', usersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
