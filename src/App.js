import './App.css';
import TodosList from "./components/TodosList";
import {useState} from "react";
import Context from "./context";
import * as dayjs from "dayjs";

function App() {
    const [todos, setTodos] = useState([
        {
            id: Date.now(),
            title: 'Test 1',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, mollitia?',
            file: 'ничего не добавлено',
            endTime: dayjs(Date.now()).hour(14).minute(20).format('HH:mm'),
            completed: false,
        },
    ]);
    const [text, setText] = useState('');
    const [textDescr, setTextDescr] = useState('');
    const [file, setFile] = useState(undefined);

    const handleFile = (event) =>{
        event.preventDefault();
        let data = event.target.files[0];
        setFile(data);
    }

    const addTodo = () =>{
        setTodos([
            ...todos,
            {
                id: Date.now(),
                title: text,
                descr: textDescr,
                file: file.name || 'ничего не добавлено',
                endTime: Date.now(),
                completed: false,
            }
        ])
    }

    const remove = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <Context.Provider value={{remove}}>
            <div className="App">
                <h1>Добавить задачу</h1>
                <header className="App-header">
                    <input type="text" className="App-input" onChange={event => setText(event.target.value)} placeholder="Название задачи" />
                    <input type="text" className="App-input" onChange={event => setTextDescr(event.target.value)} placeholder="Описание задачи" />
                    <input type="file" accept="text/*, .txt, .docx, .pdf" className="App-input" onChange={handleFile} />
                    <button type="submit" onClick={addTodo}>Добавить</button>
                </header>
                <hr/>
                <TodosList todos={todos} />
            </div>
        </Context.Provider>
    );
}

export default App;
