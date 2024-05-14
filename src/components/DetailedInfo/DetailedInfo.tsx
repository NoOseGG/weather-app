import React from "react";
import styled from "styled-components";
import { DetailedInfoItem } from "./DetailedInfoItem/DetailedInfoItem";
import { useAppSelector } from "../../hooks/hooks";

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
          icon={"/src/assets/icons/thermometer-simple-light.svg"}
          name="Thermal sensation"
          value={`
              ${
                weather.current.feelslike_c
                  ? weather.current.feelslike_c.toString()
                  : "-"
              } ºc
            `}
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/cloud-rain-light.svg"}
          name="Probability of rain"
          value={`
          ${
            weather.current?.cloud
              ? weather.current.cloud.toString()
              : "-"
          } %`}
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/wind-light-svg.svg"}
          name="Wind speed"
          value={`
            ${
              weather.current?.wind_kph
                ? weather.current.wind_kph.toString()
                : "-"
            } km/h`}
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/drop-light.svg"}
          name="Air humidity"
          value={`
          ${
            weather.current?.humidity
              ? weather.current.humidity.toString()
              : "-"
          } %`}
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/sun-dim-light.svg"}
          name="UV index"
          value={weather.current.uv ? weather.current.uv.toString() : "-"}
        />
      </Group>
    </Wrapper>
  );
};

export { DetailedInfo };
