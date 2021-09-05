const functions = require("firebase-functions");

const cors = require('cors')({ origin: true });
const cheerio = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer')

const collect = async (url) => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    
    await page.goto(url);
    await page.screenshot({path: '1.png'})
    await page.waitForSelector('pre')

    // Execute code in the DOM
    const data = await page.evaluate(() => {

        const content = document.querySelector('pre').innerHTML
        return content
    });
  
    await browser.close();
    return data;
}

exports.scraper = functions.https.onRequest( async (request, response) => {
    cors(request, response, async () => {

        console.log(request.body.url)
        const data = await collect(request.body.url);

        response.send(data)

    });
});
