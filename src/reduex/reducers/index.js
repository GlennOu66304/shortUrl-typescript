import { combineReducers } from '@reduxjs/toolkit'
import shortUrlReducer from './shortUrlSlice'

const rootReducer = combineReducers({
  shortUrl: shortUrlReducer
})

export default rootReducer
