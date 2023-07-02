import React from 'react';
import { Container, LeftContainer, MenuItem } from './styles';
import { useNavigate } from 'react-router-dom';
import { ABOUT_US, CONTACT, HOME, SIGN_OUT } from '../../../global/strings';
import { removeToken } from '../../../utils/authentication';

export default function Bar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    removeToken();
    navigate('/');
  };
  return (
    <Container>
      <LeftContainer>
        <MenuItem onClick={() => navigate('/')}>{HOME}</MenuItem>
        <MenuItem onClick={() => navigate('/about-us')}>{ABOUT_US}</MenuItem>
        <MenuItem onClick={() => navigate('/contact')}>{CONTACT}</MenuItem>
      </LeftContainer>
      <MenuItem onClick={handleSignOut}>{SIGN_OUT}</MenuItem>
    </Container>
  );
}
