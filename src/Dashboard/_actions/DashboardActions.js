import { createAction } from "redux-actions"
import axios from "axios";
import { message } from "antd";

export const PARAGLIDE_ENDPOINT = 'https://us-central1-paraglidingweatherreno.cloudfunctions.net/collectSource'
export const PARAGLIDE_ENDPOINT_TEST = 'http://localhost:5001/paraglidingweatherreno/us-central1/collectSource'
export const NWS_ENDPOINT = "https://api.weather.gov/stations/KRNO/observations"

export const GET_SCRAPER_DATA = 'GET_SCRAPER_DATA'
export const GET_OBSERVATIONS = 'GET_OBSERVATIONS'

export const getScraperData = createAction(GET_SCRAPER_DATA, async (url, reducerKey, tag) =>
    await axios.post(PARAGLIDE_ENDPOINT, { "url": url, "parseTag": !!tag, "tag": tag })
        .then(resp => ({ key: reducerKey, data: resp.data }))
        .catch(err => {
            message.error(err.toString())
            return Promise.reject(err);
        })
);

export const getObservations = createAction(GET_OBSERVATIONS, async () => 
    await axios.get(NWS_ENDPOINT)
    .then(resp => resp)
    .catch(err => {
        message.error(err.ToString())
        return Promise.reject(err)
    })
);