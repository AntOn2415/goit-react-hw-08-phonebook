import styled from 'styled-components';
import {
  VisibilityHidden,
  ContactsContainerCommon,
  ContactUlCommon,
  LoaderRotatingLinesContainerCommon,
  EmptyContactsMessageCommon,
} from '../componentStyles';

export const TitleHiddenH2 = styled.h2`
  ${VisibilityHidden};
`

export const ContactsContainer = styled.div`
  ${ContactsContainerCommon}
`;

export const ContactUl = styled.ul`
  ${ContactUlCommon};
`;

export const LoaderRotatingLinesContainer = styled.div`
  ${LoaderRotatingLinesContainerCommon};
background-color: ${({ theme }) => theme.colors.backgroundColorLoader};`;

export const EmptyContactsMessage = styled.p`
  ${EmptyContactsMessageCommon};
font-size: ${({ theme }) => theme.fontSizes.large};`;


