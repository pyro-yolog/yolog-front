function IconPlus({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 13H25" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M13 1L13 25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default IconPlus;
