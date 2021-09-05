import typeToReducer from 'type-to-reducer'
import { GET_SCRAPER_DATA } from '../_actions/DashboardActions'

const initialState = {}

export const dashboardReducer = typeToReducer({
    [GET_SCRAPER_DATA]: { 
        PENDING: (state, action) => {
            console.log("PENDING")
            return {
                ...state,
            }
        },
        REJECTED: (state, action) => {
            console.log("REJECTED")

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
    }
}, initialState)