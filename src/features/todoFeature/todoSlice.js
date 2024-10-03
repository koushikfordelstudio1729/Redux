import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggeleTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: !item.status };
        } else {
          return item;
        }
      });
    },
    updateTodo: (state, action) => {
      console.log(action.payload.id);
      console.log(action.payload.editedTitle);
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.editedTitle };
        } else {
          return item;
        }
      });
    },
  },
});

const todoReducer = todoSlice.reducer;
const { addTodo, deleteTodo, updateTodo, toggeleTodo } = todoSlice.actions;
export { todoReducer, addTodo, deleteTodo, updateTodo, toggeleTodo };
