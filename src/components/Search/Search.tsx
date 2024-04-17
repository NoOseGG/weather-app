import styled from "styled-components";

export const Search = styled.input.attrs((props) => ({
  // Устанавливаем значение атрибута placeholder из props
  placeholder: props.placeholder || "Search location",
}))`
  width: 100%;
  height: 56px;
  padding: 18px 20px;
  background-color: var(--color-gray-600);
  border-radius: var(--radii);

  &::placeholder {
    color: var(--color-gray-400);
    content: "Search location";
  }
`;
