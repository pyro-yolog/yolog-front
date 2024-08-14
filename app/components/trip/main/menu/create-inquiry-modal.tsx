import { Button, Modal } from '@/app/components';
import IconSuccess from '@/app/components/icon/icon-success';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateInquiryModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center gap-20pxr w-277pxr p-16pxr bg-white rounded-[20px] shadow-dialog">
        <IconSuccess />

        <span className="text-17pxr font-semibold leading-[16px]">
          소중한 의견 감사합니다
        </span>

        <Button
          size="small"
          styles="bg-primary300 text-white w-full rounded-[8px]"
          onClick={onClose}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default CreateInquiryModal;
