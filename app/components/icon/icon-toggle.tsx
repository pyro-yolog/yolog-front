function IconToggle({ size = 12 }: { size?: number }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
      >
        <rect width="12" height="12" fill="white" />
        <path
          d="M2.5 1.5L9.5 6L2.5 10.5V1.5Z"
          fill="black"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default IconToggle;
