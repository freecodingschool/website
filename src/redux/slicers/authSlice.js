import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token:null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },
    authSuccess: (state, action) => {
      console.log(action)
      localStorage.setItem("_ut",action.payload)
      state.token = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("_ut")
      state.token = null;
    }
  }
});

export const actions = authSlice.actions;