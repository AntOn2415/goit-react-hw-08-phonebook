import styled from 'styled-components';

export const ContactUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


export const LoaderContainer = styled.div`
  padding: 0;
  margin: 0;
  height: 30px;
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
`;

export const EmptyContactsMessage = styled.p`
  padding: 0;
  margin: 20px;
  font-size: 24px;
  text-align: center;
`;
