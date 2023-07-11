import React from 'react';
import ReactLoading from 'react-loading';
import theme from '../../styles/theme';
import { Container } from './styles';
import {FULL_PAGE, HALF_PAGE} from '../../global/strings';

export default function SpinnerLoading({ position = HALF_PAGE }) {
  const getPosition = () => {
    if (position === HALF_PAGE) {
      return { top: '45%', right: '30%' };
    } else if (position === FULL_PAGE) {
      return { top: '50%', right: '50%' };
    }
  };

  const { top, right } = getPosition();

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
