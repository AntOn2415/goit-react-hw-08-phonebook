import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import {NaviNav} from './Navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NaviNav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </NaviNav>
  );
};
