// eslint-disable-next-line
import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from './type'
import * as dayjs from "dayjs";


const url = 'https://react-todos-b795e-default-rtdb.asia-southeast1.firebasedatabase.app';

export const FirebaseState = ({children}) =>{
    const initialState = {
        todos: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchTodos = async () =>{
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
        const payload = Object.keys(res.data).map(key =>{
            return{
                ...res.data[key],
                id: key
            }
        })
        dispatch({type: FETCH_NOTES, payload})
        console.log('fetchTodos', res.data);
    }

    const addTodo = async (text, textDescr, file) =>{
        const todo = {
                id: Date.now(),
                title: text,
                descr: textDescr,
                file: file.name || 'ничего не добавлено',
                endTime: dayjs(Date.now()).add(30, 'minute').format('HH:mm'),
                completed: false,
        }
        try {
            const res = await axios.post(`${url}/notes.json`, todo);
            const payload = {
                ...todo,
                id: res.data.name,
            }

            dispatch({
                type: ADD_NOTE,
                payload,
            })
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
        
        
    }

    const removeTodo = async id =>{
        await axios.delete(`${url}/notes/${id}.json`);
        
        dispatch({
            type: REMOVE_NOTE,
            payload: id,
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchTodos, addTodo, removeTodo,
            loading: state.loading,
            todos: state.todos,
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}