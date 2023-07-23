import {HeroContainerDiv, HeroH1, ImgContainerDiv } from './Home.styled'
import LogoContactsLight from '../../images/LogoContactsLight.png'

export const Home = () => {
  return (
    <HeroContainerDiv >
    <HeroH1>
    PhoneBook
    </HeroH1>
    <ImgContainerDiv>
  <img src={LogoContactsLight}
                alt="phonebook."
                width="300"
                height="300"
              />
    </ImgContainerDiv>
  </HeroContainerDiv>
  );
}; 