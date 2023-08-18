import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) and (max-height: ${(props) => props.theme.breakpoints.lg}){
    top: 50%;
    right: 50%;
  }
`;
