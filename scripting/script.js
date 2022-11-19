const puppeteer  = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto("Just paste your Link",{ 
    waitUntil:'load',
    timeout:0
  });

  var allLinks = await page.$$eval('a', links =>links.map(a => a.href));

  for (let i = 0; i<allLinks.length; i++){
    console.log( allLinks[i])
  }

  await browser.close();
})();