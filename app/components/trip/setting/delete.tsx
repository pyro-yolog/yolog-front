'use client';

import { useParams, useRouter } from 'next/navigation';
import { deleteTripAPI } from '@/apis/trips';
import { Button, TripSettingDeleteModal } from '@/app/components';
import useBoolean from '@/hooks/useBoolean';

function TripSettingDelete() {
  const router = useRouter();
  const { tripId } = useParams();
  const [isOpen, , open, close] = useBoolean();

  const handleDelete = async () => {
    try {
      await deleteTripAPI(tripId as string);

      router.push('/trip');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button
        size="small"
        styles="bg-[#F3F3F3] text-[#FF0000] !text-15pxr"
        onClick={open}
      >
        일기장 삭제하기
      </Button>

      <TripSettingDeleteModal
        isOpen={isOpen}
        onClose={close}
        onDelete={handleDelete}
      />
    </>
  );
}

export default TripSettingDelete;
