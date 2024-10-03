import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggeleTodo,
  updateTodo,
} from "../features/todoFeature/todoSlice";

const TodoView = ({ id, title, status }) => {
  const dispatch = useDispatch();

  // Local state to handle edit mode and updated title
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggeleTodo(id));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value); // Update local title state
  };

  const handleSave = (id, editedTitle) => {
    dispatch(updateTodo({ id, editedTitle }));
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Checkbox to toggle status */}
        <input
          type="checkbox"
          checked={status}
          onChange={() => handleToggleTodo(id)}
          style={{ marginRight: "10px" }}
        />
        <div>
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0 0 5px 0",
                padding: "5px",
                borderRadius: "3px",
                border: "1px solid #ccc",
              }}
            />
          ) : (
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0 0 5px 0",
                textDecoration: status ? "line-through" : "none", // Line-through when status is true
              }}
            >
              {editedTitle}
            </p>
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            backgroundColor: "#ff6347",
            color: "white",
            border: "none",
            padding: "5px 10px",
            marginRight: "5px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={() => handleDeleteTodo(id)}
        >
          Delete
        </button>

        {/* Toggle between "Update" and "Save" button */}
        {isEditing ? (
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            onClick={() => handleSave(id, editedTitle)}
            
          >
            Save
          </button>
        ) : (
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            onClick={handleEditToggle}
            disabled={status}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoView;
