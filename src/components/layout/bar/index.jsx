import React, { useState } from 'react';
import { Container, LeftContainer, MenuItem, HamburgerIcon } from './styles';
import { useNavigate } from 'react-router-dom';
import { ABOUT_US, CONTACT, HOME, SIGN_OUT } from '../../../global/strings';
import { removeToken } from '../../../utils/authentication';
import Hamburger from 'hamburger-react';

export default function Bar() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    removeToken();
    navigate('/');
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LeftContainer>
        <HamburgerIcon isMenuOpen={isMenuOpen}>
          <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
        </HamburgerIcon>
        <MenuItem onClick={() => navigate('/')} isMenuOpen={isMenuOpen}>
          {HOME}
        </MenuItem>
        <MenuItem onClick={() => navigate('/about-us')} isMenuOpen={isMenuOpen}>
          {ABOUT_US}
        </MenuItem>
        <MenuItem onClick={() => navigate('/contact')} isMenuOpen={isMenuOpen}>
          {CONTACT}
        </MenuItem>
        {isMenuOpen && (
          <MenuItem onClick={handleSignOut} isMenuOpen={isMenuOpen}>
            {SIGN_OUT}
          </MenuItem>
        )}
      </LeftContainer>
      {!isMenuOpen && (
        <MenuItem onClick={handleSignOut} isMenuOpen={isMenuOpen}>
          {SIGN_OUT}
        </MenuItem>
      )}
    </Container>
  );
}
