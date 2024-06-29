function IconImage({
  size = 30,
  color = 'black',
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      stroke={color}
      fill="none"
    >
      <path
        d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.625 12.5C11.6605 12.5 12.5 11.6605 12.5 10.625C12.5 9.58947 11.6605 8.75 10.625 8.75C9.58947 8.75 8.75 9.58947 8.75 10.625C8.75 11.6605 9.58947 12.5 10.625 12.5Z"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 18.75L20 12.5L6.25 26.25"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconImage;
