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
`;

const Title = styled.span`
  font: var(--heading-hg);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Temperatures = styled.span`
  font: var(--heading-md);
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: var(--color-gray-400);
`;

const TextWeather = styled.span`
  font: var(--text-lg);
`;

const Temperature: React.FC = () => {
  const weather = useAppSelector((state) => state.weather.weather);

  return (
    <Wrapper>
      <Title>ºc</Title>
      <Info>
        <Temperatures>32ºc / 26ºc</Temperatures>
        <Dot />
        <TextWeather>Few clouds</TextWeather>
      </Info>
    </Wrapper>
  );
};

export { Temperature };
