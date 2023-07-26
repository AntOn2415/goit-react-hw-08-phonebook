import styled, { keyframes } from 'styled-components';
import {
  fadeIn,
  fadeOut,
  zoomIn,
  zoomOut,
} from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const zoomInAnimation = keyframes`${zoomIn}`;
const zoomOutAnimation = keyframes`${zoomOut}`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 247, 247, 0.3);
  backdrop-filter: blur(1px);
  z-index: 998;
  overflow-y: scroll;
  overflow: hidden;

animation: 500ms ${fadeInAnimation}; // при відкритті */
  /* animation: 500ms ${fadeOutAnimation}; // при закритті  */
`;

export const ModalDiv = styled.div`
  position: absolute;
  padding: 60px 20px;
  min-width: calc(100vw - 100px);
  min-height: calc(100vh - 300px);
  background-color: #f2f2f2;
  border-radius: 18px;
  border: 1px solid #27ae60;

    
  animation: 300ms ${zoomInAnimation};
  /* animation: 300ms ${zoomOutAnimation};// при закритті  */ 
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
  background-color: #27ae60;
  color: #fff;
  outline: none;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 300ms, background-color 300ms, color 300ms ease;

  :hover,
  :focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    color: #f4442e;
  }
`;
