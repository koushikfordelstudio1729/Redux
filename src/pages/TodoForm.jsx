import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoFeature/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const allTodo = useSelector((state) => state.todo);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const newTodo = { id: crypto.randomUUID(), title, status: false };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title cannot be empty");
      return;
    }

    const isDuplicate = allTodo.some(
      (todo) => todo.title.toLowerCase() === title.toLowerCase()
    );
    if (isDuplicate) {
      setError("Todo with this title already exists.");
      return;
    }

    dispatch(addTodo(newTodo));
    setTitle("");
    setError("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <form
        onSubmit={handleAddTodo}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(""); // Clear error when the user starts typing
          }}
          placeholder="Enter task title"
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
