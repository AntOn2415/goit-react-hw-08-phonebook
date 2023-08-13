import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useAuth, useThemeContext } from 'hooks';
import { Header, HeaderContainer, ToggleButton } from './AppBar.styled';
import { LIGHT } from '../../constants';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const { theme, onChangeTheme } = useThemeContext();
  const isLightTheme = theme === LIGHT;

  return (
    <Header>
      <HeaderContainer>
        <Navigation />
        <ToggleButton onClick={onChangeTheme}>
          {isLightTheme ? (
            <BsFillMoonStarsFill />
          ) : (
            <BsFillBrightnessHighFill />
          )}
        </ToggleButton>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContainer>
    </Header>
  );
};
