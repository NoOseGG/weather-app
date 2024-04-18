import React from "react";
import styled from "styled-components";
import { Actions } from "../components/Actions/Actions";
import { TodayInfo } from "../components/TodayInfo/TodayInfo";
import { DetailedInfo } from "../components/DetailedInfo/DetailedInfo";
import { Forecast } from "../components/Forecast/Forecast";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  gap: 24px;
`;

const LeftSide = styled.div`
  padding: 16px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--color-gray-800);
  border-radius: var(--radii);
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WeatherPage: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Actions />
        <TodayInfo />
      </LeftSide>
      <RightSide>
        <DetailedInfo />
        <Forecast />
      </RightSide>
    </Wrapper>
  );
};

export { WeatherPage };
