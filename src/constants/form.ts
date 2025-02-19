export const ERROR_MESSAGES = {
  consent: '개인정보 제공에 동의해야 합니다.',
  nameMinLength: '이름은 최소 2자 이상이어야 합니다.',
  nameMaxLength: '이름은 최대 50자까지 가능합니다.',
  emailInvalid: '올바른 이메일 주소를 입력해주세요.',
  phoneInvalid: '휴대폰 번호는 010-xxxx-xxxx 형식이어야 합니다.',
  part: '지원 분야를 선택해주세요.'
};

export const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

export const fieldLabels = {
  consent: '개인정보 수집 동의',
  name: '이름',
  email: '이메일',
  phone: '전화번호',
  part: '지원 분야'
} as const;

export const partFieldMapping = {
  프론트엔드: 'fe',
  백엔드: 'be',
  디자인: 'de',
  iOS: 'ios',
  안드로이드: 'aos',
  'Product Owner': 'po'
} as const;
