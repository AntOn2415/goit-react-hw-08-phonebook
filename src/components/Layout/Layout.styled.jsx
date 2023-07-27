import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  min-height: 100vh;
  background-color: #f3f3f3;

  @media screen and (min-width: 665px) {
    max-width: 665px; 
  }

  
  @media screen and (min-width: 1024px) {
    max-width: 1024px; 
  }
`;
