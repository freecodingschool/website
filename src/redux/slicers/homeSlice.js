import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses:[]
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
        setCourses: (state, action) => {            
          state.courses = action.payload;
        }
    }
});

export const { setCourses } = homeSlice.actions;
export default homeSlice.reducer;
