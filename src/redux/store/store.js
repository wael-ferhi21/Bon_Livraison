import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authslice';
import colisReducer from '../slices/colisSlice';
import blReducer from '../slices/blSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    colis:colisReducer,
    bl: blReducer,
  
  
  },
});

export default store;
