import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from '../../../styles/values/color';

export const commonInput = css`
  border-radius: 4px;
  border: 1px solid ${color.border.default};
  box-sizing: border-box;
  &:hover {
    border: 1px solid ${color.border.hover};
  }
  &:active,
  &:focus {
    outline: 1px solid ${color.primary};
  }
`;
export const readonlyInput = css`
  background-color: ${color.bgc.default};
  color: ${color.text.sub};
  cursor: default;
  &:hover {
    border: 1px solid ${color.border.default};
  }
  &:active,
  &:focus {
    outline: none;
  }
`;

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;
export const LabelTitle = styled.label`
  margin-top: 12px;
  color: ${color.text};
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;
export const LabelDesc = styled.p`
  margin-bottom: 4px;
  color: ${color.text.sub};
  font-size: 12px;
`;
export const InputFormField = styled.input`
  ${commonInput}
  ${({ readOnly }) => readOnly && readonlyInput};
  height: 44px;
  padding: 0 10px;
`;

export const TextareaFormWrapper = styled.div`
  position: relative;
`;

export const TextareaFormField = styled.textarea`
  ${commonInput}
  ${({ readOnly }) => readOnly && readonlyInput};
  width: 100%;
  min-height: 120px;
  padding: 10px;
  resize: none;
  white-space: pre-line;
`;
export const TextareaFormLength = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: ${color.text.sub};
  font-size: 12px;
`;
export const InputRequired = styled.span`
  color: ${color.primary}; //컬러 정해지면 변경예정
`;
export const InputAlertText = styled.span`
  display: block;
  width: 100%;
  padding-left: 5px;
  color: ${({ type }) => (type === 'success' ? color.success : color.error)};
  font-size: 10px;
`;
