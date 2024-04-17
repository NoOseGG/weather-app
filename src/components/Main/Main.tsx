import React, { PropsWithChildren } from "react";

import { Container } from "../Container/Container";
import styled from "styled-components";

const Wrapper = styled.main``;

const Title = styled.div`
  width: 100;
  font: var(--heading-lg);
`;

const SubTitle = styled.div`
  font: var(--heading-hg);
`;

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        eaque ab, voluptate nihil illum repudiandae est tempora quas porro quia
        vitae tenetur quis ducimus numquam laudantium id corrupti distinctio
        aperiam?
      </Title>
      <SubTitle>Test some</SubTitle>
    </Container>
  );
};

export default Main;
