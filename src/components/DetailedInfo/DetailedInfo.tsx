import React from "react";
import styled from "styled-components";
import { DetailedInfoItem } from "./DetailedInfoItem/DetailedInfoItem";
import { useAppSelector } from "../../hooks/hooks";

import thermometerSimpleLight from "../../assets/icons/thermometer-simple-light.svg";
import cloudRainLight from "../../assets/icons/cloud-rain-light.svg";
import windLight from "../../assets/icons/wind-light.svg";
import dropLight from "../../assets/icons/drop-light.svg";
import sunDimLight from "../../assets/icons/sun-dim-light.svg";

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-800);
  border-radius: var(--radii);
`;

const Title = styled.h2`
  width: 100%;
  color: var(--color-gray-400);
  font: var(--text-md);
  text-align: start;
`;

const Group = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const DetailedInfo: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  return (
    <Wrapper>
      <Title> Details of the weather today</Title>
      <Group>
        <DetailedInfoItem
          icon={thermometerSimpleLight}
          name="Thermal sensation"
          value={`
              ${
                weather.current.feelslike_c
                  ? weather.current.feelslike_c.toFixed().toString()
                  : "-"
              } ºc
            `}
        />
        <DetailedInfoItem
          icon={cloudRainLight}
          name="Probability of rain"
          value={`
          ${weather.current?.cloud ? weather.current.cloud.toString() : "-"} %`}
        />
        <DetailedInfoItem
          icon={windLight}
          name="Wind speed"
          value={`
            ${
              weather.current?.wind_kph
                ? weather.current.wind_kph.toString()
                : "-"
            } km/h`}
        />
        <DetailedInfoItem
          icon={dropLight}
          name="Air humidity"
          value={`
          ${
            weather.current?.humidity
              ? weather.current.humidity.toString()
              : "-"
          } %`}
        />
        <DetailedInfoItem
          icon={sunDimLight}
          name="UV index"
          value={weather.current.uv ? weather.current.uv.toString() : "-"}
        />
      </Group>
    </Wrapper>
  );
};

export { DetailedInfo };
