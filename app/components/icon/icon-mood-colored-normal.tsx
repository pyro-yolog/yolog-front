function IconMoodColoredNormal({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
    >
      <circle cx="13.75" cy="13.75" r="13.75" fill="#BAD49A" />
      <ellipse cx="17.875" cy="11.4577" rx="1.375" ry="2.29167" fill="black" />
      <ellipse cx="9.625" cy="11.4577" rx="1.375" ry="2.29167" fill="black" />
      <path
        d="M6.4165 17.416C8.09306 19.9881 10.5415 21.0734 13.5286 21.078C16.4998 21.0827 19.2498 20.166 20.6248 17.416"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconMoodColoredNormal;
