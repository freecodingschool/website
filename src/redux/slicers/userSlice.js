import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token:null,
  error:null,
  first_name:null,
  last_name:null
};

export const userSlice = createSlice({
  name: 'user',
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
    logOut: () => {
      localStorage.removeItem("_ut")
      return initialState
    },
    userSuccess: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
});


export const { hasError, authSuccess, logOut, userSuccess } = userSlice.actions;
export default userSlice.reducer;