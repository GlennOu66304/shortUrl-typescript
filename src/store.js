import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "./reduex/slices/authSlice";
import shortUrlReducer from "./reduex/slices/shortUrlSlice";
import userReducer from "./reduex/slices/userSlice";

export const rootReducer = combineReducers({
  shortUrl: shortUrlReducer,
  auth: authReducer,
  user: userReducer
});


const persistConfig = {
  key: 'root', // key prefix for the stored data
  storage, // storage mechanism (e.g., local storage)
  whitelist: ["authentication.userId"], // specify the slice(s) of state to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);




// reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false, // disable warning for non-serializable data
  }),
});
export const persistor = persistStore(store);
export default store;
