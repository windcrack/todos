import '../App.css';
import {useState} from "react";
import dayjs from "dayjs";

function TodoItem ({el, remove}){
    const [checked, setChecked] = useState();
    const newClass = [];
    if (checked || dayjs().format('HH:mm') >= el.endTime){
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
            <button onClick={() => remove(el.id)}>&#10006;</button>
        </li>
    )
}

export default TodoItem;