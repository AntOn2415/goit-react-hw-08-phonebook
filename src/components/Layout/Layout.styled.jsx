import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  min-height: 100vh;
  background: ${props => (props.isHomePage ? 'linear-gradient(to bottom, #096b32, #72eba6)' : '#f3f3f3')};

  @media screen and (max-width: 667px) {
    max-width: 740px; 
  }

  @media screen and (min-width: 668px) {
    max-width: 1024px; 
    padding: 0 30px;
  }
  
  @media screen and (min-width: 1024px) {
    max-width: 1600px; 
    padding: 0 60px;
  }
`;
