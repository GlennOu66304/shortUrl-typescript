import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserShortUrl = createAsyncThunk(
  "data/fetchUserShortUrl",
  async (userId) => {
  
    const response = await axios.get(`${process.env.REACT_APP_API}/user/${userId}/shorturls`);
    return response.data;
  }
);

// export const removeShortUrl = createAsyncThunk(
//   "data/removeShortUrl",
//   async (id, thunkApi) => {
//     console.log(id);
//     const response = await axios.delete(
//       `${process.env.REACT_APP_API}/api/edit/${id}`
//     );
//     return response.data;
//   }
// );

// export const loadShortUrl = createAsyncThunk(
//   "data/loadShortUrl",
//   async (id, thunkApi) => {
//     // console.log(id);
//     const response = await axios.get(
//       `${process.env.REACT_APP_API}/api/edit/${id}`
//     );
//     return response.data;
//   }
// );

// // q:redux-toolkit-createasyncthunk-with-request-body-parameters
// // a:

// export const updateShortUrl = createAsyncThunk(
//   "data/updateShortUrl",
//   async (item, thunkApi) => {
//     console.log(item);
//     const response = await axios.put(
//       `${process.env.REACT_APP_API}/api/edit/${item.selectedItemId}`,
//       {
//         longUrl: item.longUrl,
//       }
//     );
//     return response.data;
//   }
// );
