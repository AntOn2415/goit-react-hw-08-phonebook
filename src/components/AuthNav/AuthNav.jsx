import { NavUl, NavLi, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
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
