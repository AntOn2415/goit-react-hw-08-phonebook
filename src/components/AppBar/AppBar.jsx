import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {Header, HeaderContainer} from './AppBar.styled'


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
<HeaderContainer>
    <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
</HeaderContainer>
    </Header>
  );
};
