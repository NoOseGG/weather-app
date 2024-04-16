import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { weatherApi } from "../../api/weather.api";
import { Weather } from "../../interfaces/interfaces";
import { URL } from "../../constants/constants";

interface InitialState {
  weather: Weather;
}

const initialState: InitialState = {
  weather: {
    location: {
      lat: 0,
      lon: 0,
      name: "string",
      region: "string",
      country: "string",
      tz_id: "string",
      localtime_epoch: 0,
      localtime: "string",
    },
  },
};

export const doGetWeatherByCity = createAsyncThunk<Weather, string>(
  "doGetWeatherByCity",
  async (city, {}) => {
    const response = await weatherApi.get(URL.BASE, {
      params: {
        q: city,
      },
    });
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetWeatherByCity.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
  },
});

export default weatherSlice.reducer;
