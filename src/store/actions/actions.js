import { ADD_TODO, TOGGLE_TODO, SET_TODO_DESCRIPTION } from './actionTypes';

let nextTodoId = 0;

export const addTodo = title => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        title
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});


export const setTodoDescription = (id, description) => ({
    type: SET_TODO_DESCRIPTION,
    payload: { id, description }
});

