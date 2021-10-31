import {configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import reducer from './slicers';
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(),reduxThunk],
  devTools:process.env.NODE_ENV !== 'production'
});
export default store;