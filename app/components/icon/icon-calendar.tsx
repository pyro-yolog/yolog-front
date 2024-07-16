function IconCalendar({ size = 16, color = '#696969' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M13.4444 2.2998H2.55556C1.69645 2.2998 1 2.88183 1 3.5998V12.6998C1 13.4178 1.69645 13.9998 2.55556 13.9998H13.4444C14.3036 13.9998 15 13.4178 15 12.6998V3.5998C15 2.88183 14.3036 2.2998 13.4444 2.2998Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1104 1V3.6"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.88867 1V3.6"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 6.2002H15"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCalendar;
