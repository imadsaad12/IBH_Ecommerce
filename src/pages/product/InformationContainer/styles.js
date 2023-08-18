import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45%;
  min-width: 35%;
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}){
    max-width: none;
    min-width: auto;
    margin: 10%;
  }
`;

export const Name = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h1}px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}){
    font-size: ${(props) => props.theme.fontSizes.big}px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-bottom: 1rem;
`;

export const Category = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-bottom: 1rem;
`;

export const Size = styled.p`
  font-size: 18px;
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  max-width: 35%;
  padding: 0.5rem 1rem;
  font-size: ${(props) => props.theme.fontSizes.regular}px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.regular};
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: #fff;
  align-self: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryBlue};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.blg}){
    max-width: 50%;
  }
`;
