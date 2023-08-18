import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const API_KEY = '7ceb218397aaf05090074b0bf49da846';

export const weatherFetch = createAsyncThunk(
  'weather/fetch',
  async (city, thunkApi) => {
    try {
      const { data } = await $instants.get(
        `weather?q=${city}&appid=${API_KEY}&lang=en&units=metric`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
