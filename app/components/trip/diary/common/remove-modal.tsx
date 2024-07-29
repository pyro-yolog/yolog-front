'use client';

import { deleteDiaryAPI, getDiaryAPI } from '@/apis/diaries';
import Modal from '@/app/components/modal';
import Button from '@/app/components/ui/button';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function DiaryRemoveModal({ isOpen, onClose }: Props) {
  const router = useRouter();
  const { tripId, diaryId } = useParams();

  const {
    data: { travelDate },
  } = useSuspenseQuery({
    queryKey: ['diary', diaryId],
    queryFn: () => getDiaryAPI(diaryId as string),
  });

  const handleClickRemoveButton = async () => {
    try {
      await deleteDiaryAPI(diaryId as string);

      router.push(`/trip/${tripId}?date=${travelDate}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-20pxr items-center py-16pxr w-277pxr rounded-[20px] bg-white">
        <div className="flex flex-col gap-8pxr items-center">
          <p className="text-17pxr font-semibold leading-[22px]">
            일기를 삭제하시겠습니까?
          </p>

          <p className="text-13pxr leading-[18px]">
            한번 삭제된 일기는 복구할 수 없습니다.
          </p>
        </div>

        <div className="flex gap-14pxr px-16pxr w-full">
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
            onClick={handleClickRemoveButton}
          >
            삭제하기
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DiaryRemoveModal;
