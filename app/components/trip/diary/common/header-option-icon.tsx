import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { IconMore } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';
import useOutsideClick from '@/hooks/useOutsideClick';
import DiaryRemoveModal from './remove-modal';

function DiaryHeaderOptionIcon() {
  const { tripId, diaryId } = useParams();
  const [isOptionOpen, , optionOpen, optionClose] = useBoolean();
  const [isOpenModal, , modalOpen, modalClose] = useBoolean();
  const optionRef = useOutsideClick<HTMLDivElement>(optionClose);

  const handleClickRemoveOption: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    optionClose();
    modalOpen();
  };

  return (
    <>
      <div
        className="absolute right-24pxr top-1/2 -translate-y-1/2 cursor-pointer z-20"
        onClick={optionOpen}
      >
        <IconMore />

        {isOptionOpen && (
          <div
            ref={optionRef}
            className="absolute top-[calc(100%+11px)] right-0pxr flex flex-col bg-white w-130pxr rounded-[15px] shadow-diaryOption overflow-hidden text-14pxr leading-[22px] cursor-pointer"
          >
            <Link
              href={`/trip/${tripId}/diary/${diaryId}/update`}
              className="w-full py-13pxr px-23pxr"
            >
              수정
            </Link>

            <div
              className="w-full py-13pxr px-23pxr text-[#DD3D3D] border-t border-[#E3E3E3]"
              onClick={handleClickRemoveOption}
            >
              삭제
            </div>
          </div>
        )}
      </div>

      <DiaryRemoveModal isOpen={isOpenModal} onClose={modalClose} />
    </>
  );
}

export default DiaryHeaderOptionIcon;
