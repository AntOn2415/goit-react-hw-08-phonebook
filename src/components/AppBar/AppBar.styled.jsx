import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import { MediaScreenCommon } from '../componentStyles';

const zoomInAnimation = keyframes`${zoomIn}`;

export const Header = styled.div`
  border-bottom: ${({ theme }) => theme.borders.border};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 420px;
  margin-right: auto;
  margin-left: auto;

  background-color: ${({ theme }) => theme.colors.pure};
  padding: 0 15px;
  height: 60px;

  ${MediaScreenCommon};
`;

export const ToggleButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-bottom: 8px;
  height: 60px;
  width: calc(100% - 200px);
  font-size: 30px;
  top: 0;
  left: 80px;
  color: transparent;
  background-color: transparent;
  border: none;
  z-index: 1;
  /* cursor: pointer; */

  :hover {
    color: ${({ theme }) => theme.colors.toggleTheme};
    animation: 5000ms ${zoomInAnimation};
    cursor: pointer;
  }
`;
