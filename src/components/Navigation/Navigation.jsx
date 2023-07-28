import React from 'react';
import { useAuth } from '../../hooks';
import { NavUl, NavLi, StyledLink } from './Navigation.styled';
import LogoIcon from '../LogoIcon';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

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
