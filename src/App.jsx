import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import React from "react";
import {
  decreament,
  increament,
  reset,
} from "./features/counterFeature/counterSlice";
import {
  decreament1,
  increament1,
  reset1,
} from "./features/counter1Feature/counter1Slice";
import TodoForm from "./pages/TodoForm";
import TodoList from "./pages/TodoList";

const CounterTemplate = ({
  count,
  userName,
  increament,
  decreament,
  reset,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        color:"black"
      }}
    >
      <h2>Hello, {userName}</h2>
      <h4>Counter: {count}</h4>
      <button
        onClick={increament}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
      <button
        onClick={decreament}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
      <button
        onClick={reset}
        style={{
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};

const App = () => {
  const { count, userName } = useSelector((state) => state.counter);
  const { count1, userName: userName1 } = useSelector(
    (state) => state.counter1
  );
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Counter & Todo App</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <CounterTemplate
            count={count}
            userName={userName}
            increament={() => dispatch(increament())}
            decreament={() => dispatch(decreament())}
            reset={() => dispatch(reset())}
          />
          {/* <CounterTemplate
            count={count1}
            userName={userName1}
            increament={() => dispatch(increament1())}
            decreament={() => dispatch(decreament1())}
            reset={() => dispatch(reset1())}
          /> */}
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
