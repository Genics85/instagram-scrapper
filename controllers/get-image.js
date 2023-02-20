const scrapeInstagram = require("../config/insta-scrapper");

var config = { username: "genicist__", password: "GenicsInsta" };

const getInstaImages = async (req, res) => {
  var result = await scrapeInstagram("genicist__", config);
  console.log(typeof result);
  res.send(result);
};

module.exports = getInstaImages;
