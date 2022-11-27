import TodoItem from "./TodoItem";

function TodosList ({todos, onRemove}){
    return (
      <>
        <h2 className="App-second">Список:</h2>
          <ul>
              {todos.map((elem, idx) => <TodoItem key={idx} el={elem} remove={onRemove} />)}
          </ul>
      </>
    );
}

export default TodosList;