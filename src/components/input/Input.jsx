import React, { useState, useEffect } from 'react';
import * as SC from '../../styles/components/input/Input.styles';
import { useFormContext } from 'react-hook-form';
import InputLabel from './InputLabel';

const Input = ({
  type = 'text',
  isTextarea = false,
  isReadOnly = false,
  isRequired = true,
  maxTextLength,
  label,
  description,
  placeholder,
  value,
  validatePattern,
  validateFunc,
  blurEvent,
  errorMsg,
  availableCheckMsg,

  patternErrMsg,
  requireErrMsg,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [alertType, setAlertType] = useState(null);
  useEffect(() => {
    !errors[value] && availableCheckMsg
      ? setAlertType({ type: 'success', message: availableCheckMsg })
      : errors[value]
      ? setAlertType({ type: 'error', message: errors[value].message })
      : setAlertType(null);
  }, [errors[value], availableCheckMsg]);
  return (
    <SC.InputFormContainer>
      {label && (
        <InputLabel
          isRequired={isRequired}
          label={label}
          description={description}
        />
      )}
      {isTextarea ? (
        <SC.TextareaFormWrapper>
          <SC.TextareaFormField
            type={type}
            placeholder={placeholder}
            readOnly={isReadOnly}
            {...register(value, {
              pattern: { value: validatePattern, message: patternErrMsg },
              required: { value: isRequired, message: requireErrMsg },
              onBlur: blurEvent,
              validate: validateFunc,
            })}
            {...props}
          />
          {maxTextLength && (
            <SC.TextareaFormLength>
              {props.textLength}/{maxTextLength}
            </SC.TextareaFormLength>
          )}
        </SC.TextareaFormWrapper>
      ) : (
        <SC.InputFormField
          type={type}
          placeholder={placeholder}
          readOnly={isReadOnly}
          autocomplete="off"
          {...register(value, {
            pattern: { value: validatePattern, message: patternErrMsg },
            required: { value: isRequired, message: requireErrMsg },
            onBlur: blurEvent,
            validate: validateFunc,
          })}
          {...props}
        />
      )}
      {alertType && (
        <SC.InputAlertText type={alertType.type}>
          {alertType.message}
        </SC.InputAlertText>
      )}
    </SC.InputFormContainer>
  );
};

export default Input;
