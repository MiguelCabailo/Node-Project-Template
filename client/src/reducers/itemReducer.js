// actual state goes
// check actions
import uuid from 'uuid';
//any action we have we need types for like add delete etc
// the import is to just store the strings in a vairable to aviod errors
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Candy' }
    ]
}

// takes an initial state and an action, the imported ones
// will have a type attached to it
export default function(state= initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item)=>item.id!== action.payload)
            };
        case ADD_ITEM:
            return{
                ...state,
                items : [action.payload,...state.items]
            }
        default:
            return state;
    }
}
