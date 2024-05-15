import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  padding: 16px;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    border-top: 1px solid var(--color-gray-600);
  }
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 430px) {
    width: 24px;
    height: 24px;
  }
`;

const Name = styled.span`
  margin-left: 12px;
  font: var(--heading-xs);
  color: var(--color-gray-200);
`;

const Value = styled.span`
  flex-grow: 1;
  text-align: end;
  font: var(--heading-md);

  @media (max-width: 430px) {
    font: var(--heading-sm);
  }
`;

type Props = {
  icon: string;
  name: string;
  value: string;
};

const DetailedInfoItem: React.FC<Props> = ({ icon, name, value }) => {
  return (
    <Wrapper>
      <Icon src={icon} alt={name} />
      <Name>{name}</Name>
      <Value>{value}</Value>
    </Wrapper>
  );
};

export { DetailedInfoItem };
