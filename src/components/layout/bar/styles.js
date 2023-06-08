import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-evenly;
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
    background-color: white;
    color: black;
  }
`;
