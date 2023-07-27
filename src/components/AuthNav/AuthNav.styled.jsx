import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const NavLi = styled.li`
  font-size: 16px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 20px 0;
  transition: color 300ms ease;

  :hover,
  :focus,
  :active {
    color: #27ae60;
  }

  &.active {
    color: #27ae60;
  }
`;
