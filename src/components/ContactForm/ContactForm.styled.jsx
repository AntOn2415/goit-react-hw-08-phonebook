import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';

export const TitleHiddenH2 = styled.h2`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`

export const FormContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 30px 0 0;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-right: 20px;

  @media screen and (min-width: 717px) {
    margin-right: 0;
  }
`;

export const LabelForm = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 12px;
  color: #333;
  transition: color 300ms ease;
  transition: font-size 300ms ease;

  :focus-within {
    color: #000;
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 52%;
  left: 14px;
  transition: color 300ms ease;
  color: #777;
`;

export const LabelSpan = styled.span`
  margin-left: 6px;
  height: 16px;
`;

export const InputForm = styled.input`
  min-width: 180px;
  padding: 10px;
  padding-left: 34px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #333;
  outline: none;
  transition: border-color 300ms ease;

  :hover,
  :focus {
    border-color: #27ae60;
  }

  :not(:placeholder-shown):required:valid {
    border-color: #27ae60;
  }

  :not(:placeholder-shown):required:invalid {
    border-color: #f4442e;
  }

  ::placeholder {
    color: #777;
  }

  @media screen and (min-width: 844px) {
    min-width: 250px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 390px;
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`

  input {
    display: flex;
    align-items: center;
    padding: 10px;
    padding-left: 34px;
    min-width: 180px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    color: #333;
    outline: none;  
    transition: border-color 300ms ease;

  :hover,
  :focus {
    border-color: #27ae60;
  }

  :not(:placeholder-shown):required:valid {
    border-color: #27ae60;
  }

  :not(:placeholder-shown):required:invalid {
    border-color: #f4442e;
  }

  ::placeholder {
    color: #777;
  }

  @media screen and (min-width: 844px) {
    min-width: 250px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 390px;
  }
  }

  .PhoneInputCountryIcon {
    position: absolute;
    top: 50%;
    left: 6px;
    height: 16px;
    width: 25px;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #27ae60;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: ${props => (props.isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 300ms, background-color 300ms ease;

  :hover,
  :focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: ${props => (props.isLoading ? '#27ae60' : '#2ecc71')};
  }

  :disabled {
    background-color: rgba(39, 174, 96, 0.6);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    cursor: not-allowed;
  }
`;
