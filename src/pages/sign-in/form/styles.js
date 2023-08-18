import styled from 'styled-components';
import theme from '../../../styles/theme';

export const backButtonStyle = {
  borderColor: theme.colors.primaryError,
  backgroundColor: theme.colors.primaryError,
};

export const Link = styled.a``;
export const Text = styled.h5`
  font-family: ${(props) => props.theme.fontFamily.regular};
`;