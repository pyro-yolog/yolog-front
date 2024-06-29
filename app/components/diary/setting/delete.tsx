'use client';

import { Button, DiarySettingDeleteModal } from '@/app/components';
import useBoolean from '@/hooks/useBoolean';

function DiarySettingDelete() {
  const [isOpen, , open, close] = useBoolean();

  const handleDelete = async () => {
    console.log('delete');
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

      <DiarySettingDeleteModal
        isOpen={isOpen}
        onClose={close}
        onDelete={handleDelete}
      />
    </>
  );
}

export default DiarySettingDelete;
