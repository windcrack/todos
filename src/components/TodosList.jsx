import TodoItem from "./TodoItem";

function TodosList ({todos}){
    return (
      <>
        <h2 className="App-second">Список:</h2>
          <ul>
              {todos.map((elem, idx) => <TodoItem key={idx} el={elem} />)}
          </ul>
      </>
    );
}

export default TodosList;