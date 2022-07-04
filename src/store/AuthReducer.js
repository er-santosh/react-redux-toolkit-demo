import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const login = (state) => {
  state.isAuthenticated = true;
};

const logout = (state) => {
  state.isAuthenticated = false;
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login,
    logout,
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
