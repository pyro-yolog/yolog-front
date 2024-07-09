import MENUS from '@/lib/constants/menus';
import { IconInquiryDone } from '../icon';
import Button from './button';

interface Props {
  onClick: (menu: string) => void;
  onClose: () => void;
}

function DialogInquiryDone({ onClick, onClose }: Props) {
  const handleClickCheck = () => {
    onClose();
    onClick(MENUS.menu);
  };
  return (
    <div className="flex flex-col items-center gap-20pxr ">
      <div className="bg-primary300 w-44pxr h-44pxr rounded-full flex justify-center items-center border-[6.5px] border-[#D3E5BD87]">
        <IconInquiryDone />
      </div>
      <p className="text-17pxr font-semibold leading-[18px] tracking-[-0.4px] text-center">
        소중한 의견 감사합니다.
      </p>
      <Button
        styles="h-44pxr bg-primary300 text-white"
        onClick={handleClickCheck}
      >
        확인
      </Button>
    </div>
  );
}

export default DialogInquiryDone;
