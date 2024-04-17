import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

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
`;

const LogoTitle = styled.div`
  font: var(--heading-xl);
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <LogoTitle>TypeWeather</LogoTitle>
    </Wrapper>
  );
};

export default Header;
