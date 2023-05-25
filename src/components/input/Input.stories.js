import Input from './Input';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import InputLabel from './InputLabel';
import { JOIN_INIT_PARAMS } from '../../js/initParams/authParams';

import { FlexColumn, FlexBox } from '../../styles/global/Flex.styles';
import Form from '../form/Form';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Common/Input',
  component: Input,
  tags: ['docsPage'],
  decorators: [withKnobs],
};
const StorybookFormProvider = ({ children }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: JOIN_INIT_PARAMS,
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
      >
        {children}
      </form>
    </FormProvider>
  );
};
export const input = () => {
  const placeholder = text('placeholder', '이메일을 넣어주세요');
  const value = text('value', 'id');
  return (
    <StorybookFormProvider>
      <h3>Input Only</h3>
      <Input placeholder={placeholder} value={value} />
    </StorybookFormProvider>
  );
};
input.story = {
  name: 'Default',
};

export const includeLabelInput = () => {
  return (
    <StorybookFormProvider>
      <FlexColumn align="flex-start">
        <h3>Label Only</h3>
        <InputLabel isRequired={true} label={'이름'} value={'name'} />
        <InputLabel
          label={'생년월일'}
          description={'주민번호 상 6자리 생년월일을 작성하세요'}
        />

        <h3>with Label</h3>
        <Input
          label={'아이디'}
          description={'아이디는 @.com 으로 반드시 끝나라'}
          value={'id'}
        />
        <Input isRequired={false} label={'비밀번호'} value={'password'} />
      </FlexColumn>
    </StorybookFormProvider>
  );
};

export const textarea = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: JOIN_INIT_PARAMS,
  });
  const { watch } = methods;
  return (
    <StorybookFormProvider>
      <FlexColumn align="flex-start">
        <h3>Textarea Only</h3>
        <Input isTextarea value={'birth'} />

        <h3>Textarea with max number</h3>
        <Input
          isTextarea
          textLength={watch('phone')?.length ?? 0}
          maxTextLength={1000}
          value={'phone'}
        />
      </FlexColumn>
    </StorybookFormProvider>
  );
};

export const withForm = () => {
  return <Form />;
};
