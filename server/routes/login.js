const express = require("express");

const router = express.Router();

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
