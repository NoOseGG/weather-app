import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 430px) {
    padding: 2px;
  }
`;

const Name = styled.div`
  font: var(--heading-xs);

  @media (max-width: 430px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 68px;
  height: 68px;

  @media (max-width: 430px) {
    width: 56px;
    height: 56px;
  }
`;

const Info = styled.div`
  font: var(--text-sm);
  text-align: center;

  @media (max-width: 430px) {
    display: none;
  }
`;

const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 0;
    align-items: center;
  }
`;

const Day = styled.span`
  font: var(--heading-xs);
`;

const Night = styled.span`
  font: var(--heading-xs);
  color: var(--color-gray-400);
`;

type Props = {
  name: string;
  icon: string;
  weather: string;
  temperatureDay: number;
  temperatureNight: number;
};

const ForecastItem: React.FC<Props> = ({
  name,
  icon,
  weather,
  temperatureDay,
  temperatureNight,
}) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Icon src={icon} alt={name} />
      <Info>{weather}</Info>
      <Temperature>
        <Day>{temperatureDay}ºc</Day>
        <Night>{temperatureNight}ºc</Night>
      </Temperature>
    </Wrapper>
  );
};

export { ForecastItem };
