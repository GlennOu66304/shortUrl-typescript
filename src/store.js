import { configureStore,combineReducers} from '@reduxjs/toolkit';

import shortUrlReducer from './reduex/slices/shortUrlSlice'

export const rootReducer = combineReducers({
  shortUrl: shortUrlReducer
})

// reducer
const store = configureStore({
  reducer: rootReducer
});

export default store;
