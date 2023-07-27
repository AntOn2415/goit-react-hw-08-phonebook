import { HeroContainerDiv, HeroH1, ImgContainerDiv } from './Home.styled';
import logoContactsLight from '../../images/logoContactsLight.png';

const Home = () => {
  return (
    <HeroContainerDiv>
      <HeroH1>PhoneBook</HeroH1>
      <ImgContainerDiv>
        <img
          src={logoContactsLight}
          alt="phonebook."
          width="250"
          height="250"
        />
      </ImgContainerDiv>
    </HeroContainerDiv>
  );
};

export default Home;