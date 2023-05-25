import React from 'react';
import * as SC from '../../styles/components/input/Input.styles';

const InputLabel = ({ isRequired, label, description }) => {
  return (
    <>
      <SC.LabelTitle>
        <span>{label}</span>{' '}
        {isRequired && <SC.InputRequired>*</SC.InputRequired>}
      </SC.LabelTitle>
      {description && <SC.LabelDesc>{description}</SC.LabelDesc>}
    </>
  );
};

export default InputLabel;
