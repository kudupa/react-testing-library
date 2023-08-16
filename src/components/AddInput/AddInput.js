import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";

function AddInput({ setTodos }) {
  const [todo, setTodo] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => {
      let updatedTodos = [
        ...prevTodos,
        {
          id: v4(),
          task: todo,
          completed: false,
        },
      ];
      setTodos(updatedTodos);
    });
    setTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <div className="input-container">
        <input
          className="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task here..."
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddInput;
