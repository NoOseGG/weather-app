import React from "react";
import styled from "styled-components";
import { ForecastItem } from "./ForecastItem/ForecastItem";

const Wrapper = styled.div`
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-800);
  border-radius: var(--radii);
`;

const Title = styled.div`
  width: 100%;
  color: var(--color-gray-400);
  font: var(--text-md);
  text-align: start;
`;

const Group = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Forecast: React.FC = () => {
  return (
    <Wrapper>
      <Title>5-day forecast</Title>
      <Group>
        <ForecastItem
          name="Tommorow"
          icon="/src/assets/icons-weather/rain-day.svg"
          weather="Temporary"
          temperatureDay="30ºc"
          temperatureNight="26ºc"
        />
        <ForecastItem
          name=" Wednesday"
          icon="/src/assets/icons-weather/storm-day.svg"
          weather="Rain"
          temperatureDay="30ºc"
          temperatureNight="26ºc"
        />
        <ForecastItem
          name=" Tuesday"
          icon="/src/assets/icons-weather/clear-day.svg"
          weather="Few clouds"
          temperatureDay="28ºc"
          temperatureNight="24ºc"
        />
        <ForecastItem
          name="Friday"
          icon="/src/assets/icons-weather/clear-day.svg"
          weather="Clear day"
          temperatureDay="30ºc"
          temperatureNight="24ºc"
        />
        <ForecastItem
          name="Sunday"
          icon="/src/assets/icons-weather/clear-day.svg"
          weather="Clearday"
          temperatureDay="30ºc"
          temperatureNight="24ºc"
        />
      </Group>
    </Wrapper>
  );
};

export { Forecast };
