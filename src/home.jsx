import { useState } from "react";

const Home = () => {
  // Manage the todos with useState
  const [todos, setTodos] = useState([
    { id: 1, category: "REACT", title: "Todo 1", body: "Read deeply on React" },
    { id: 2, category: "JAVASCRIPT", title: "Todo 2", body: "Read deeply on JavaScript" },
    { id: 3, category: "CSS", title: "Todo 3", body: "Read deeply on CSS" },
  ]);
  const [nextId, setNextId] = useState(4);
  
  const [selectedId, setSelectedId] = useState("");
  const has = (id) => todos.some((todo) => todo.id === id);

  // Function to add a todo
  const addTodo = () => {
    const newTodo = {
      id: nextId,
      category: "NEW",
      title: `Todo ${nextId}`,
      body: "This is a newly added todo",
    };
    setTodos((prev) => [...prev, newTodo]);
    setNextId((prev) => prev + 1);
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // One handler that runs both functions (adds a new todo, deletes the chosen one)
  const handleAddAndDelete = () => {
    if (selectedId === "") return;
    addTodo();
    deleteTodo(Number(selectedId));
    setSelectedId("");
  };

  return (
    <div>
      <h1 className="heading1">Home</h1>
      <p>Welcome to the Home page!</p>

      {/* Choose which todo to delete, then click the button */}
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">-- Choose todo to delete --</option>
        {todos.map((todo) => (
          <option key={todo.id} value={todo.id}>
            {todo.title} ({todo.category})
          </option>
        ))}
      </select>
      <button onClick={handleAddAndDelete} disabled={selectedId === ""}>
        Add &amp; Delete Todo
      </button>

      {/* Todo 1 */}
      {has(1) && (
        <div className="sidebar">
          <div className="sidebar-item">REACT</div>
          <div className="todo">
            <h3 className="todo-title">Todo 1</h3>
            <p className="todo-body">Read deeply on React</p>
            <button className="btn-open">Open</button>
            <button className="btn-complete">Complete</button>
          </div>
        </div>
      )}

      {/* Todo 2 */}
      {has(2) && (
        <div className="sidebar">
          <div className="sidebar-item">JAVASCRIPT</div>
          <div className="todo">
            <h3 className="todo-title">Todo 2</h3>
            <p className="todo-body">Read deeply on JavaScript</p>
            <button className="btn-open">Open</button>
            <button className="btn-complete">Complete</button>
          </div>
        </div>
      )}

      {/* Todo 3 */}
      {has(3) && (
        <div className="sidebar">
          <div className="sidebar-item">CSS</div>
          <div className="todo">
            <h3 className="todo-title">Todo 3</h3>
            <p className="todo-body">Read deeply on CSS</p>
            <button className="btn-open">Open</button>
            <button className="btn-complete">Complete</button>
          </div>
        </div>
      )}

      {/* Newly added todos (same markup as above) */}
      {todos
        .filter((todo) => todo.id > 3)
        .map((todo) => (
          <div className="sidebar" key={todo.id}>
            <div className="sidebar-item">{todo.category}</div>
            <div className="todo">
              <h3 className="todo-title">{todo.title}</h3>
              <p className="todo-body">{todo.body}</p>
              <button className="btn-open">Open</button>
              <button className="btn-complete">Complete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;