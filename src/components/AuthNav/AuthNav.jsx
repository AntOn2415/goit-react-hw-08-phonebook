import { NavUl, NavLi, StyledLink } from './AuthNav.styled';
import { useThemeContext } from '../../hooks/ThemeContext'; 

export const AuthNav = () => {
  useThemeContext();
  return (
    <div>
      <NavUl>
        <NavLi>
          <StyledLink to="/register">Register</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/login">Log In</StyledLink>
        </NavLi>
      </NavUl>
    </div>
  );
};
