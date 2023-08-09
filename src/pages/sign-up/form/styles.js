import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-left: -10%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}){
    margin-left: 10%;
  }
`;

export const Header = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.regular};
  margin-left: 26%;
`;

export const Description = styled.h5`
  margin-left: 26%;
  font-family: ${(props) => props.theme.fontFamily.regular};
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-left: 17%;
  @media (max-width: ${(props) => props.theme.breakpoints.md}){
    margin-left: 30%;
  }
`;

export const SignInStyle = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primaryBlue};
  }
`;
