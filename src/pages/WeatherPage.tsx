import React from "react";
import styled from "styled-components";
import { Actions } from "../components/Actions/Actions";
import { TodayInfo } from "../components/TodayInfo/TodayInfo";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  gap: 24px;
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RightSide = styled.div`
  width: 50%;
`;

const WeatherPage: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Actions />
        <TodayInfo />
      </LeftSide>
      <RightSide></RightSide>
    </Wrapper>
  );
};

export { WeatherPage };
