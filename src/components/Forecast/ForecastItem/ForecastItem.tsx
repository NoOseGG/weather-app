import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const Name = styled.div`
  font: var(--heading-xs);
`;

const Icon = styled.img`
  width: 68px;
  height: 68px;
`;

const Info = styled.div`
  font: var(--text-sm);
`;

const Temperature = styled.div`
  display: flex;
  gap: 8px;
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
