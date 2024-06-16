'use client';

import { useRouter } from 'next/navigation';

interface Props {
  onClose: () => void;
  id: string | string[];
}

function BottomSheetCancel({ onClose, id }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col ">
      <button
        onClick={() => router.push(`/diary/${id}`)}
        className="text-error text-start py-24pxr border-b border-[#e3e3e3] px-19pxr"
      >
        작성 취소
      </button>
      <button onClick={onClose} className="text-start py-24pxr px-19pxr">
        계속 작성
      </button>
    </div>
  );
}

export default BottomSheetCancel;
