import '../App.css';
import {useContext, useState} from "react";
import Context from "../context";
import dayjs from "dayjs";

function TodoItem ({el}){
    const {remove} = useContext(Context);
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
            <button onClick={remove.bind(null, el.id)}>&#10006;</button>
        </li>
    )
}

export default TodoItem;