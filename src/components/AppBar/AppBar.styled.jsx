import styled from 'styled-components';

export const Header = styled.div`
  max-width: 420px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 665px) {
    max-width: 665px; 
  }

  
  @media screen and (min-width: 1024px) {
    max-width: 1024px; 
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;
