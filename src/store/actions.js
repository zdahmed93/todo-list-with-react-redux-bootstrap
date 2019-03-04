
export const ADD='ADD';
export const DELETE='DELETE';
export const EDIT='EDIT';

export const addItem=(item)=>{
    return{
        type: ADD,
        item:item
    }
}

export const deleteItem=(item)=>{
    return {
        type: DELETE,
        item
    }
}

export const editItem = (item) =>{
    return {
        type: EDIT,
        item
    }
}


