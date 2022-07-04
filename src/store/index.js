import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./CounterReducer.js";
import { authReducer } from "./AuthReducer.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
