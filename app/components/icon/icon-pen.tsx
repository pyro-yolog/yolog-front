function IconPen({
  size = 31,
  color = 'white',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
    >
      <path
        d="M21.9585 3.87523C22.2977 3.53598 22.7005 3.26687 23.1437 3.08327C23.587 2.89967 24.0621 2.80518 24.5418 2.80518C25.0216 2.80518 25.4967 2.89967 25.9399 3.08327C26.3832 3.26687 26.7859 3.53598 27.1252 3.87523C27.4644 4.21448 27.7335 4.61722 27.9171 5.06047C28.1007 5.50372 28.1952 5.97879 28.1952 6.45856C28.1952 6.93833 28.1007 7.4134 27.9171 7.85665C27.7335 8.2999 27.4644 8.70265 27.1252 9.04189L9.68766 26.4794L2.5835 28.4169L4.521 21.3127L21.9585 3.87523Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconPen;
