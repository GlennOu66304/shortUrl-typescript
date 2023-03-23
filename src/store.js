import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reduex/reducers';

// reducer
const store = configureStore({
  reducer: rootReducer
});

export default store;
