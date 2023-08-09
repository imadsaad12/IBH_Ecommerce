import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    background-color: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? theme.colors.primaryBlue : theme.colors.primaryWhite};
    height: ${({ isMenuOpen }) => isMenuOpen ? '100vh' : 'auto'};
  }

`;

export const MenuItem = styled.button`
  color: white;
  font-weight: bold;
  font-style: italic;
  width: 7rem;
  font-size: 1rem;
  height: 4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.secondaryBlue};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.blg}) and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 14px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: ${({ isMenuOpen }) => isMenuOpen ? 'block' : 'none'};
    align-self: center;
    font-size: 23px;
    height: 8rem;
  }
`;

export const LeftContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  color: ${(props) => props.theme.colors.primaryBlue};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
    color: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? theme.colors.primaryWhite : theme.colors.primaryBlue};
  }
`;
