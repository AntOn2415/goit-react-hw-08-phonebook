import { HeroContainerDiv, HeroH1, ImgContainerDiv } from './Home.styled';
// import logoContactsLight from '../../images/logoContactsLight.png';
import LogoIcon from '../LogoIcon';
const Home = () => {
  return (
    <HeroContainerDiv>
      <HeroH1>PhoneBook</HeroH1>
      <ImgContainerDiv>
      <LogoIcon  size="300px" fontSizeTel={250} fontSizeBook={450} telX='16' telY='180' bookX='26' bookY='0' widthObject="160%" heightObject="160%"/>
      </ImgContainerDiv>
    </HeroContainerDiv>
  );
};

export default Home;