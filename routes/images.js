const express = require("express");
const router = express.Router();
const getInstaImages=require("../controllers/get-image");

router.route("/get-images").post(getInstaImages).get((req,res)=>{
    res.send("pong");
})

module.exports = router;
