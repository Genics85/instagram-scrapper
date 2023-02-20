const express = require("express");
const router = express.Router();
const getInstaImages=require("../controllers/get-image");

router.route("/ping").post(getInstaImages);

module.exports = router;
