import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      return thunkApi.rejectWithValue(
        toast.error(` city not found, please check and try again.`)
      );
    }
  }
);
export const weatherFetchWeek = createAsyncThunk(
  'weatherWeek/fetch',
  async (city, thunkApi) => {
    try {
      const { data } = await $instants.get(
        `forecast?q=${city}&cnt=7&appid=${API_KEY}&lang=en&units=metric`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(toast.error(error.message));
    }
  }
);
// 3a2d74ea69b63d2f57712f8084a7c23f
// 7ceb218397aaf05090074b0bf49da846
