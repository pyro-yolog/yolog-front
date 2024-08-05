'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from '@/app/components';
import { IconNavigateLeft } from '@/app/components/icon';
import { DIARY_COVER_COLORS } from '@/lib/constants/colors';
import { tripWriteState } from '@/lib/store/trip';

interface Props {
  onClose: () => void;
}

function TripSettingCoverModalPalette({ onClose }: Props) {
  const [writeData, setWriteData] = useRecoilState(tripWriteState);
  const [coverColor, setCoverColor] = useState<string>();

  const handleClickButton = () => {
    if (!writeData) return;

    setWriteData({
      ...writeData,
      coverColor: coverColor,
      coverImageUrl: undefined,
      spineColor: undefined,
    });
    onClose();
  };

  useEffect(() => {
    setCoverColor(undefined);
  }, []);

  return (
    <div className="flex flex-col p-16pxr pb-20pxr gap-25pxr w-318pxr bg-white rounded-[24px]">
      <div className="relative flex items-center justify-center h-33pxr">
        <IconNavigateLeft
          className="absolute left-0pxr cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />

        <span className="text-17pxr text-black font-semibold">컬러 이미지</span>
      </div>

      <div className="grid grid-cols-4 gap-x-15pxr gap-y-13pxr py-17pxr px-15pxr w-full bg-[#F4F4F4] rounded-[17px]">
        {DIARY_COVER_COLORS.map((color) => (
          <div
            key={color}
            className="h-38pxr rounded-[8px] cursor-pointer border-[2px] transition-colors"
            style={{
              backgroundColor: color,
              borderColor:
                coverColor === color ? '#91D366' : 'rgba(0, 0, 0, 0)',
            }}
            onClick={() => setCoverColor(color)}
          />
        ))}
      </div>

      <Button size="small" disabled={!coverColor} onClick={handleClickButton}>
        확인
      </Button>
    </div>
  );
}

export default TripSettingCoverModalPalette;
