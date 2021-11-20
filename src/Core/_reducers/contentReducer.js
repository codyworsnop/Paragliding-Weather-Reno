import typeToReducer from 'type-to-reducer'
import { WRITE_FIRESTORE_JSON, READ_FIRESTORE_JSON } from '../_actions/FirebaseActions'

const initialState = {
    pages: undefined,
    loading: false,
}

export const contentReducer = typeToReducer({
    [WRITE_FIRESTORE_JSON]:  {
        PENDING: (state, action) => ({
            ...state, 
            loading: true,
        }),
        REJECTED: (state, action) => ({            
            ...state,
            loading: false
        }),
        FULFILLED: (state, action) => ({
            ...state,
            loading: false,
        })
    },
    [READ_FIRESTORE_JSON]: {
        PENDING: (state, action) => ({
            ...state, 
            loading: true,
        }),
        REJECTED: (state, action) => ({            
            ...state,
            loading: false
        }),
        FULFILLED: (state, action) => ({
            ...state,
            loading: false,
            pages: action.payload
        })
    }
}, initialState)