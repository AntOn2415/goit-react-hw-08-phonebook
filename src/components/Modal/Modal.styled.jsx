import styled from "styled-components";

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
z-index: 999;
  transition:  300ms cubic-bezier(0.4, 0, 0.2, 1),
300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: scroll;
  overflow: hidden;
`
export const ModalDiv = styled.div`
max-width: calc(100vw - 48px);
max-height: calc(100vh - 24px);
position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 2px 2px;
  top: 50%;
  left: 50%;
  border: 1px solid #27ae60;
  border-radius: 20px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-50%, -50%) scale(${({ showModal }) => (showModal ? '1' : '0.8')});
  opacity: ${({ showModal }) => (showModal ? '0' : '1')};
  
`