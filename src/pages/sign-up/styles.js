import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.breakpoints.md}){
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 35%;
  margin: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  height: 99vh;
  @media (max-width: ${(props) => props.theme.breakpoints.md}){
    width: 99%;
    height: 50vh;
    display: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) and (min-height: ${(props) => props.theme.breakpoints.lg}){
    width: 99%;
    height: 36vh;
    display: none;
  }
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
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) and (max-width: ${(props) => props.theme.breakpoints.blg}) {
    font-size: ${(props) => props.theme.fontSizes.big}px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.theme.fontSizes.regular}px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}){
    font-size: ${(props) => props.theme.fontSizes.regular}px;
    margin-top: 3rem;
  }
`;

export const Description = styled.p`
  margin-top: 2rem;
  margin-left: 2rem;
  width: 80%;
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  color: ${(props) => props.theme.colors.secondaryBlue};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 15px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.theme.fontSizes.small}px;
  }
 
`;

export const RightContainer = styled.div`
  width: 65%;
  justify-self: center;
  margin-top: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: 1rem;
  }
`;
