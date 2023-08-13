import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';
import {
  VisibilityHidden,
  FormCommon,
  InputFormCommon,
  LabelCommon,
  IconWrapperCommon,
  InputCommon,
  BtnCommon,
} from '../componentStyles';

export const TitleHiddenH2 = styled.h2`
  ${VisibilityHidden};
`;

export const FormContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 30px 0 0;
`;

export const Form = styled.form`
  ${FormCommon};
  margin-right: 20px;

  @media screen and (min-width: 717px) {
    margin-right: 0;
  }
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
  border-radius: ${({ theme }) => theme.borders.borderRadius};
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
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`
  input {
    ${InputCommon};
    display: flex;
    align-items: center;
    width: calc(100% - 46px);
    border: ${({ theme }) => theme.borders.border};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    border-radius: ${({ theme }) => theme.borders.borderRadius};
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
    }
  }

  .PhoneInputCountryIcon {
    position: absolute;
    top: 48%;
    left: 6px;
    height: 17px;
    width: 25px;
    border: ${({ theme }) => theme.borders.border};
  }

  .PhoneInputCountrySelect {
    position: absolute;
    height: 35px;
    width: 30px;
    top: 34%;
    left: 3px;
    opacity: 0;
    z-index: 10;
    cursor: pointer;
  }
`;

export const BtnForm = styled.button`
  ${BtnCommon};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  cursor: ${props => (props.isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ theme }) => theme.shadows.default};

  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${props =>
      props.isLoading
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  }

  :disabled {
    background-color: rgba(39, 174, 96, 0.6);
    box-shadow: ${({ theme }) => theme.shadows.default};
    cursor: not-allowed;
  }
`;
