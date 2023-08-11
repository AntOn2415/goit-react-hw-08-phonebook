import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { UserMenuContainerDiv, NameSpan, BtnLogout } from './UserMenu.styled';
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs';
import { resetContacts } from '../../redux/slices/contactsSlice';
import { useThemeContext } from '../../hooks/ThemeContext'; 

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogOut = () => {
    setIsLoggedOut(true);
    dispatch(resetContacts());
    dispatch(logOut());
  };
  const userEmail = user.email;

  let userEmailToShow = userEmail;

  if (userEmail.length > 15) {
    const atIndex = userEmail.indexOf('@');
    if (atIndex >= 0 && atIndex <= 15) {
      userEmailToShow = userEmail.substring(0, atIndex + 1);
    } else {
      userEmailToShow = userEmail.substring(0, 15);
    }
  };

  useThemeContext();

  return (
    <UserMenuContainerDiv>
      <NameSpan>{userEmailToShow}</NameSpan>
      <BtnLogout type="button" onClick={handleLogOut}>
        {isLoggedOut ? <BsDoorOpen /> : <BsDoorClosed />}
        Logout
      </BtnLogout>
    </UserMenuContainerDiv>
  );
};
