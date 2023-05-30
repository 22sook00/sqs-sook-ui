import React, { useState, useEffect, useCallback } from 'react';
import { useForm, useWatch, FormProvider } from 'react-hook-form';
import * as SC from '../../styles/components/authForm/AuthForm.styles';
import { JOIN_INIT_PARAMS } from '../../js/initParams/authParams';
import { AUTH_VALIDATION } from '../../js/enum/validationStatus';
import { AUTH_FORM_ERROR } from '../../js/enum/errorStatus';
import Input from '../input/Input';
import InputLabel from '../input/InputLabel';
import ButtonMui from '../button/ButtonMui';
import { FlexBox } from '../../styles/global/Flex.styles';
const TEMP_ID = '22sook00@gmail.com';
const Form = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: JOIN_INIT_PARAMS,
  });
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const [id, password, passwordChk, name, birth, phone, verifyPhone, term] =
    useWatch({
      control,
      name: [
        'id',
        'password',
        'passwordChk',
        'name',
        'birth',
        'phone',
        'verifyPhone',
        'term',
      ],
    });
  const [availableId, setAvailableId] = useState(undefined);
  const [availablePw, setAvailablePw] = useState(undefined);
  useEffect(() => {
    setAvailableId(undefined);
  }, [id]);
  useEffect(() => {
    setAvailablePw(undefined);
  }, [password]);
  const handleCheckAvailable = async (type) => {
    //TODO id 중복체크 API 와야함
    switch (type) {
      case 'id':
        console.log('blur 처리 되었을때 포스트 보낸다.', id, TEMP_ID);
        return id && id !== TEMP_ID
          ? setAvailableId('사용 가능한 이메일 입니다.')
          : setAvailableId(undefined);

      case 'password':
        return password
          ? setAvailablePw('사용 가능한 비밀번호 입니다.')
          : setAvailablePw(undefined);
    }
  };
  const handleVerifyPhone = () => {
    //폰번호가 유효한지 아닌지 인증 API
    setIsSendVerifyPhone(true);
  };
  const handleShowVerifyPhoneInput = useCallback(() => {
    //모달에서 확인을 누르면 그때 인증인풋이 보인다.
    setIsShowVerifyInput(true);
    setIsSendVerifyPhone(false);
  }, []);
  const handleSubmitForm = (data, e) => {
    e.preventDefault();
    if (data.password !== data.passwordChk) {
      console.log('data::', data);
      setError(
        'passwordChk',
        { types: { required: '비밀번호가 다릅니다' } },
        { shouldFocus: true }
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <SC.AuthFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <SC.AuthTitle>회원가입</SC.AuthTitle>
        <Input
          value={'id'}
          label={'아이디(이메일)'}
          placeholder={'사용하실 이메일 주소를 입력해주세요'}
          validatePattern={AUTH_VALIDATION['id']}
          patternErrMsg={AUTH_FORM_ERROR['id'].validation}
          requireErrMsg={AUTH_FORM_ERROR['id'].empty}
          blurEvent={() => handleCheckAvailable('id')}
          validateFunc={() => {
            return id === TEMP_ID ? AUTH_FORM_ERROR['id'].duplicate : undefined;
          }}
          availableCheckMsg={availableId}
        />
        <Input
          type="password"
          value={'password'}
          label={'비밀번호'}
          description={
            '알파벳(대문자) / 숫자 / 특수문자 1개씩을 포함하여 6~20자 이내로 작성해주세요'
          }
          placeholder={'사용하실 비밀번호를 입력해주세요'}
          validatePattern={AUTH_VALIDATION['password']}
          patternErrMsg={AUTH_FORM_ERROR['password'].validation}
          requireErrMsg={AUTH_FORM_ERROR['password'].empty}
          blurEvent={() => handleCheckAvailable('password')}
          availableCheckMsg={availablePw}
        />
        <Input
          type="password"
          value={'passwordChk'}
          label={'비밀번호 확인'}
          requireErrMsg={AUTH_FORM_ERROR['password'].match}
        />
        <Input
          label={'이름'}
          value={'name'}
          placeholder={
            '상호 또는 브랜드명이 아닌 가입하시는 분의 실명을 입력해주세요.'
          }
          validatePattern={AUTH_VALIDATION['name']}
          patternErrMsg={AUTH_FORM_ERROR['name'].validation}
          requireErrMsg={AUTH_FORM_ERROR['name'].empty}
        />
        <Input
          label={'생년월일'}
          value={'birth'}
          placeholder="생년월일 6자리"
          validatePattern={AUTH_VALIDATION['birth']}
          patternErrMsg={AUTH_FORM_ERROR['birth'].validation}
          requireErrMsg={AUTH_FORM_ERROR['birth'].empty}
          // validateFunc={() => {
          //   return isUnder14YearsOld(birth)
          //     ? AUTH_FORM_ERROR['birth'].underAge
          //     : undefined;
          // }}
        />
        <InputLabel label={'휴대전화 번호'} isRequired />
        <FlexBox gap="10px" align="flex-start">
          <Input
            value={'phone'}
            maxLength={13}
            placeholder={'휴대전화 번호'}
            validatePattern={AUTH_VALIDATION['phone']}
            errorMsg={AUTH_FORM_ERROR['phone'].validation}
          />
          <ButtonMui
            disabled={!phone || errors?.phone ? true : false}
            type="button"
            size="lg"
            onClick={handleVerifyPhone}
          >
            인증번호 받기
          </ButtonMui>
        </FlexBox>

        {/* {isShowVerifyInput && (
          <VerifyNumCounter
            isShowVerifyInput={isShowVerifyInput}
            setIsShowVerifyInput={setIsShowVerifyInput}
            isVerifyNumSuccess={isVerifyNumSuccess}
            setIsVerifyNumSuccess={setIsVerifyNumSuccess}
          />
        )} */}

        <InputLabel label={'이용약관'} />
        <ButtonMui type="submit" size="full">
          가입
        </ButtonMui>
      </SC.AuthFormContainer>
    </FormProvider>
  );
};

export default Form;
