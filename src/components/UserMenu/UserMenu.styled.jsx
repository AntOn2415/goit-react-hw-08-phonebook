import styled from 'styled-components';

export const UserMenuContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 4px;
  cursor: default;
  @media screen and (min-width: 740px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const NameSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const BtnLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  gap: 4px;
  width: 80px;
  height: 22px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: ${props => (props.isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: box-shadow 300ms, background-color 300ms ease;
  :hover,
  :focus {
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: ${props =>
      props.isLoading
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
  }
`;
