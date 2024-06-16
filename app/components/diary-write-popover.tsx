import React from 'react';
import { POPOVERS } from '../lib/constants/popover-write';
import { gowunBatang } from './ui/fonts';
import PopoverIconList from './ui/popover-icon-list';
import { PopoverValue, WritePopoverType } from '../lib/types/popover-type';

interface Props {
  type: WritePopoverType;
  className?: string;
  onClick: (value: PopoverValue, type: WritePopoverType) => void;
}

function DiaryWritePopover({ type, className, onClick }: Props) {
  const getTitle = () => {
    switch (type) {
      case POPOVERS.mood:
        return '감정';
      case POPOVERS.weather:
        return '날씨';
    }
  };

  return (
    <div
      className={`h-116pxr rounded-2xl border border-[#e6e3c8] bg-[#f8f7ee] ${className} flex flex-col justify-center px-16pxr z-10`}
    >
      <h1 className={`${gowunBatang.className} text-14pxr font-bold mb-10pxr`}>
        {getTitle()}
      </h1>
      <PopoverIconList onClick={onClick} type={type} />
    </div>
  );
}

export default DiaryWritePopover;
