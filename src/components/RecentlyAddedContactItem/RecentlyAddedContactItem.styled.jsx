import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeInUp } from 'react-animations';
import {
  ContactLiCommon,
  ContactContainerCommon,
  FirstLetterNameCommon,
  ContactCardCommon,
  ContactContentCommon,
  NameSpanCommon,
  ContainerIconCommon,
  ContactActionsContainerCommon,
  EditContactBtnCommon,
  ContactBtnCommon,
} from '../componentStyles';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const ContactLi = styled.li`
  ${ContactLiCommon};
`;

export const ContactContainerDiv = styled.div`
  ${ContactContainerCommon};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.default};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
  animation: 300ms ${fadeInUpAnimation};
`;

export const FirstLetterNameDiv = styled.div`
  ${FirstLetterNameCommon};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const ContactCardDiv = styled.div`
  ${ContactCardCommon};
`;

export const ContactContentP = styled.p`
  ${ContactContentCommon};
`;

export const NameSpan = styled.span`
  ${NameSpanCommon};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;
export const PhoneSpan = styled.span`
  $font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerIconSpan = styled.span`
  ${ContainerIconCommon};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContactActionsContainer = styled.div`
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  ${ContactActionsContainerCommon};

  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundHover};
  animation: 300ms ${fadeInDownAnimation};
`;

export const EditContactBtn = styled.button`
  ${EditContactBtnCommon};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactDeleteBtn = styled.button`
  ${ContactBtnCommon};
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.danger};
  box-shadow: ${({ theme }) => theme.shadows.default};

  :hover,
  :focus,
  :active {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }
`;
