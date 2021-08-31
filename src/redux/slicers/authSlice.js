import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token:null,
  user:null,
  error:null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },
    authSuccess: (state, {payload:{token,role}}) => {
      localStorage.setItem("_ut",token)
      localStorage.setItem("role",role)
      state.token = token;
      state.role = role;
    },
    logOut: (state) => {
      localStorage.removeItem("_ut")
      state.token = null;
    },
    userSuccess: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const actions = authSlice.actions;