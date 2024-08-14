const IconTriangleRight = ({ size = 12, color = 'black' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M1.5 1.5L8.5 6L1.5 10.5V1.5Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTriangleRight;
