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
    // setName: (state, action) => {
    //   state.username = action.payload;
    // },


  },
  extraReducers: (builder) => {
    extraReducer1(builder);
  },
});

// export const {

// } = authSlice.actions;

export default userSlice.reducer;
