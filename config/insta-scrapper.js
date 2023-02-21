const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

async function scrapeInstagram(profile) {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:/Users/Genics/Documents/chrome-win/chrome.exe",
  });
  const page = await browser.newPage();

  //   await page.goto("https://www.instagram.com/accounts/login/?source=auth_switcher");
  //   await page.waitForTimeout(1000);
  //   await page.type("input[name='username']",usernameAndPasswordConfig.username);
  //   await page.type("input[name='password']",usernameAndPasswordConfig.password);
  //   await (await page.$("button[type='submit']")).click();
  //   await page.waitForTimeout(5000);
  await page.goto(`https://www.instagram.com/${profile}/`);
  //   await page.waitForTimeout(5000);
  new Promise((r) => setTimeout(r, 5000));

  var allImages = await page.evaluate(() => {
    var allImagesarr = [];
    document.querySelectorAll("img").forEach((img) => {
      var link = img.getAttribute("src");
      allImagesarr.push(link);
    });

    return allImagesarr;
  });

  new Promise((r) => setTimeout(r, 2000));

  // await page.waitForTimeout(2000);
  await page.close();
  return allImages;
}

module.exports = scrapeInstagram;
