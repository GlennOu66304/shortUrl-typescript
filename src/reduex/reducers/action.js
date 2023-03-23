import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchAsyncData = createAsyncThunk('data/fetchAsyncData', async () => {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/list`)
    return response.data
  })
  