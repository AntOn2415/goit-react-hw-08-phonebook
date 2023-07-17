import styled from 'styled-components';

export const ContactLi = styled.li`
  display: flex;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  width: 344px;
  border: 1px solid #27ae60;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const FirstLetterNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  min-height: 22px;
  font-size: 14px;
  background-color: #2ecc71;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms, color 250ms ease;
`
export const ContactContentP = styled.div`
display: flex;
flex-direction: column;
  gap: 4px;
`

export const CallA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  min-width: 22px;
  min-height: 22px;
  font-size: 14px;
  background-color: #2ecc71;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms, color 250ms ease;
  
  :hover,
  :focus {
    background-color: #fff;
    color: #27ae60;
  }
`

export const ContactActionsContainer = styled.div`
display: flex;
  margin-left: 10px;
  gap: 8px;
`

export const EditContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 14px;
  background-color: #2ecc71;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms, color 250ms ease;
  
  :hover,
  :focus {
    background-color: #fff;
    color: #27ae60;
  }
`

export const ContactBtn = styled.button`
  position: relative;
  min-width: 60px;
  padding: 4px;
  background-color: #27ae60;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms ease;

  :hover,
  :focus {
    background-color: #2ecc71;
  }
`;
