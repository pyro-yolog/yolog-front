'use client';

import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import { IconPen } from '@/app/components/icon';
import TripSettingCoverModal from './cover-modal';
import useBoolean from '@/hooks/useBoolean';
import { tripWriteState } from '@/lib/store/trip';

function TripSettingCover() {
  const data = useRecoilValue(tripWriteState);

  const [isOpen, , open, close] = useBoolean();

  if (!data) return null;

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

          {data.coverImageUrl ? (
            <Image
              src={data.coverImageUrl}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="100%"
              alt="diary-cover-image"
              fill
              priority
            />
          ) : (
            <div
              className="absolute w-full h-full"
              style={{ backgroundColor: data.coverColor }}
            />
          )}
        </div>
      </div>

      <TripSettingCoverModal isOpen={isOpen} onClose={close} />
    </>
  );
}

export default TripSettingCover;
