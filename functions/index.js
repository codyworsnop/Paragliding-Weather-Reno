const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const cheerio = require('cheerio');
const fetch = require('node-fetch');

exports.collectSource = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
        const url = request.body.url
        const res = await fetch(url);
        const html = await res.text();

        if (request.body.parseTag) {
            const $ = cheerio.load(html);
            const data = $(request.body.tag).text() 
            response.send(data)

        } else { 
            const data = cheerio.load(html).text();
            response.send(data)
        }
    });
});

