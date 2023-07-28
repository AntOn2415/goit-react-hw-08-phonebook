import { Link } from 'react-router-dom';
import {FaLinkSlash} from 'react-icons/fa6'
import { ContainerDiv, TitleH2, TextP } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <ContainerDiv>
      <FaLinkSlash size={80}/>
      <TitleH2>Not Found Page</TitleH2>
      <TextP>Please navigate to the homepage.</TextP>
      <Link to="/">Go to Homepage</Link>
    </ContainerDiv>
  );
};

export default NotFoundPage;
