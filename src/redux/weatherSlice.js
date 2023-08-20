import { createSlice } from '@reduxjs/toolkit';
import { weatherFetch, weatherFetchWeek } from './options';

const initialState = {
  weather: [],
  weatherWeek: [],
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
      })
      .addCase(weatherFetchWeek.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(weatherFetchWeek.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.weatherWeek = payload;
      })
      .addCase(weatherFetchWeek.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
