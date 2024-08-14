const IconClose = ({ size = 12, color = '#91D366' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 13 12"
      fill="none"
    >
      <ellipse
        cx="6.91054"
        cy="6.00001"
        rx="6.08956"
        ry="6.00001"
        fill={color}
      />
      <path
        d="M8.9405 4L4.8808 8"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8808 4L8.9405 8"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconClose;
