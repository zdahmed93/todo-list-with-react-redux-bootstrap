

import {ADD, DELETE, EDIT} from './actions'



const homeReducer = (state = [], action) => {
    switch (action.type) {
        case ADD: 
            return [...state, action.item]
        

        case DELETE: 
            return [...state].filter((item) => (item !== action.item))

        
        case EDIT: {
            let modification = prompt('Edit your item here');
            return [...state].map(item => (item === action.item) ? modification : item);
        }

        default: 
            return state
        
    }
}
export default homeReducer;
