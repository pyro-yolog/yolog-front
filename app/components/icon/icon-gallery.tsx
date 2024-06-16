function IconGallery({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M18.5833 1.25H3.41667C2.22005 1.25 1.25 2.22005 1.25 3.41667V18.5833C1.25 19.78 2.22005 20.75 3.41667 20.75H18.5833C19.78 20.75 20.75 19.78 20.75 18.5833V3.41667C20.75 2.22005 19.78 1.25 18.5833 1.25Z"
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.2085 8.83301C8.10596 8.83301 8.8335 8.10547 8.8335 7.20801C8.8335 6.31055 8.10596 5.58301 7.2085 5.58301C6.31103 5.58301 5.5835 6.31055 5.5835 7.20801C5.5835 8.10547 6.31103 8.83301 7.2085 8.83301Z"
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7498 14.2497L15.3332 8.83301L3.4165 20.7497"
        stroke="black"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconGallery;
