import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAsyncData = createAsyncThunk(
  "data/fetchAsyncData",
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/list`);
    return response.data;
  }
);

export const removeShortUrl = createAsyncThunk(
  "data/removeShortUrl",
  async (id, thunkApi) => {
    console.log(id);
    const response = await axios.delete(
      `${process.env.REACT_APP_API}/api/edit/${id}`
    );  
    return response.data;
  }
);

export const loadShortUrl = createAsyncThunk(
  "data/loadShortUrl",
  async (id, thunkApi) => {
    // console.log(id);
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/edit/${id}`
    );  
    return response.data;
  }
);