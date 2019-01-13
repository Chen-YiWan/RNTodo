import { ADD_TODO, TOGGLE_TODO, SET_TODO_DESCRIPTION } from '../actions/actionTypes';
import produce from "immer"

const initialState = {
    data: [],
};

export default function( state = initialState, action){
    return produce(state, draft => {
        switch (action.type) {
            case ADD_TODO:
                draft.data.push({...action.payload, completed: false});
                break;
            case TOGGLE_TODO:
                draft.data[action.payload.id-1].completed = !draft.data[action.payload.id-1].completed;
                break;
            case SET_TODO_DESCRIPTION:
                draft.data[action.payload.id-1].description = action.payload.description;
                break;
        }
    })
}

  