import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import styled from "styled-components";

import { Search } from "../components/Search/Search";
import { Container } from "../components/Container/Container";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import { doGetWeatherByCity } from "../store/slices/weather.slice";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperSearch = styled.div`
  width: 504px;
`;

const Title = styled.div`
  margin-top: 160px;
  font: var(--heading-lg);
`;

const Text = styled.div`
  margin-top: 8px;
  margin-bottom: 54px;
  color: var(--color-gray-200);
  font: var(--text--lg);
`;

const BlueText = styled.span`
  color: var(--color-blue-light);
`;

const SearchPage: React.FC = () => {
  const { weather } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetWeatherByCity("Minsk"));
  }, []);
  useEffect(() => {
    console.log(JSON.stringify(weather));
  }, [weather]);

  return (
    <Container>
      <Header />
      <Main>
        <Wrapper>
          <Title>
            Welcome to The <BlueText>TypeWeather</BlueText>
          </Title>
          <Text>Choose a location to view the weather forecast</Text>
          <WrapperSearch>
            <Search />
          </WrapperSearch>
        </Wrapper>
      </Main>
    </Container>
  );
};

export { SearchPage };
