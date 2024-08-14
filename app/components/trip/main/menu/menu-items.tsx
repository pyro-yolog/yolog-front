import { IconNavigateRight } from '@/app/components/icon';

interface Props {
  children?: string | JSX.Element | JSX.Element[];
  onClick?: () => void;
}

const MenuItem = ({ children, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-between w-full h-63pxr pl-26pxr pr-14pxr border-b border-[#EAEAEA] cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MenuItem;
