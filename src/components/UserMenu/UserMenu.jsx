import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const userNameParts = user.name.split(' ');
  const firstName = userNameParts[0];
  
  const handleLogOut = () => dispatch(logOut());
  
  return (
    <div>
      <p>Welcome, {firstName}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};