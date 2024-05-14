import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { weatherApi } from "../../api/weather.api";
import { Weather } from "../../interfaces/interfaces";
import { URL } from "../../constants/constants";

interface InitialState {
  weather: Weather;
}

interface RequestData {
  lat: string;
  lng: string;
}

const initialState: InitialState = {
  weather: {
    location: {
      lat: 0,
      lon: 0,
      name: "",
      region: "",
      country: "",
      tz_id: "",
      localtime_epoch: 0,
      localtime: "",
    },
    current: {
      last_updated_epoch: 0,
      last_updated: "",
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: "",
        icon: "",
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: "",
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
    forecast: {
      forecastday: []
    }
  },
};

export const doGetWeatherByCity = createAsyncThunk<Weather, RequestData>(
  "doGetWeatherByCity",
  async ({ lat, lng }, {}) => {
    const response = await weatherApi.get(URL.BASE, {
      params: {
        q: `${lat},${lng}`,
        days: 5,
        hour: 15,
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
