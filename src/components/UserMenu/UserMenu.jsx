import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import {UserMenuContainerDiv, WelcomeTextP, NameSpan, BtnLogout } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const userNameParts = user.name.split(' ');
  const firstName = userNameParts[0];

  const handleLogOut = () => dispatch(logOut());
  
  return (
    <UserMenuContainerDiv>
      <WelcomeTextP>Welcome, <NameSpan>{firstName}</NameSpan></WelcomeTextP>
      <BtnLogout type="button" onClick={handleLogOut}>
        Logout
      </BtnLogout>
    </UserMenuContainerDiv>
  );
};