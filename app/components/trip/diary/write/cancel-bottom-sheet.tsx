import BottomSheet from '@/app/components/bottom-sheet';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function DiaryWriteCancelBottomSheet({ isOpen, onClose }: Props) {
  const { id } = useParams();
  const params = useSearchParams();

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col w-full pt-22pxr pb-14pxr px-20pxr gap-8pxr border-b border-primary400">
        <p className="text-black text-16pxr leading-[22px] font-semibold">
          작성을 취소하시겠습니까?
        </p>

        <p className="text-black text-13pxr leading-[22px]">
          작성 취소 선택 시, 작성 중인 글은 저장되지 않습니다.
        </p>
      </div>

      <Link
        href={`/trip/${id}?${params}`}
        className="block w-full py-24pxr px-20pxr text-[red] text-16pxr leading-[22px] border-b border-[#E3E3E3] cursor-pointer"
      >
        작성 취소
      </Link>

      <div
        className="w-full py-24pxr px-20pxr text-black text-16pxr leading-[22px] cursor-pointer"
        onClick={onClose}
      >
        계속 작성
      </div>
    </BottomSheet>
  );
}

export default DiaryWriteCancelBottomSheet;
