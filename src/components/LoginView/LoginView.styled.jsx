import styled from 'styled-components';
import { FormCommon, LabelCommon, IconWrapperCommon, InputCommon, InputFormCommon, BtnCommon } from '../componentStyles';

export const FormContainer = styled.div`
  padding: 30px 0 0;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  ${FormCommon};
`;

export const LabelForm = styled.label`
  ${LabelCommon};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.text};

  :focus-within {
    color: ${({ theme }) => theme.colors.textFocus};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const IconWrapper = styled.div`
  ${IconWrapperCommon};
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const LabelSpan = styled.span`
  margin-left: 6px;
  height: 16px;
`;

export const InputForm = styled.input`
  ${InputCommon};
 border: ${({ theme }) => theme.borders.border};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius:  ${({ theme }) => theme.borders.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  ${InputFormCommon};
:hover,
  :focus {
    border-color: ${({ theme }) => theme.borders.borderColorHover};
  }

  :not(:placeholder-shown):required:valid {
    border-color: ${({ theme }) => theme.borders.borderColorValid};
  }

  :not(:placeholder-shown):required:invalid {
    border-color: ${({ theme }) => theme.borders.borderColorInvalid};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  };
`;

export const BtnForm = styled.button`
  ${BtnCommon};
font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius:  ${({ theme }) => theme.borders.borderRadius};
  cursor: ${props => (props.isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ theme }) => theme.shadows.default};

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${props => (props.isLoading ? props.theme.colors.primary : props.theme.colors.secondary)};
  }

  :disabled {
    background-color: rgba(39, 174, 96, 0.6);
    box-shadow: ${({ theme }) => theme.shadows.default};
    cursor: not-allowed;
  }`;
