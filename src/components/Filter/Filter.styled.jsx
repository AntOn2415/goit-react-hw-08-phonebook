import styled from 'styled-components';

export const FilterName = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 12px;
  color: #333;

  transition: color 300ms ease, font-size 300ms ease;

  :focus-within {
    color: #000;
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 6px;
  transition: color 300ms ease;
  color: ${props => (props.isEmptyFilter ? '#f4442e' : '#777')};
`;

export const LabelP = styled.p`
  margin-left: 6px;
  height: 16px;
`;

export const FilterInput = styled.input`
  min-width: 180px;
  padding: 8px;
  padding-left: 22px;
  border: 1px solid #ccc;
  border-color: 2ecc71;
  border-radius: 10px;
  color: #333;
  outline: none;
  transition: border-color 300ms ease;

  :hover,
  :focus {
    border-color: ${props => (props.isEmptyFilter ? '#f4442e' : '#2ecc71')};
  }
`;