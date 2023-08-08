import styled from 'styled-components';

export const ContactsContainerDiv = styled.div`
  display: block;
  gap: 20px;

  @media screen and (min-width: 668px) {
    display: flex; 
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;
    gap: 60px;
  }
`;

export const ContentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`