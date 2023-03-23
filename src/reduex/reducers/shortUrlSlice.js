import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncData } from "./action";
const shortUrlSlice = createSlice({
  name: "shortUrl",
  initialState: {
    shortUrlList: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncData.fulfilled, (state, action) => {
        state.loading = false;
        state.shortUrlList = action.payload;
      })
      .addCase(fetchAsyncData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loadShortUrlList } = shortUrlSlice.actions;
export default shortUrlSlice.reducer;
