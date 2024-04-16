import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <div>Menu</div>
    </HeaderContainer>
  );
};

export default Header;
