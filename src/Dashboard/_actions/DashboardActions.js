import { createAction } from "redux-actions"
import axios from "axios";
import { message } from "antd";

export const PARAGLIDE_ENDPOINT = 'https://us-central1-paraglidingweatherreno.cloudfunctions.net/collectSource'
export const PARAGLIDE_ENDPOINT_TEST = 'http://localhost:5001/paraglidingweatherreno/us-central1/collectSource'
export const NWS_ENDPOINT = "https://api.weather.gov/stations/KRNO/observations"
export const NWS_PRODUCTS = "https://api.weather.gov/products/types/SRG/locations/REV"
export const NWS_PRODUCT = "https://api.weather.gov/products/"

// This api uses a secret key. Since this is the base-tier free version, there's no concerns exposing it. 
// If needing to upgrade, hide this key :o 
export const OPEN_WEATHER_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?lat=39.5261206&lon=-119.8126581&appid=5068f18b0ec308aec7323e733de85b94&units=imperial"

export const GET_SCRAPER_DATA = 'GET_SCRAPER_DATA'
export const GET_OBSERVATIONS = 'GET_OBSERVATIONS'
export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT = "GET_PRODUCT"
export const GET_FORECAST = "GET_FORECAST"

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
        message.error(err.toString())
        return Promise.reject(err)
    })
);

export const getProducts = createAction(GET_PRODUCTS, async () => 
    await axios.get(NWS_PRODUCTS)
    .then(resp => resp)
    .catch(err => {
        message.error(err.toString())
        return Promise.reject(err)
    })
);

export const getProduct = createAction(GET_PRODUCT, async (id) => 
    await axios.get(NWS_PRODUCT + id)
    .then (resp => resp)
    .catch(err => {
        message.error(err.toString())
        return PromiseRejectionEvent.reject(err)
    })
);

export const getForecast = createAction(GET_FORECAST, async () =>
    await axios.get(OPEN_WEATHER_FORECAST)
    .then (resp => resp)
    .catch(err => {
        message.error(err.toString())
        return PromiseRejectionEvent.reject(err)
    })
);