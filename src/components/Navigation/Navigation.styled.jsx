import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const NavLi = styled.li`
  font-size: 16px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #333;
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
