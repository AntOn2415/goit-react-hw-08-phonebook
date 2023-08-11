import styled from 'styled-components';

export const HeroContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: auto;
  width: 100%;
  height: 100vh;
`;

export const HeroH1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.06em;
  line-height: 1.364;
  color: ${({ theme }) => theme.colors.white};
`;
export const ImgContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  color: ${({ theme }) => theme.colors.logo};
`;
