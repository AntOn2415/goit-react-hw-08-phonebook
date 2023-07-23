import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import {UserMenuContainerDiv, WelcomeTextP, NameSpan, BtnLogout } from './UserMenu.styled';
import {BsDoorClosed, BsDoorOpen} from 'react-icons/bs';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogOut = () => {
    setIsLoggedOut(true);
    dispatch(logOut());
  };
  const userNameParts = user.name.split(' ');
  const firstName = userNameParts[0];

  
  return (
    <UserMenuContainerDiv>
      <WelcomeTextP>Welcome, <NameSpan>{firstName}</NameSpan></WelcomeTextP>
      <BtnLogout type="button" onClick={handleLogOut}>
      {isLoggedOut ? <BsDoorOpen /> : <BsDoorClosed />}
      Logout
      </BtnLogout>
    </UserMenuContainerDiv>
  );
}; 