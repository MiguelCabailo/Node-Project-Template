import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';


// reducer checks for action.type this is where we set it
// use the dispatch to send the type and data from the request
// thunk allows us to make an async request
export const getItems = () => dispatch => {
    // to manually dispatch an item
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
}

export const addItem = item => dispatch => {
    axios
        .post('/api/items', item)
        .then(res =>{
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
}

export const deleteItem = id => dispatch=> {
    axios
        .delete(`/api/items/${id}`)
        .then(res=>{
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
}



export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}