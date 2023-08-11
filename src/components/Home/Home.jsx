import { Link } from 'react-router-dom';
import { useThemeContext } from '../../hooks/ThemeContext'; 
import { HeroContainerDiv, HeroH1, ImgContainerDiv } from './Home.styled';
import LogoIcon from '../LogoIcon';

const Home = () => {
  useThemeContext();
  
  return (
    <HeroContainerDiv>
      <HeroH1>PhoneBook</HeroH1>
      <Link to="/contacts">
        <ImgContainerDiv>
          <LogoIcon
            size="300px"
            fontSizeTel={250}
            fontSizeBook={450}
            telX='16'
            telY='180'
            bookX='26'
            bookY='0'
            widthObject="160%"
            heightObject="160%"
          />
        </ImgContainerDiv>
      </Link>
    </HeroContainerDiv>
  );
};

export default Home;
