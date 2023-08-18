import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}){
    flex-direction: column;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 50%;
  max-height: 90%;
  margin-top: 10px;
  border-radius: 10px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NotFoundMessage = styled.p`
  font-size: ${(props) => props.theme.fontSizes.big}px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondaryBlue};
`;
