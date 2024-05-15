import { createSlice } from "@reduxjs/toolkit";
import { apiRegister, apiLogin } from "../auth/operations";
import { INITIAL_STATE } from "../contacts/slice";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    // Define additional reducers here if needed
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiRegister.pending, handlePending)
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegister.rejected, handleRejected)
      .addCase(apiLogin.pending, handlePending)
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLogin.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
