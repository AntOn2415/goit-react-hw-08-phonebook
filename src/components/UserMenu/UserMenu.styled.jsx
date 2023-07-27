import styled from 'styled-components';

export const UserMenuContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 4px;
  cursor: default;
`;

export const NameSpan = styled.span`
  font-size: 16px;
`;

export const BtnLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  gap: 4px;
  width: 80px;
  height: 22px;
  font-size: 14px;
  background-color: #27ae60;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: ${props => (props.isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: box-shadow 300ms, background-color 300ms ease;

  :hover,
  :focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: ${props => (props.isLoading ? '#27ae60' : '#2ecc71')};
  }
`;
