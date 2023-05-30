import ButtonMui from './ButtonMui';
import { withKnobs, text, select, color } from '@storybook/addon-knobs';
import { color as colorValue } from '../../styles/values/color';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Common/ButtonMui',
  component: ButtonMui,
  tags: ['docsPage'],

  decorators: [withKnobs],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const buttonMui = () => {
  const role = select('role', ['primary', 'text']);
  const size = select('size', ['sm', 'lg', 'full']);
  const children = text('children', 'Button Mui');
  const backgroundColor = color('backgroundColor', colorValue.primary);
  return (
    <ButtonMui role={role} size={size} backgroundColor={backgroundColor}>
      {children}
    </ButtonMui>
  );
};

buttonMui.story = {
  name: 'Default',
};
