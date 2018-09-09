import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js'

const initialState = {};

// all middleware here and spread to separate them each on their own
const middleware = [thunk];

const composeEnhancers =  typeof window === 'object' &&  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const composingMiddlewareAndDevTools = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, composingMiddlewareAndDevTools);

console.log(store.getState());

export default store;
