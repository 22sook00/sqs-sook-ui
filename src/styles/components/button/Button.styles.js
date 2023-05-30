import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from '../../../styles/values/color';

const getVariantStyles = ({ primary = false }) =>
  primary
    ? css`
        color: white;
        background-color: pink;
      `
    : css`
        background-color: transparent;
        color: pink;
        box-shadow: #222222 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case 'large': {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

export const ButtonContainer = styled.button`
  font-family: 600;
  font-weight: 'bold';
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;
