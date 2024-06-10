function IconCamera({
  size = 21,
  stroke = '#707070',
}: {
  size?: number;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M20.125 16.625C20.125 17.0891 19.9406 17.5342 19.6124 17.8624C19.2842 18.1906 18.8391 18.375 18.375 18.375H2.625C2.16087 18.375 1.71575 18.1906 1.38756 17.8624C1.05937 17.5342 0.875 17.0891 0.875 16.625V7C0.875 6.53587 1.05937 6.09075 1.38756 5.76256C1.71575 5.43437 2.16087 5.25 2.625 5.25H6.125L7.875 2.625H13.125L14.875 5.25H18.375C18.8391 5.25 19.2842 5.43437 19.6124 5.76256C19.9406 6.09075 20.125 6.53587 20.125 7V16.625Z"
        stroke={stroke}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 14.875C12.433 14.875 14 13.308 14 11.375C14 9.442 12.433 7.875 10.5 7.875C8.567 7.875 7 9.442 7 11.375C7 13.308 8.567 14.875 10.5 14.875Z"
        stroke={stroke}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconCamera;
