import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import {
  handlePending,
  handleRegisterRejected,
  handleLoginRejected,
  handleRegisterFulfilled,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRefreshUserPending,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
} from './authHandlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, handleRegisterFulfilled)
      .addCase(authOperations.register.pending, handlePending)
      .addCase(authOperations.register.rejected, handleRegisterRejected)
      .addCase(authOperations.logIn.fulfilled, handleLoginFulfilled)
      .addCase(authOperations.logIn.pending, handlePending)
      .addCase(authOperations.logIn.rejected, handleLoginRejected)
      .addCase(authOperations.logOut.fulfilled, handleLogoutFulfilled)
      .addCase(authOperations.refreshUser.pending, handleRefreshUserPending)
      .addCase(authOperations.refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(authOperations.refreshUser.rejected,handleRefreshUserRejected)
  },
});

export const authReducer = authSlice.reducer;
