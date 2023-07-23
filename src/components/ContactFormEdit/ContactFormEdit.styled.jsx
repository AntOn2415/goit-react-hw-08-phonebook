import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
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
  top: 55%;
  left: 10px;
  transition: color 300ms ease;
  color: #777;


`;

export const LabelSpan = styled.span`
  margin-left: 6px;
  height: 16px;
`;

export const InputForm = styled.input`
  min-width: 180px;
  padding: 8px;
  padding-left: 26px;
  
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
`;

export const BtnForm = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  width: 100%;
  padding: 10px;
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
`;
