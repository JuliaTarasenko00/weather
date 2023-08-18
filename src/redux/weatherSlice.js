import { createSlice } from '@reduxjs/toolkit';
import { weatherFetch } from './options';

const initialState = {
  weather: {},
  isLoading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(weatherFetch.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(weatherFetch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.weather = payload;
      })
      .addCase(weatherFetch.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
