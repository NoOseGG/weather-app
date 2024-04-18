import React from "react";
import styled from "styled-components";
import { DetailedInfoItem } from "./DetailedInfoItem/DetailedInfoItem";

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
  return (
    <Wrapper>
      <Title> Details of the weather today</Title>
      <Group>
        <DetailedInfoItem
          icon={"/src/assets/icons/thermometer-simple-light.svg"}
          name="Thermal sensation"
          value="26ºc"
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/cloud-rain-light.svg"}
          name="Probability of rain"
          value="5%"
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/wind-light-svg.svg"}
          name="Wind speed"
          value="8 km/h"
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/drop-light.svg"}
          name="Air humidity"
          value="40%"
        />
        <DetailedInfoItem
          icon={"/src/assets/icons/sun-dim-light.svg"}
          name="UV index"
          value="5"
        />
      </Group>
    </Wrapper>
  );
};

export { DetailedInfo };
