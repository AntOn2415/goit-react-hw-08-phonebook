import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const ContactLi = styled.li``;

export const ContactContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 210px;
  border: 1px solid #27ae60;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const FirstLetterNameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  font-size: 14px;
  background-color: #27ae60;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms, color 250ms ease;
`;

export const ContactCard = styled.p`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
`;

export const ContactContentP = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
`;

export const NameSpan = styled.span`
  font-size: 16px;
`;
export const PhoneSpan = styled.span`
  font-size: 12px;
`;

export const CallA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 32px;
  height: 32px;
  font-size: 14px;
  background-color: #27ae60;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms, color 250ms ease;

  :hover,
  :focus {
    background-color: #fff;
    color: #27ae60;
  }
`;

export const ContactActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #27ae60;
  background-color: #e7e7e7;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  gap: 60px;
  padding: 8px 8px;
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 300ms ease;
`;


export const EditContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  gap: 4px;
  width: 60px;
  height: 22px;
  font-size: 14px;
  background-color: #27ae60;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms, color 250ms ease;

  :hover,
  :focus {
    background-color: #fff;
    color: #27ae60;
  }
`;

export const ContactBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 68px;
  height: 26px;
  padding: 6px 4px;
  font-size: 14px;
  background-color: #f4442e;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 300ms ease;

  :hover,
  :focus,
  :active {
    background-color: #fff;
    color: #f4442e
  }

  :disabled {
    background-color: #f4442e;
    color: #fff;
  }
`;
