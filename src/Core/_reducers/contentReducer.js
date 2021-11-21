import typeToReducer from 'type-to-reducer'
import { WRITE_FIRESTORE_JSON, READ_FIRESTORE_JSON, DELETE_FIRESTORE_JSON, UPDATE_FIRESTORE_JSON } from '../_actions/FirebaseActions'

const initialState = {
    pages: undefined,
    loading: false,
}

export const contentReducer = typeToReducer({
    [WRITE_FIRESTORE_JSON]: {
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
    },
    [DELETE_FIRESTORE_JSON]: {
        PENDING: (state, action) => ({
            ...state,
            loading: true,
        }),
        REJECTED: (state, action) => ({
            ...state,
            loading: false
        }),
        FULFILLED: (state, action) => {

            const update = {
                ...state,
                loading: false,
            }

            let item = state.pages.find(item => item.id === action.payload)
            let index = state.pages.indexOf(item)
            update.pages.splice(index, 1)

            return update
        },
    },
    [UPDATE_FIRESTORE_JSON]: {
        PENDING: (state, action) => ({
            ...state,
            loading: true,
        }),
        REJECTED: (state, action) => ({
            ...state,
            loading: false
        }),
        FULFILLED: (state, action) => {

            const update = {
                ...state,
                loading: false,
            }

            let item = state.pages.find(item => item.id === action.payload)
            let index = state.pages.indexOf(item)
            update.pages.splice(index, 1, action.payload)

            return update
        },
    }
}, initialState)