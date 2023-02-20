const express = require("express");
const router = express.Router();
const getInstaImages=require("../controllers/get-image");

router.route("/ping").get(getInstaImages);

module.exports = router;
