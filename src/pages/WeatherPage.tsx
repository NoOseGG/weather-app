import React, { useEffect } from "react";
import { Container } from "../components/Container/Container";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { doGetWeatherByCity } from "../store/slices/weather.slice";
import Header from "../components/Header/Header";

const WeatherPage: React.FC = () => {
  const { weather } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetWeatherByCity("Minsk"));
  }, []);
  useEffect(() => {
    console.log(JSON.stringify(weather));
  }, [weather]);

  return (
    <Container>
      <Header />
    </Container>
  );
};

export { WeatherPage };
