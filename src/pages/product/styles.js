import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Image = styled.img`
  width: 50%;
  max-height: 600px;
  border-radius: 10px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45%;
  min-width: 35%;
  margin-left: 2rem;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
`;

export const Category = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
`;

export const Size = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  max-width: 35%;
  padding: 0.5rem 1rem;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
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
`;


export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NotFoundMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondaryBlue};
`;