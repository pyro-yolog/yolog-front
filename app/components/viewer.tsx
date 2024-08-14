import { IconNavigateLeft } from './icon';

interface Props {
  isOpen: boolean;
  title: string;
  children?: string | JSX.Element | (string | JSX.Element)[];
  onClose: () => void;
}

const Viewer = ({ isOpen, title, children, onClose }: Props) => {
  return (
    isOpen && (
      <div className="flex justify-center fixed left-0pxr top-0pxr z-100 w-full h-full bg-white">
        <div className="flex flex-col max-w-600pxr w-full h-full">
          <div className="relative flex justify-center py-20pxr min-h-67pxr">
            <div
              className="absolute left-16pxr top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={onClose}
            >
              <IconNavigateLeft />
            </div>

            <span className="text-18pxr font-semibold">{title}</span>
          </div>

          <div className="flex flex-col w-full h-[calc(100%-67px)] overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Viewer;
