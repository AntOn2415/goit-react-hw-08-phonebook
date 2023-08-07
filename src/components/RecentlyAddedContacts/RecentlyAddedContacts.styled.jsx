import styled from 'styled-components';

export const TitleH2 = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`
export const ContactsContainer = styled.div`

  padding: 0;
`;

export const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 335px;
  margin-left: 1px;
  overflow: hidden;
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


