import React from 'react';
import ReactLoading from 'react-loading';
import theme from '../../styles/theme';
import { Container } from './styles';

export default function SpinnerLoading({ top = '45%', right = '30%' }) {
  return (
    <Container top={top} right={right}>
      <ReactLoading
        type="spin"
        color={theme.colors.primaryBlue}
        height={50}
        width={50}
      />
    </Container>
  );
}
