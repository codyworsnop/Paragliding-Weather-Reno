import { createAction } from "redux-actions"
import axios from "axios";
import { message } from "antd";

export const PARAGLIDE_ENDPOINT = 'https://us-central1-paraglidingweatherreno.cloudfunctions.net/scrapePreformattedText'
export const PARAGLIDE_ENDPOINT_TEST = 'http://localhost:5001/paraglidingweatherreno/us-central1/scrapePreformattedText'

export const GET_SCRAPER_DATA = 'GET_SCRAPER_DATA'

export const getScraperData = createAction(GET_SCRAPER_DATA, async (url, reducerKey ) =>
    await axios.post(PARAGLIDE_ENDPOINT_TEST, { "url": url })
        .then(resp => ({ key: reducerKey, data: resp.data }))
        .catch(err => {
            message.error(err.toString())
            return Promise.reject(err);
        })
);