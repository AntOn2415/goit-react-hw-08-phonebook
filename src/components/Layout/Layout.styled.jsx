import styled from 'styled-components';
import {MediaScreenCommon} from '../componentStyles';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  min-height: 100vh;
  background: ${props => (props.isHomePage ? `linear-gradient(to bottom, ${props.theme.colors.backgroundHomeTop}, ${props.theme.colors.backgroundHome})` : props.theme.colors.backgroundPrimary)};
  ${MediaScreenCommon};
`;
