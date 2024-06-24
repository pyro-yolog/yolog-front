function IconPalette({
  size = 30,
  color = 'black',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M3.97792 6.73608C9.54409 -1.30625 27.978 -1.26367 28.978 9.23591C29.1604 11.1504 28.478 11.7363 26.978 12.2357C24.6566 13.0085 21.9485 13.3351 21.4779 15.7361C21.1571 17.3733 23.8885 19.5704 23.978 21.2363C24.1524 24.4815 22.978 25.2357 19.478 26.7357C13.632 29.2411 6.38265 27.1083 2.97792 21.7361C-0.164832 16.7772 0.636812 11.5635 3.97792 6.73608Z"
        stroke={color}
        strokeWidth="1.25"
      />
    </svg>
  );
}

export default IconPalette;
