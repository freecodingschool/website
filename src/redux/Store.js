import {configureStore,combineReducers,getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import {authSlice} from './slicers';
const reducer = combineReducers({
  auth: authSlice.reducer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(),reduxThunk],
  devTools: process.env.NODE_ENV !== 'production'
});
export default store;