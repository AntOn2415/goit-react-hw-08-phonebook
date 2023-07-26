import React from 'react';
import { useAuth } from '../../hooks';
import { NavUl, NavLi, StyledLink } from './Navigation.styled';
import LogoIcon from '../LogoIcon'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavUl>
        <NavLi>
          <StyledLink to="/"><LogoIcon />
      Home</StyledLink>
        </NavLi>
        <NavLi>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </NavLi>
      </NavUl>
    </nav>
  );
};
