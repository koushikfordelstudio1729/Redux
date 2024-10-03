import React from "react";
import { useSelector } from "react-redux";
import TodoView from "./TodoView";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <>
      {todo.length !== 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "600px",
            margin: "20px auto",
          }}
        >
          {todo.length !== 0 && (
            <>
              {todo.map((item) => (
                <TodoView key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default TodoList;
