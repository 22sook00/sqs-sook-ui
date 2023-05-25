import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from '../../../styles/values/color';

//form
export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ width }) => width ?? '450px'};
  padding: 12px;
  margin: 0 auto;
  border: 1px solid ${color.border.default};
`;
export const AuthTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 28px;
`;

export const JoinBirthGridBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
  > div,
  input {
    width: 100%;
  }
`;
export const ValidNumWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const ValidNumCounter = styled.p`
  position: absolute;
  top: 16px;
  right: 12px;
  color: ${color.error};
  font-size: 12px;
`;
export const LoginLine = styled.div`
  width: 60%;
`;
export const NaverLogin = styled.div`
  position: relative;
  background-color: #1ec800;
  color: #ffffff;
`;
export const KakaoLogin = styled.div`
  position: relative;
  background-color: #fbe601;
  color: #3c1d1e;
`;
export const GoogleLogin = styled.div`
  position: relative;
  border: 1px solid #334155;
  // background-color: #334155;
  // color: #f9f9fb;
`;
