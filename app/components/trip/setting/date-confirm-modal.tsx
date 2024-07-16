import { Button, Modal } from '@/app/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function TripSettingDateConfirmModal({ isOpen, onClose, onConfirm }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-20pxr w-277pxr p-16pxr bg-white drop-shadow-modalShadow rounded-[20px]">
        <div className="flex flex-col gap-8pxr items-center">
          <p className="text-black text-17pxr font-semibold">기간 변경</p>

          <p className="text-black text-13pxr text-center">
            변경된 여행 기간에 포함되지 않은 날짜에 작성된 일기가 존재해요.
            기간을 변경하게 되면 해당 날짜의 일기가 영구적으로 삭제돼요.
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
            onClick={onConfirm}
          >
            변경
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default TripSettingDateConfirmModal;
