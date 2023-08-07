import styled from 'styled-components';

export const Header = styled.div`
 border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 420px;
  margin-right: auto;
  margin-left: auto;

  background-color: #fff;
  padding: 0 15px;
  height: 60px;

  @media screen and (max-width: 667px) {
    max-width: 740px; 
  }

  @media screen and (min-width: 668px) {
    max-width: 1024px; 
    padding: 0 30px;
  }
  
  @media screen and (min-width: 1024px) {
    max-width: 1600px; 
    padding: 0 60px;
  }
`;
