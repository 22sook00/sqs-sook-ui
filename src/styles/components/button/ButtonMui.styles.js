import MuiButton from '@mui/material/Button';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { color } from '../../values/color';

const getSizeWidth = (size) => {
  switch (size) {
    case 'full':
      return '100%';

    case 'lg':
      return '200px';

    case 'sm':
      return '100px';

    default:
      return '100%';
  }
};

const BasicButton = styled(MuiButton)`
  min-width: ${({ size }) => getSizeWidth(size)};
  height: ${({ size }) => (size === 'sm' ? '38px' : '44px')};
  padding: 0 4px;
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '14px')};
`;

export const Primary = styled(BasicButton)`
  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
          &:hover {
            background-color: ${backgroundColor};
          }
        `
      : css`
          background-color: ${color.primary};
          &:hover {
            background-color: ${color.primary_hover};
          }
        `}

  color: white;

  &.Mui-disabled {
    opacity: 0.8;
  }
`;

export const TextButton = styled(BasicButton)`
  /* background-color: ${({ active }) =>
    active === 'true' ? color.secondary : 'transparent'};
  color: ${({ active }) => (active === 'true' ? color.primary : 'black')};
  :hover {
    background-color: ${color.bgc.hover};
  } */

  ${({ textColor }) =>
    textColor
      ? css`
          color: ${textColor};
          &:hover {
            color: ${color.bgc.hover};
          }
        `
      : css`
          color: ${color.primary};
          border: 1px solid ${color.primary};
          &:hover {
            color: ${color.secondary};
            border: 1px solid ${color.secondary_hover};
          }
        `}

  &.Mui-disabled {
    opacity: 0.8;
  }
`;
