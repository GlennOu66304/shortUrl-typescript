import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAsyncData,
  removeShortUrl,
  loadShortUrl,
  updateShortUrl,
} from "../reducers";
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
const extraReducer3 = (builder) => {
  builder
    .addCase(loadShortUrl.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadShortUrl.fulfilled, (state, action) => {
      state.loading = false;
      // const updatedData = fetchAsyncData();
      state.longUrl = action.payload.longUrl;
    })
    .addCase(loadShortUrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

const extraReducer4 = (builder) => {
  builder
    .addCase(updateShortUrl.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateShortUrl.fulfilled, (state, action) => {
      state.loading = false;
      // const updatedData = fetchAsyncData();
      state.longUrl = action.payload.longUrl;
    })
    .addCase(updateShortUrl.rejected, (state, action) => {
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
    longUrl: null,
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
    extraReducer3(builder);
    extraReducer4(builder);
  },
});

export const { openModal, closeModal } = shortUrlSlice.actions;
export const dispatchBothActions = (id) => (dispatch) => {
  dispatch(openModal(id));
  dispatch(loadShortUrl(id));
};

export const dispatchBothActions2 = (id) => (dispatch) => {
  dispatch(closeModal());
  dispatch(updateShortUrl(id));
};
export default shortUrlSlice.reducer;
