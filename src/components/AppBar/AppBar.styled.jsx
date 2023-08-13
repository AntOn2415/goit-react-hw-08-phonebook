import styled from 'styled-components';
import { MediaScreenCommon } from '../componentStyles';

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
  padding-top: 6px;
  margin-left: auto;
  margin-right: 10px;
  height: 60px;
  width: 30px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.toggleTheme};
  background-color: transparent;
  border: none;
  transition: font-size 500ms, color 500ms ease;
  cursor: pointer;

  :hover {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.toggleThemeHover};
  }
`;
