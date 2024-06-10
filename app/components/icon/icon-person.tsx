function IconPerson({ size = 26 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 26 25"
      fill="none"
    >
      <path
        d="M18.6558 6.05525C18.6558 9.03528 16.1543 11.4855 13.0254 11.4855C9.89652 11.4855 7.39502 9.03528 7.39502 6.05525C7.39502 3.07521 9.89652 0.625 13.0254 0.625C16.1543 0.625 18.6558 3.07521 18.6558 6.05525Z"
        stroke="black"
        stroke-width="1.25"
      />
      <path
        d="M1.08338 24H24.9675C25.4224 17.3943 20.9868 15.3759 18.7122 15.1924H7.33879C1.42459 16.5135 0.704267 21.6146 1.08338 24Z"
        stroke="black"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconPerson;
