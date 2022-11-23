import '../App.css';
import {useContext, useState} from "react";
import Context from "../context";

function TodoItem ({el}){
    const {remove} = useContext(Context);
    const [checked, setChecked] = useState();
    const newClass = [];
    if (checked){
        el.completed = true;
        newClass.push('done');
    }

    return(
        <li className={newClass}>
            <input type="checkbox" onChange={() => setChecked(!checked)}/>
            <h3>{el.title}</h3>
            <p>{el.descr}</p>
            <div>{el.file}</div>
            <time>{el.endTime}</time>
            <button onClick={remove.bind(null, el.id)}>&#10006;</button>
        </li>
    )
}

export default TodoItem;