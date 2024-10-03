import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, userName: "Koushik" };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increament: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decreament: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

const counterReducer = counterSlice.reducer;
const { increament, decreament, reset } = counterSlice.actions;

export { counterReducer, increament, decreament, reset };
