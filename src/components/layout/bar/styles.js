import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  justify-content: space-between;
  align-items: center;
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
`;

export const LeftContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
