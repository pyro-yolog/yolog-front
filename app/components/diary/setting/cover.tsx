'use client';

import { IconPen } from '@/app/components/icon';
import DiarySettingCoverModal from './cover-modal';
import useBoolean from '@/hooks/useBoolean';

function DiarySettingCover() {
  const [isOpen, , open, close] = useBoolean();

  return (
    <>
      <div className="flex flex-col gap-11pxr">
        <span className="pl-2pxr text-18pxr text-[#313131] font-semibold">
          커버 변경
        </span>

        <div
          className="relative w-full h-200pxr rounded-[15px] overflow-hidden cursor-pointer"
          onClick={open}
        >
          <div className="absolute z-[3] flex items-center justify-center w-full h-full bg-black/20">
            <IconPen />
          </div>

          <div className="absolute w-full h-full bg-primary300" />
        </div>
      </div>

      <DiarySettingCoverModal isOpen={isOpen} onClose={close} />
    </>
  );
}

export default DiarySettingCover;
