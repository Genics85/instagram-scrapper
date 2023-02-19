const request = require("request-promise");
const cheerio = require("cheerio");
const puppeteer=require("puppeteer");

var config = { username: "genicist__", password: "" };

async function scrapeInstagram(profle,usernameAndPasswordConfig){
  const browser=await puppeteer.launch({headless:false,executablePath:"C:/Users/Genics/Documents/chrome-win/chrome.exe"});
  const page=await browser.newPage();

  await page.goto("https://www.instagram.com/accounts/login/?source=auth_switcher");
  await page.waitFor(1000);
}

scrapeInstagram("genicist__",config)