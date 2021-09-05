const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const puppeteer = require('puppeteer')

const collect = async (url) => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    
    await page.goto(url);
    await page.waitForSelector('pre')

    // Execute code in the DOM
    const data = await page.evaluate(() => {

        const content = document.querySelector('pre').innerHTML
        return content
    });
  
    await browser.close();
    return data;
}

exports.scraper = functions.runWith({
    timeoutSeconds: 60,
    memory: "1GB"
}).https.onRequest( async (request, response) => {
    cors(request, response, async () => {
        const data = await collect(request.body.url);
        response.send(data)

    });
});
