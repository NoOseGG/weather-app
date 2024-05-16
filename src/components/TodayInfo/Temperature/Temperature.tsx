import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/hooks";

const Wrapper = styled.div`
  width: 270px;
  height: 144px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 32px;
  bottom: 32px;

  @media (max-width: 430px) {
    left: 5px;
    bottom: 5px;
    width: 105px;
    height: auto;
    align-items: center;
  }
`;

const Title = styled.span`
  font: var(--heading-hg);

  @media (max-width: 430px) {
    font: var(--heading-xl);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

const Temperatures = styled.span`
  font: var(--heading-md);

  @media (max-width: 430px) {
    font: var(--heading-sm);
  }
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: var(--color-gray-400);

  @media (max-width: 430px) {
    display: none;
  }
`;

const TextWeather = styled.span`
  font: var(--text-lg);

  @media (max-width: 430px) {
    font: var(--text-sm);
  }
`;

const Temperature: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  return (
    <Wrapper>
      <Title>{weather.current.temp_c.toFixed()}ºc</Title>
      <Info>
        <Temperatures>
          {weather.forecast?.forecastday[0]?.day?.maxtemp_c.toFixed()}ºc /{" "}
          {weather.forecast?.forecastday[0]?.day?.mintemp_c.toFixed()}ºc
        </Temperatures>
        <Dot />
        <TextWeather>{weather.current.condition.text}</TextWeather>
      </Info>
    </Wrapper>
  );
};

export { Temperature };
