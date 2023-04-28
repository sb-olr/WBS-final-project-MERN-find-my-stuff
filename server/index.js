const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const usersRouter = require("./routes/users");
const spacesRouter = require("./routes/spaces");
const loginRouter = require("./routes/login");
const verifyJWTToken = require("./middleware/verifyJWTToken");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/users", usersRouter);
app.use("/api/spaces", verifyJWTToken, spacesRouter);
app.use("/api/login", loginRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
