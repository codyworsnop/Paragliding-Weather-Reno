import typeToReducer from 'type-to-reducer'
import { GET_SCRAPER_DATA, GET_OBSERVATIONS, GET_PRODUCTS, GET_PRODUCT } from '../_actions/DashboardActions'

const initialState = {}

export const dashboardReducer = typeToReducer({
    [GET_SCRAPER_DATA]: { 
        PENDING: (state, action) => {
            return {
                ...state,
            }
        },
        REJECTED: (state, action) => {
            return { 
                ...state,
            }
        },
        FULFILLED: (state, action) => {
            let update = { 
                ...state,
            }

            update[action.payload.key] = { data: action.payload.data, loading: false}

            return update
        },
    },
    [GET_OBSERVATIONS]: {
        PENDING: (state, action) => {
            return {
                ...state,
            }
        },
        REJECTED: (state, action) => {
            return { 
                ...state
            }
        },
        FULFILLED: (state, action) => {
            return {
                ...state,
                observations: action.payload.data.features
            }
        }
    },
    [GET_PRODUCTS]: {
        PENDING: (state, action) => {
            return {
                ...state,
            }
        },
        REJECTED: (state, action) => {
            return { 
                ...state
            }
        },
        FULFILLED: (state, action) => {
            return {
                ...state,
                products: action.payload.data['@graph']
            }
        }
    },
    [GET_PRODUCT]: {
        PENDING: (state, action) => {
            return {
                ...state,
            }
        },
        REJECTED: (state, action) => {
            return { 
                ...state
            }
        },
        FULFILLED: (state, action) => {
            return {
                ...state,
                product: action.payload.data
            }
        }
    }
}, initialState)