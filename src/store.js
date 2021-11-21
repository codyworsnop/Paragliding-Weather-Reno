import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import { dashboardReducer } from './Dashboard/_reducers/dashboardReducer';
import { authReducer } from './Core/_reducers/authReducer'
import { contentReducer } from './Core/_reducers/contentReducer'

const middlewares = [promise, thunk]

const rootReducer = combineReducers({
    dashboardReducer,
    authReducer,
    contentReducer,
});

export default function configureStore(preloadedState) { 
    return createStore(rootReducer, preloadedState, compose(applyMiddleware(...middlewares)))
}