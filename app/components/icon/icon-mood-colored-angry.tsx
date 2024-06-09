function IconMoodColoredAngry({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
    >
      <circle cx="13.75" cy="13.75" r="13.75" fill="#758968" />
      <ellipse cx="17.875" cy="13.2917" rx="1.375" ry="2.29167" fill="black" />
      <ellipse cx="9.625" cy="13.2917" rx="1.375" ry="2.29167" fill="black" />
      <path
        d="M8.25 20.7625C10.0833 18.9291 15.3082 16.3625 19.7082 20.7625"
        stroke="black"
        strokeLinecap="round"
      />
      <path
        d="M11.4583 11.917L6.875 9.16699M16.0417 11.917L21.0833 9.16699"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconMoodColoredAngry;
