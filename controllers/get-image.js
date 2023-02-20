const scrapeInstagram = require("../config/insta-scrapper");

var config = { username: process.env.INSTAGRAM_USERANME, password:process.env.INSTAGRAM_PASSWORD };

const getInstaImages = async (req, res) => {

    const {profile}=req.body;

  var result = await scrapeInstagram(profile);
  console.log(typeof result);
  res.send(result);
};

module.exports = getInstaImages;
