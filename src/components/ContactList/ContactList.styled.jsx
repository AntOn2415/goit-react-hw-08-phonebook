import styled from 'styled-components';

export const TitleHiddenH2 = styled.h2`
   position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`

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


