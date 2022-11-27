import { useContext, useState } from "react";
import { FirebaseContext } from "../firebase/firebaseContext";

function Form(){
    const [text, setText] = useState('');
    const [textDescr, setTextDescr] = useState('');
    const [file, setFile] = useState(undefined);
    const firebase = useContext(FirebaseContext);

    const handleFile = (event) =>{
        event.preventDefault();
        let data = event.target.files[0];
        setFile(data);
    }

    const addTobase = () =>{
        if(text.trim() || textDescr.trim()){
            firebase.addTodo(text, textDescr, file);
            setText('');
            setTextDescr('');
        }else{
            alert('Введите данные для добавления заметки');
        }
        
    }
    return(
        <header className="App-header">
            <input type="text" className="App-input" onChange={event => setText(event.target.value)} placeholder="Название задачи" />
            <input type="text" className="App-input" onChange={event => setTextDescr(event.target.value)} placeholder="Описание задачи" />
            <input type="file" accept="text/*, .txt, .docx, .pdf" className="App-input" onChange={handleFile} />
            <button type="submit" onClick={addTobase}>Добавить</button>
        </header>
    );
}

export default Form;