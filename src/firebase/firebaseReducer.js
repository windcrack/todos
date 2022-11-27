import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from './type'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state, todos: [...state.todos, payload]
    }),
    [FETCH_NOTES]: (state, {payload}) => ({...state, todos: payload, loading: false}),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state, 
        todos: state.todos.filter(todo => todo.id !== payload)
    }),
    DEFAULT: state => state,
}

export const firebaseReducer = (state, action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
}