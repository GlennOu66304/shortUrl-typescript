import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncData, removeShortUrl } from "../reducers";
const extraReducer1 = (builder) => {
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
};
const extraReducer2 = (builder) => {
  builder
    .addCase(removeShortUrl.pending, (state) => {
      state.loading = true;
    })
    .addCase(removeShortUrl.fulfilled, (state, action) => {
      state.loading = false;
      // const updatedData = fetchAsyncData();
      // state.shortUrlList = updatedData;
    })
    .addCase(removeShortUrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

const shortUrlSlice = createSlice({
  name: "shortUrl",
  initialState: {
    shortUrlList: null,
    loading: false,
    isOpen: false,
    selectedItemId: null,
  },

  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedItemId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },

  extraReducers: (builder) => {
    extraReducer1(builder);
    extraReducer2(builder);
  },
});

export const { openModal, closeModal } = shortUrlSlice.actions;
export default shortUrlSlice.reducer;