import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;
