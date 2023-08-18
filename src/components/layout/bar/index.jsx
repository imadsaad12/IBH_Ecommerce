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
    toggleMenu();
    navigate('/');
  };

  // Function to toggle menu open status and handle scrolling
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LeftContainer>
        <HamburgerIcon isMenuOpen={isMenuOpen}>
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </HamburgerIcon>
        <MenuItem
          onClick={() => {
            toggleMenu();
            navigate('/');
          }}
          isMenuOpen={isMenuOpen}
        >
          {HOME}
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleMenu();
            navigate('/about-us');
          }}
          isMenuOpen={isMenuOpen}
        >
          {ABOUT_US}
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleMenu();
            navigate('/contact');
          }}
          isMenuOpen={isMenuOpen}
        >
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
