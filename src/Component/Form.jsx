import { useState } from "react";

// onAddTodo comes from Home as a prop
const Form = ({ onAddTodo }) => {

   // Form fields (category, title, body)
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Runs when the form is submitted
  const handleAddTodo = (e) => {
    e.preventDefault();

    const category = formData.category.trim();
    const title = formData.title.trim();
    const body = formData.body.trim();

    if (!category || !title || !body) return;

    // Send the form data up to Home
    onAddTodo({ category, title, body });

    // Clear the form
    setFormData({ category: "", title: "", body: "" });
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="text"
        name="category"
        placeholder="e.g. REACT"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="e.g. Todo 4"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="body">Body</label>
      <textarea
        id="body"
        name="body"
        rows="3"
        placeholder="e.g. Read deeply on Node.js"
        value={formData.body}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn-add">
        Add Todo
      </button>
    </form>
  );
};

export default Form;