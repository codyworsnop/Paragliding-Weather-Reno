import typeToReducer from 'type-to-reducer'
import { SET_USER_CLAIMS } from '../_actions/authActions'
import { SET_USER } from '../_actions/authActions'

const initialState = {
    user: undefined, 
    role: undefined
}

export const authReducer = typeToReducer({
    [SET_USER] (state, action) { 
        return {
            ...state,
            user: action.payload
        }
    },
    [SET_USER_CLAIMS]: {
        PENDING: (state, action) => {
            return {
                ...state
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
                role: action.payload.claims,
            }
        }
    }
}, initialState)