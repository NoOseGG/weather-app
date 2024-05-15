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

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <LogoTitle>TypeWeather</LogoTitle>
    </Wrapper>
  );
};

export default Header;
