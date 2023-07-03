import { createSlice } from "@reduxjs/toolkit";
import { registerAccount,loginAccount } from "../reducers";

const extraReducer1 = (builder) => {
  builder
    .addCase(registerAccount.pending, (state) => {
      state.loading = true;
    })
    .addCase(registerAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.username = "";
      state.email = "";
      state.password = "";
      state.isAuthenticated = true;
    })
    .addCase(registerAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

const extraReducer2 = (builder) => {
  builder
    .addCase(loginAccount.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginAccount.fulfilled, (state, action) => {
      state.loading = false;
      state.email = "";
      state.password = "";
      state.isAuthenticated = true;
    })
    .addCase(loginAccount.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};
const authSlice = createSlice({
  name: "authentication",
  initialState: {
    username: "",
    email: "",
    password: "",
    isAuthenticated: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },

  reducers: {
    setName: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
      state.errorMessage = action.payload.message;
    },
    resetState: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    extraReducer1(builder);
    extraReducer2(builder);
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setLoading,
  setSuccess,
  setError,
  resetState,
  setAuthentication
} = authSlice.actions;

export default authSlice.reducer;
