import styled from 'styled-components';
import {
  ContactsContainerCommon,
  ContactUlCommon,
  LoaderRotatingLinesContainerCommon,
  EmptyContactsMessageCommon,
} from '../componentStyles';

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ContactsContainer = styled.div`
  ${ContactsContainerCommon}
`;

export const ContactUl = styled.ul`
  ${ContactUlCommon};
  height: 335px;
  overflow: auto;
`;

export const LoaderRotatingLinesContainer = styled.div`
  ${LoaderRotatingLinesContainerCommon};
  background-color: ${({ theme }) => theme.colors.backgroundColorLoader};
`;

export const EmptyContactsMessage = styled.p`
  ${EmptyContactsMessageCommon};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
