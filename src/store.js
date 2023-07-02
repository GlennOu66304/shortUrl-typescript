import { configureStore, combineReducers } from "@reduxjs/toolkit";

import shortUrlReducer from "./reduex/slices/shortUrlSlice";
import authReducer  from "./reduex/slices/authSlice";
export const rootReducer = combineReducers({
  shortUrl: shortUrlReducer,
  auth: authReducer,
});

// reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
