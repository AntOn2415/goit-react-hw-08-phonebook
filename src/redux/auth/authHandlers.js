import { toast } from 'react-toastify';

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
  toast.success(`
  Welcome, ${action.payload.user.name}`,{position: "top-center",});
};

export const handleRegisterRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
  toast.error('Registration failed. Please check your information and try again.',{position: "top-center",});
}

export const handleLoginFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = null;
  toast.success(`Hi, ${action.payload.user.name}`,{position: "top-center",});
};

export const handleLoginRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
  toast.error('Invalid email or password. Please try again.',{position: "top-center",});
}

export const handleLogoutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  toast.success('Logout successful',{position: "top-center",});
};

export const handleRefreshUserPending = (state) => {
  state.isRefreshing = true;
};

export const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};

export const handleRefreshUserRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.error.message;
};