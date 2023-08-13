import styled from 'styled-components';
import {
  VisibilityHidden,
  IconWrapperCommon,
  InputCommon,
} from '../componentStyles';

export const FilterSection = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
  padding-top: 30px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.backgroundGradient},
    ${({ theme }) => theme.colors.backgroundGradient},
    ${({ theme }) => theme.colors.backgroundGradient},
    ${({ theme }) => theme.colors.backgroundGradient},
    ${({ theme }) => theme.colors.backgroundGradientTransparent}
  );
`;

export const TitleHiddenH2 = styled.h2`
  ${VisibilityHidden};
`;

export const FilterContainer = styled.div`
  position: relative;
  padding: 0;
`;

export const FilterName = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.text};

  transition: color 300ms ease, font-size 300ms ease;

  :focus-within {
    color: ${({ theme }) => theme.colors.textFocus};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const IconWrapper = styled.div`
  ${IconWrapperCommon};
  color: ${props =>
    props.isEmptyFilter
      ? props.theme.colors.danger
      : props.theme.colors.placeholder};
`;

export const LabelP = styled.p`
  margin-left: 6px;
  height: 16px;
`;

export const FilterInput = styled.input`
  ${InputCommon};
  border: ${({ theme }) => theme.borders.border};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-right: 20px;
  padding-left: 26px;

  :hover,
  :focus {
    border-color: ${props =>
      props.isEmptyFilter
        ? props.theme.colors.danger
        : props.theme.colors.secondary};
  }

  @media screen and (min-width: 716px) {
    min-width: 200px;
  }

  @media screen and (min-width: 752px) {
    min-width: 390px;
  }

  @media screen and (min-width: 668px) and (max-width: 716px) {
    max-width: 340px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  margin: 0;
  height: 30px;
`;
