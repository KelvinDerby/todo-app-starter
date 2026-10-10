import { useState } from "react";
import Form from "./Form";

const Home = () => {
  // Manage the todos with useState
  const [todos, setTodos] = useState([
    { id: 1, category: "REACT", title: "Todo 1", body: "Read deeply on React" },
    { id: 2, category: "JAVASCRIPT", title: "Todo 2", body: "Read deeply on JavaScript" },
    { id: 3, category: "CSS", title: "Todo 3", body: "Read deeply on CSS" },
  ]);
  const [nextId, setNextId] = useState(4);

  // Function to add a todo
  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
    setNextId((prev) => prev + 1);
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Receives the form values from <Form />, gives them an id, and adds the todo
  const handleAddTodo = (formValues) => {
    addTodo({ id: nextId, ...formValues });
  };

  // Runs when a todo's Delete button is clicked
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      <h1 className="heading1">Home</h1>
      <p>Welcome to the Home page!</p>

      {/* Form to add a new todo */}
      <Form onAddTodo={handleAddTodo} />

      {/* Todos */}
      {todos.length === 0 && <p className="empty-message">No todos yet. Add one above!</p>}

      {todos.map((todo) => (
        <div className="sidebar" key={todo.id}>
          <div className="sidebar-item">{todo.category}</div>
          <div className="todo">
            <h3 className="todo-title">{todo.title}</h3>
            <p className="todo-body">{todo.body}</p>
            <button className="btn-open">Open</button>
            <button className="btn-complete">Complete</button>
            <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Home;