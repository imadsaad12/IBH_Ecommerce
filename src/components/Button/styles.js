import styled from "styled-components";

export const CustomizedButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.colors.primaryBlue};
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.primaryWhite};
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSizes.regular}px;
`;
