import { Link } from 'react-router-dom';
import { ContainerDiv, TitleH2, TextP } from './NotFoundPage.styled';
import brokenLink from '../../images/brokenLink.png';
const NotFoundPage = () => {
  return (
    <ContainerDiv>
      <img src={brokenLink} alt="brokenLink" width="150" height="150" />
      <TitleH2>Not Found Page</TitleH2>
      <TextP>Please navigate to the homepage.</TextP>
      <Link to="/">Go to Homepage</Link>
    </ContainerDiv>
  );
};

export default NotFoundPage;
