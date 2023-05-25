export const AUTH_FORM_ERROR = {
  id: {
    empty: '이메일을 입력해주세요.',
    validation: '이메일 형식이 맞지 않습니다.',
    duplicate: '이미 사용중인 이메일입니다.',
  },
  password: {
    empty: '비밀번호를 입력해주세요',
    validation: '비밀번호는 알파벳(대문자) / 숫자 / 특수문자 1개씩을 포함하여 6~20자 이내로 작성해주세요',
    match: '비밀번호가 일치하는지 확인해주세요',
  },
  name: {
    empty: '이름을 입력해주세요.',
    validation: '가입하시는 분의 실명을 입력해주세요.',
  },
  birth: {
    empty: '생년월일을 입력해주세요.',
    validation: '생년월일을 확인해주세요.',
    underAge: '14세 미만의 경우 가입이 제한됩니다.',
  },
  phone: {
    empty: '휴대전화 번호를 입력해주세요.',
    validation: '휴대전화 번호를 확인해주세요',
  },
  verifyPhone: {
    fail: `인증번호가 일치하지 않습니다. 인증번호를 확인해주세요.`,
  },
}
