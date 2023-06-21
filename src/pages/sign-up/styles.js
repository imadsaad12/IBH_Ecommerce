import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 35%;
  margin: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  height: 99vh;
`;

export const Header = styled.h3`
  margin-top: 4rem;
  margin-left: 2rem;
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const Title = styled.p`
  margin-top: 10rem;
  margin-left: 2rem;
  width: 70%;
  font-size: ${(props) => props.theme.fontSizes.h1}px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.colors.primaryWhite};
`;

export const Description = styled.p`
  margin-top: 2rem;
  margin-left: 2rem;
  width: 80%;
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  color: ${(props) => props.theme.colors.secondaryBlue};
`;

export const RightContainer = styled.div`
  width: 65%;
  justify-self: center;
  margin-top: 4rem;
`;
