import React from "react";

import styled from "styled-components";

import { ForecastItem } from "./ForecastItem/ForecastItem";
import { useAppSelector } from "../../hooks/hooks";
import { getUrlFromIcon } from "../../utils/utils";

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
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 430px) {
    
  }
`;

const Forecast: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  return (
    <Wrapper>
      <Title>5-day forecast</Title>
      <Group>
        <ForecastItem
          name="Tommorow"
          icon={getUrlFromIcon(
            weather?.forecast?.forecastday[1]?.day?.condition?.code
          )}
          weather={weather?.forecast?.forecastday[1]?.day?.condition?.text}
          temperatureDay={weather?.forecast?.forecastday[1]?.day?.mintemp_c}
          temperatureNight={weather?.forecast?.forecastday[1]?.day?.maxtemp_c}
        />
        <ForecastItem
          name=" Wednesday"
          icon={getUrlFromIcon(
            weather?.forecast?.forecastday[2]?.day?.condition?.code
          )}
          weather={weather?.forecast?.forecastday[2]?.day?.condition?.text}
          temperatureDay={weather?.forecast?.forecastday[2]?.day?.mintemp_c}
          temperatureNight={weather?.forecast?.forecastday[2]?.day?.maxtemp_c}
        />
        <ForecastItem
          name=" Tuesday"
          icon={getUrlFromIcon(
            weather?.forecast?.forecastday[3]?.day?.condition?.code
          )}
          weather={weather?.forecast?.forecastday[3]?.day?.condition?.text}
          temperatureDay={weather?.forecast?.forecastday[3]?.day?.mintemp_c}
          temperatureNight={weather?.forecast?.forecastday[3]?.day?.maxtemp_c}
        />
        <ForecastItem
          name="Friday"
          icon={getUrlFromIcon(
            weather?.forecast?.forecastday[4]?.day?.condition?.code
          )}
          weather={weather?.forecast?.forecastday[4]?.day?.condition?.text}
          temperatureDay={weather?.forecast?.forecastday[4]?.day?.mintemp_c}
          temperatureNight={weather?.forecast?.forecastday[4]?.day?.maxtemp_c}
        />
        <ForecastItem
          name="Sunday"
          icon={getUrlFromIcon(
            weather?.forecast?.forecastday[5]?.day?.condition?.code
          )}
          weather={weather?.forecast?.forecastday[5]?.day?.condition?.text}
          temperatureDay={weather?.forecast?.forecastday[5]?.day?.mintemp_c}
          temperatureNight={weather?.forecast?.forecastday[5]?.day?.maxtemp_c}
        />
      </Group>
    </Wrapper>
  );
};

export { Forecast };
