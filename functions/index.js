const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const puppeteer = require('puppeteer')
const cheerio = require('cheerio');
const fetch = require('node-fetch');

exports.scrapePreformattedText = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {

        const url = request.body.url
        const res = await fetch(url);

        const html = await res.text();
        const $ = cheerio.load(html);
        const data = $(`pre`).text() 

        response.send(data)
    });
});

exports.scrapeTable = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {

        const url = request.body.url
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage();

        await page.goto(url)
        await page.waitForSelector("table")

        const data = await page.evaluate(() => {
            // const content = document.querySelector("table").innerText
            const tds = Array.from(document.querySelectorAll('table tr td'))
            return tds.map(td => td.innerText)
        });

        await browser.close()
        response.send(data)
    })
});

exports.scrapeSoundings = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {

        const url = request.body.url
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage();

        await page.goto(url)
        await page.waitForSelector("input[type=radio][value=RAOB]")
        await page.click("input[type=radio][value=RAOB]")
        await page.click("input[type=submit][value=\"Interactive plot\"]")
        await page.waitFor(1000)

        await browser.close()
    })
});