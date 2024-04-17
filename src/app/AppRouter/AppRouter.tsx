import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "../../pages/SearchPage";
import { WeatherPage } from "../../pages/WeatherPage";

const PATHS = {
  HOME: "/",
  WEATHER: "weather/",
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<SearchPage />} />
        <Route path={PATHS.WEATHER} element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
