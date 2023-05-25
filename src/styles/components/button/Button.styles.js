import MuiButton from '@mui/material/Button/Button';
import styled from '@emotion/styled';
import { color } from '../../../styles/values/color';

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

const BasicButton = styled.div`
  width: ${({ size }) => getSizeWidth(size)};
  height: ${({ size }) => (size === 'sm' ? '38px' : '44px')};
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '14px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const Primary = styled(BasicButton)`
  background-color: ${color.primary};
  color: white;

  :hover {
    background-color: ${color.primary_hover};
  }

  &.Mui-disabled {
    opacity: 0.8;
  }
`;

export const TextButton = styled(BasicButton)`
  background-color: ${({ active }) =>
    active === 'true' ? color.secondary : 'transparent'};
  color: ${({ active }) => (active === 'true' ? color.primary : 'black')};

  :hover {
    background-color: ${color.bgc.hover};
  }

  &.Mui-disabled {
    opacity: 0.8;
  }
`;
