import { MouseEventHandler } from 'react';

interface Props {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  angled?: boolean;
  size?: 'large' | 'small';
  styles?: string;
  children?: string | JSX.Element | (string | JSX.Element)[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
  type,
  disabled,
  angled,
  size = 'large',
  styles = 'bg-primary300 text-white',
  children,
  onClick,
}: Props) {
  const sizeStyles = {
    large: `w-full h-58pxr text-18pxr font-bold`,
    small: 'px-18pxr py-10pxr text-16pxr font-semibold',
  };

  const getButtonActiveStyle = () => {
    if (disabled) {
      return 'bg-[#e3e3e3] text-[#9a9a9a] font-semibold';
    }

    return styles;
  };

  return (
    <button
      type={type}
      className={`${sizeStyles[size]} ${getButtonActiveStyle()} ${!angled && 'rounded-[15px]'}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
