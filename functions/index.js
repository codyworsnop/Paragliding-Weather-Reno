const functions = require("firebase-functions");

const cors = require('cors')({ origin: true });
const cheerio = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');

const scrapeMetatags = async (text) => {

    const urls = Array.from( getUrls(text) );

    const requests = urls.map(async url => {

        const res = await fetch(url);

        const html = await res.text();
        const $ = cheerio.load(html);
        
        const getMetatag = (name) =>  
            $(`meta[name=${name}]`).attr('content') ||  
            $(`meta[name="og:${name}"]`).attr('content') ||  
            $(`meta[name="twitter:${name}"]`).attr('content');

        return { 
            url,
        }
    });


    return Promise.all(requests);
}

exports.scraper = functions.https.onRequest( async (request, response) => {
    cors(request, response, async () => {

        console.log(request.body.text)
      //  const body = JSON.parse(request.body);
        const data = await scrapeMetatags(request.body.text);

        response.send(data)

    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

