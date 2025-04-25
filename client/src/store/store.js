import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from "../Slices/cryptoSlice.js"


export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});