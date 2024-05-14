import React, { useEffect } from "react";

import styled from "styled-components";

import icon from "../../assets/icons-weather/few-clouds-night.svg";
import { Temperature } from "./Temperature/Temperature";
import { useAppSelector } from "../../hooks/hooks";

const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;
  background-image: url("/src/assets/images-weather/few-clouds-night.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: var(--radii);
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 32px 0;
`;

const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const City = styled.div`
  font: var(--heading-md);
`;

const Date = styled.div`
  font: var(--text-md);
`;

const Time = styled.div`
  font: var(--heading-md);
`;

const Icon = styled.img`
  width: 248px;
  height: 248px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TodayInfo: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  useEffect(() => {
    console.log(JSON.stringify(weather));
  }, [weather]);

  return (
    <Wrapper>
      <TopInfo>
        <CityInfo>
          <City>
            {weather.location.name}, {weather.location.country}
          </City>
          <Date>Segunda-feira, {weather.location.localtime.split(" ")[0]}</Date>
        </CityInfo>
        <Time>{weather.location.localtime.split(" ")[1]}</Time>
      </TopInfo>
      <Temperature />
      <Icon src={icon} alt="icon-weather" />
    </Wrapper>
  );
};

export { TodayInfo };
