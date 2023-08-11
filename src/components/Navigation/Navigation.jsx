import React from 'react';
import { useAuth } from '../../hooks';
import { useThemeContext } from '../../hooks/ThemeContext';
import { NavUl, NavLi, StyledLink } from './Navigation.styled';
import LogoIcon from '../LogoIcon';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  useThemeContext();
  
  return (
    <nav>
      <NavUl>
        <NavLi>
          <StyledLink to="/">
            <LogoIcon size='18' fontSizeTel={20} fontSizeBook={28} telX='2' telY='10' bookX='2' bookY='0' widthObject="160%" heightObject="160%"/>
            Home
          </StyledLink>
        </NavLi>
        <NavLi>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </NavLi>
      </NavUl>
    </nav>
  );
};
