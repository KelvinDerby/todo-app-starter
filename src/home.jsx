const Home = () => {
  return (
    <div>
      <h1 className="heading1">Home</h1>
      <p>Welcome to the Home page!</p>

      {/* Todo 1 */}
      <div className="sidebar">
        <div className="sidebar-item">REACT</div>
        <div className="todo">
          <h3 className="todo-title">Todo 1</h3>
          <p className="todo-body">Read deeply on React</p>
          <button className="btn-open">Open</button>
          <button className="btn-complete">Complete</button>
        </div>
      </div>

      {/* Todo 2 */}
      <div className="sidebar">
        <div className="sidebar-item">JAVASCRIPT</div>
        <div className="todo">
          <h3 className="todo-title">Todo 2</h3>
          <p className="todo-body">Read deeply on JavaScript</p>
          <button className="btn-open">Open</button>
          <button className="btn-complete">Complete</button>
        </div>
      </div>

      {/* Todo 3 */}
      <div className="sidebar">
        <div className="sidebar-item">CSS</div>
        <div className="todo">
          <h3 className="todo-title">Todo 3</h3>
          <p className="todo-body">Read deeply on CSS</p>
          <button className="btn-open">Open</button>
          <button className="btn-complete">Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Home;