import Modal from '@/app/components/modal';
import Button from '@/app/components/ui/button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const RemoveModal = ({ isOpen, onClose, onSubmit }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center gap-20pxr w-276pxr p-16pxr rounded-[20px] bg-white">
        <div className="flex flex-col items-center gap-8pxr">
          <span className="text-17pxr font-semibold leading-[22px]">
            계정 탈퇴
          </span>

          <p className="text-13pxr leading-[18px] text-center">
            모든 데이터가 삭제되며, 복구할 수 없습니다
          </p>
        </div>

        <div className="flex gap-14pxr w-full">
          <Button
            size="small"
            styles="w-1/2 bg-[#E3E3E3] text-[#9A9A9A] rounded-[8px]"
            onClick={onClose}
          >
            취소
          </Button>

          <Button
            size="small"
            styles="w-1/2 bg-primary300 text-white rounded-[8px]"
            onClick={onSubmit}
          >
            탈퇴하기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveModal;
