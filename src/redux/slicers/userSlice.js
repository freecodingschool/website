import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:null,
  error:null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },
    userSuccess: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const actions = userSlice.actions;