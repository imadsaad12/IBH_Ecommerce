import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;
