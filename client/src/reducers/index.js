// root reducer brings all other reducers in
import {combineReducers} from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    // this is state.prop
    item: itemReducer
    // all other reducers here
})
