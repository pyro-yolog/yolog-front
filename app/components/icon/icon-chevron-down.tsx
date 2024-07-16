function IconChevronDown({ size = 10, color = '#696969' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none"
    >
      <path
        d="M9 1L5 5L1 1"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconChevronDown;
