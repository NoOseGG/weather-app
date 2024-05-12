import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.svg";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  padding: 8px;
  background-color: var(--color-gray-600);
  border-radius: var(--radii);
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Actions: React.FC = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <IconWrapper onClick={handleHome}>
        <Icon src={logo} alt="icon" />
      </IconWrapper>
      <Search />
    </Wrapper>
  );
};

export { Actions };
