import { RegisterOptions } from 'react-hook-form';

export const PROFILE_NAME_VALIDATION = {
  minLength: {
    value: 4,
    message: '최소 4자 이상 입력해 주세요.',
  },
  maxLength: {
    value: 12,
    message: '최대 12자까지 입력 가능해요.',
  },
  required: {
    value: true,
    message: '',
  },
};

export const TRAVEL_DESTINATION_VALIDATION: RegisterOptions = {
  minLength: {
    value: 1,
    message: '최소 1자 입력해주세요.',
  },
  maxLength: {
    value: 35,
    message: '최대 35자까지 입력 가능해요.',
  },
};

export const DIARY_BOOK_NAME_VALIDATION: RegisterOptions = {
  minLength: {
    value: 1,
    message: '최소 1자 입력해주세요.',
  },
  maxLength: {
    value: 17,
    message: '최대 17자까지 입력할 수 있어요.',
  },
};
