import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

export const Image = styled.img`
  width: 50%;
  height: 600px;
  border-radius: 10px;
`;

export const InformationContainer = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  padding-left: 2rem;
`;
