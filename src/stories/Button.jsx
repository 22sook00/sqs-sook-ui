import React from 'react';
import * as SC from '../styles/components/button/Button.styles';
const Button = ({ label, ...rest }) => (
  <SC.ButtonContainer {...rest}>{label}</SC.ButtonContainer>
);

export default Button;
