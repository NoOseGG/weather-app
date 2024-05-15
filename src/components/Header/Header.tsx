import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { MEDIA_SIZE } from "../../constants/constants";

const Wrapper = styled.header`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 60px;

  @media (max-width: 430px) {
    width: 40px;
  }
`;

const LogoTitle = styled.div`
  font: var(--heading-xl);

  @media (max-width: 430px) {
    font: var(--heading-lg);
  }
`;

const Header = () => {
  MEDIA_SIZE;
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <LogoTitle>TypeWeather</LogoTitle>
    </Wrapper>
  );
};

export default Header;
