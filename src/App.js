import './App.css';
import TodosList from "./components/TodosList";
import React, {useContext, useEffect} from "react";

import { FirebaseContext } from './firebase/firebaseContext';
import Loader from './components/Loader/Loader';
import Form from './components/Form';

function App() {
    const {loading, todos, fetchTodos, removeTodo} = useContext(FirebaseContext);

    useEffect(() =>{
        fetchTodos()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="App">
            <h1>Добавить задачу</h1>
            <Form />
            <hr/>
            {loading ? <Loader /> : <TodosList todos={todos} onRemove={removeTodo} />}
        </div>
    );
}

export default App;
