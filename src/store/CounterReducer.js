import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: false,
};

const increment = (state) => {
  state.counter++;
};

const decrement = (state) => {
  state.counter--;
};

const toggleCounter = (state) => {
  state.showCounter = !state.showCounter;
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
    decrement,
    toggleCounter,
  },
});

export const counterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
