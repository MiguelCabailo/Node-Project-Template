import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js'

const initialState = {};

// all middleware here and spread to separate them each on their own
const middleware = [thunk];

// (rootReducer, initialState, applyMiddleware)
// compose is due to redux tools so we wrap middleware there
const store = createStore(
    rootReducer,
    //optional
    initialState, 
    compose(
        applyMiddleware(...middleware),
        //copy paste it to be able to use the redux dev tools on chrome
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
