import styled from 'styled-components';

export const ContactsContainer = styled.div`
  padding: 0;
`;

export const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 1px;
`;

export const LoaderRotatingLinesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(247, 247, 247, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 999;
`;

export const EmptyContactsMessage = styled.p`
  padding: 0;
  margin: 20px;
  font-size: 24px;
  text-align: center;
`;


