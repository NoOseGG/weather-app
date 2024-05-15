import React, { useEffect } from "react";

import styled from "styled-components";

import { Temperature } from "./Temperature/Temperature";
import { useAppSelector } from "../../hooks/hooks";

import { getBackgroundForTodayInfo, getUrlFromIcon } from "../../utils/utils";

type WrapperProps = {
  backgroundUrl: string;
};

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  flex-grow: 1;
  background-image: ${(props) => `url("${props.backgroundUrl}")`};
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

const DateWrapper = styled.div`
  font: var(--text-md);
`;

const Time = styled.div`
  font: var(--heading-md);
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const TodayInfo: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  useEffect(() => {
    console.log(JSON.stringify(weather));
  }, [weather]);

  return (
    <Wrapper
      backgroundUrl={getBackgroundForTodayInfo(
        weather?.current?.condition?.text
      )}
    >
      <TopInfo>
        <CityInfo>
          <City>
            {weather.location.name}, {weather.location.country}
          </City>
          <DateWrapper>
            Segunda-feira, {weather.location.localtime.split(" ")[0]}
          </DateWrapper>
        </CityInfo>
        <Time>{weather.location.localtime.split(" ")[1]}</Time>
      </TopInfo>
      <Temperature />
      <Icon
        src={getUrlFromIcon(
          weather?.forecast?.forecastday[0]?.day?.condition?.code
        )}
        alt="icon-weather"
      />
    </Wrapper>
  );
};

export { TodayInfo };
