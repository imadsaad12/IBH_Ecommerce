import React from 'react';
import {
  Container,
  Description,
  Header,
  LeftContainer,
  RightContainer,
  Title,
} from '../sign-up/styles';
import {
  ECOMMERCE,
  SIGNUP_DESCRIPTION,
  SIGNUP_TITLE,
} from '../../global/strings';
import Form from './form';

export default function SignIn() {
  return (
    <Container>
      <LeftContainer>
        <Header>{ECOMMERCE}</Header>
        <Title>{SIGNUP_TITLE}</Title>
        <Description>{SIGNUP_DESCRIPTION}</Description>
      </LeftContainer>
      <RightContainer>
        <Form />
      </RightContainer>
    </Container>
  );
}
