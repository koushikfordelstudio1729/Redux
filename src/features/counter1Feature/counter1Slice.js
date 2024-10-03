import { createSlice } from "@reduxjs/toolkit";

const initialState = { count1: 0, userName: "John doe" };

const counter1Slice = createSlice({
  name: "counter1",
  initialState: initialState,
  reducers: {
    increament1: (state) => {
      return { ...state, count1: state.count1 + 1 };
    },
    decreament1: (state) => {
      state.count1 -= 1;
    },
    reset1: (state) => {
      state.count1 = 0;
    },
  },
});

const counter1Reducer = counter1Slice.reducer;
const { increament1, decreament1, reset1 } = counter1Slice.actions;
export { counter1Reducer, increament1, decreament1, reset1 };
