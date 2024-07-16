import { Button, Modal } from '@/app/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

function TripSettingDeleteModal({ isOpen, onClose, onDelete }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-20pxr w-277pxr p-16pxr bg-white drop-shadow-modalShadow rounded-[20px]">
        <div className="flex flex-col gap-8pxr items-center">
          <p className="text-black text-17pxr font-semibold">
            일기장을 삭제할까요?
          </p>

          <p className="text-black text-13pxr">
            한번 삭제한 일기장은 복구할 수 없습니다.
          </p>
        </div>

        <div className="w-full flex gap-14pxr">
          <Button
            size="small"
            styles="w-1/2 bg-[#E3E3E3] text-[#9A9A9A]"
            onClick={onClose}
          >
            취소
          </Button>

          <Button
            size="small"
            styles="w-1/2 bg-primary300 text-white"
            onClick={onDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default TripSettingDeleteModal;
