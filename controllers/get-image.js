const scrapeInstagram = require("../config/insta-scrapper");

const getInstaImages = async (req, res) => {

    const {profile}=req.body;

  var result = await scrapeInstagram(profile);
  console.log(typeof result);
  res.send(result);
};

module.exports = getInstaImages;
