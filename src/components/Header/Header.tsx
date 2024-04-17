import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <div>Logo</div>
      <div>Menu</div>
    </Wrapper>
  );
};

export default Header;
