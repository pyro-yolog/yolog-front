import React from 'react';

interface Props {
  size?: number;
  className?: string;
  onClick?: () => void;
}

function IconNavigateLeft({ size = 33, className, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M20.625 24.75L12.375 16.5L20.625 8.25"
        stroke="#121212"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconNavigateLeft;
