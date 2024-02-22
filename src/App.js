import  React, {useState } from "react";
import "./App.css";
import Todolist from "./component/Todolist";
import Todo from "./component/Todo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoToshow, settodoToshow] = useState("all");
  const [toggleallcomplete, settoggleallcomplete] = useState(true);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);// ...todos دة معناه ضيف التاسك الي انتا عاوزها مع المحافظة على باقى التاسكات القديمة الي موجودة بمعني اخر التسكات الى احنا ضفناها قبل التاسك الى هننضاف دلوقتى
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodoshow = (s) => {
    settodoToshow(s);
  };
  const removeAllTodoThatAreComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  if (todoToshow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoToshow === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }
  return (
    <div className="container">
      <Todolist onSubmit={addTodo} />


      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => handleDelete(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}
      <div>
        <button
          className="update-btn btn"
          onClick={() => updateTodoshow("all")}
        >
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoshow("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoshow("complete")}
        >
          Complete
        </button>
      </div>

      {todos.some((todo) => todo.complete) ? (
        <button className="all-btn btn" onClick={removeAllTodoThatAreComplete}>
          Remove all complete todos
        </button>
      ) : null}
      <button
        className="all-btn btn"
        onClick={() => {
          setTodos(
            todos.map((todo) => ({
              ...todo,
              complete: toggleallcomplete,
            })))
            settoggleallcomplete(!toggleallcomplete)
          
        }}
      >
        Toggle all complete : {`${toggleallcomplete}`}
      </button>
    </div>
  );
}

export default App;
