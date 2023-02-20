const express = require("express");
const router = express.Router();

router.route("/ping").get((req, res) => {
  res.send("pong");
});

module.exports = router;
