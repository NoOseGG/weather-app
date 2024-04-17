import React from "react";

import styled from "styled-components";

import icon from '/src/assets/icons-weather/cloudy-day.svg';

const Wrapper = styled.div`
position: relative;
  flex-grow: 1;
  background-image: url("/src/assets/images-weather/few-clouds-day.png");
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
`

const TodayInfo: React.FC = () => {
  return (
    <Wrapper>
      <TopInfo>
        <CityInfo>
          <City>Porto Alegre, RS</City>
          <Date>Segunda-feira, 15 de maio de 2023</Date>
        </CityInfo>
        <Time>21:40</Time>
      </TopInfo>
      <Icon src={icon} alt="icon-weather"/>
    </Wrapper>
  );
};

export { TodayInfo };
