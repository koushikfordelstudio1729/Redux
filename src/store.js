import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterFeature/counterSlice";
import { counter1Reducer } from "./features/counter1Feature/counter1Slice";
import { todoReducer } from "./features/todoFeature/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter1: counter1Reducer,
    todo: todoReducer,
  },
});
