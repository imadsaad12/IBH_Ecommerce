import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 250px;
  background-color: lightgray;
  margin-bottom: 5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding-left: 0.8rem;
`;

export const Image = styled.img`
  aspect-ratio: 4/2;
  border-radius: 10px;
  mix-blend-mode: color-burn;
`;
