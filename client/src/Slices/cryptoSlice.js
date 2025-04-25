import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../assets/sampleData.json';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updateAssets(state, action) {
      state.assets = action.payload;
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;