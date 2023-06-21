import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: transparent;
  width: 300px;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  padding-left: 15px;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;
export const Label = styled.label`
  font-family: ${(props) => props.theme.fontFamily.regular};
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  color: ${(props) => props.theme.colors.primaryGray};
`;

export const ErrorMessage = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small}px;
  color: ${(props) => props.theme.colors.primaryError};
  margin-left: 15px;
`;
