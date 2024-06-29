'use client';

import { HTMLInputTypeAttribute, useState } from 'react';
import { FieldError } from 'react-hook-form';

interface Props {
  id: string;
  value: string;
  disabled?: boolean;
  error?: FieldError;
  type?: HTMLInputTypeAttribute;
  title: string;
  placeholder?: string;
  helpText?: string | JSX.Element;
  validText?: string | JSX.Element;
  validStyle?: boolean;
  bgStyle?: boolean;
  onChange?: (...event: any[]) => void;
}

function Input({
  id,
  value,
  disabled = false,
  error,
  type = 'text',
  title,
  placeholder,
  helpText,
  validText,
  validStyle = false,
  bgStyle = false,
  onChange,
}: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const isValid = !error && value?.length > 0;

  const getTitleStyles = () => {
    const style = 'text-14pxr font-semibold';

    if (error) {
      return `${style} text-[#ff0000]`;
    } else if (isValid && (isFocus || validStyle)) {
      return `${style} text-[#3E5C16]`;
    }

    return `${style} text-gray`;
  };

  const getInputStyles = () => {
    const backgroundStyle =
      'pt-13pxr pb-11pxr !bg-[#F3F3F3] px-16pxr !border border-[#F3F3F3] rounded-[10px]';
    let style =
      'w-full h-43pxr py-9pxr border-0 border-b-[3px] text-17pxr font-semibold text-[#626262] bg-transparent placeholder:font-normal focus:outline-none focus:border-inputGray transition-colors duration-50 ';

    if (bgStyle) {
      style += backgroundStyle;
    }

    if (error) {
      return `${style} !border-[#ff0000]`;
    } else if (isValid && (isFocus || validStyle)) {
      return `${style} !border-[#3E5C16]`;
    }

    return `${style} border-[#CBCBCB]`;
  };

  const getMessageStyles = () => {
    const style = 'text-13pxr leading-[18px]';

    if (error) {
      return `${style} text-error`;
    } else if (isValid && (isFocus || validStyle)) {
      if (!validText) {
        return `${style} text-gray`;
      }

      return `${style} text-inputGreen`;
    }

    return `${style} text-gray`;
  };

  const getMessage = () => {
    if (error) {
      return error?.message as string;
    } else if (isValid && (isFocus || validStyle)) {
      if (!validText) {
        return helpText;
      }

      return validText;
    } else if (isFocus) {
      return helpText;
    }
  };

  return (
    <div className="flex flex-col gap-9pxr w-full">
      <label htmlFor={id}>
        <p className={getTitleStyles()}>{title}</p>
      </label>

      <div className="flex">
        <input
          autoComplete="off"
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          className={getInputStyles()}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={onChange}
        />
      </div>

      {getMessage() && <p className={getMessageStyles()}>{getMessage()}</p>}
    </div>
  );
}

export default Input;
