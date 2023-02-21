const express = require("express");
const router = express.Router();
const getInstaImages=require("../controllers/get-image");

router.route("/get-images").post(getInstaImages);

module.exports = router;
