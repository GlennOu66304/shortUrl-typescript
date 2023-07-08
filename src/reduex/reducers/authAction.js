import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerAccount = createAsyncThunk(
  "data/registerAccount",
  async (item, thunkApi) => {
    // console.log(item);
   
    const response = await axios.post(
      `${process.env.REACT_APP_API}/auth/signup`,
      {
        username: item.username,
        email: item.email,
        password: item.password,
      }
    );
    const token2 = response.data.token;

    localStorage.setItem("token", token2);
  
    return response.data;
    
  }
);

export const loginAccount = createAsyncThunk(
  "data/loginAccount",
  async (item, thunkApi) => {
    // console.log(item);
   
    const response = await axios.post(
      `${process.env.REACT_APP_API}/auth/login`,
      {
        email: item.email,
        password: item.password,
      }
    );
    const token2 = response.data.token;
    const user = response.data.user
    localStorage.setItem("token", token2);
    localStorage.setItem("userId", user._id);
    return user;
    
  }
);
