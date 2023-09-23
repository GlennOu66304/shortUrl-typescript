import { createSlice } from "@reduxjs/toolkit";
import { fetchUserShortUrl } from "../reducers";

const extraReducer1 = (builder) => {
  builder
    .addCase(fetchUserShortUrl.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUserShortUrl.fulfilled, (state, action) => {
      state.loading = false;
      state.userUrlList = action.payload
    })
    .addCase(fetchUserShortUrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};



const userSlice = createSlice({
  name: "user",
  initialState: {
    userUrlList:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },

  reducers: {
  setUserUrlList:(state,action)=>{
    state.userUrlList=action.payload
  }

  },
  extraReducers: (builder) => {
    extraReducer1(builder);

  },
});

export const {
  setUserUrlList

} = userSlice.actions;

export default userSlice.reducer;
