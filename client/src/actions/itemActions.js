import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

// reducer checks for action.type this is where we set it
export const getItems = ()=>{
    return {
        type: GET_ITEMS
        //payload: res.data
    }
}

export const deleteItem = id =>{
    return {
        type: DELETE_ITEM,
        // reducer needs to know the id to delete
        payload: id
    }
}

export const addItem = item =>{
    return {
        type: ADD_ITEM,
        // reducer needs to know the id to delete
        payload: item
    }
}