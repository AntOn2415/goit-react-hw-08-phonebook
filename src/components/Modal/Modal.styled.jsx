import styled, { keyframes } from 'styled-components';
import { fadeIn, zoomIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const zoomInAnimation = keyframes`${zoomIn}`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColorLoader};
  backdrop-filter: blur(1px);
  z-index: 998;
  overflow-y: scroll;
  overflow: hidden;

  animation: 500ms ${fadeInAnimation};
`;

export const ModalDiv = styled.div`
  position: absolute;
  padding: 60px 20px;
  min-width: calc(100vw - 100px);
  min-height: calc(100vh - 300px);
  background-color: ${({ theme }) => theme.colors.backgroundModal};
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  animation: 300ms ${zoomInAnimation};

  @media screen and (min-width: 668px) {
    min-width: calc(100vw - 400px);
    min-height: calc(100vh - 400px);
  }

  @media screen and (min-width: 1200px) {
    min-width: calc(100vw - 900px);
    min-height: calc(100vh - 500px);
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  background: inherit;
  font-size: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.pure};
  outline: none;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: box-shadow 300ms, background-color 300ms, color 300ms ease;

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${({ theme }) => theme.colors.pure};
    color: ${({ theme }) => theme.colors.danger};
  }
`;
