'use client';

import { POPOVERS } from '@/app/lib/constants/popover-write';
import { PopoverValue, WritePopoverType } from '@/app/lib/types/popover-type';
import { useRef, useState } from 'react';

function usePopover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [popoverType, setPopoverType] = useState<WritePopoverType>(
    POPOVERS.mood,
  );
  const [popoverValues, setPopoverValues] = useState({
    mood: '',
    weather: '',
  });
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (popoverRef.current === e.target) setIsPopoverOpen(false);
  };

  const handleClickPopoverValue = (
    value: PopoverValue,
    type: WritePopoverType,
  ) => {
    if (type === POPOVERS.mood) {
      setPopoverValues((prev) => ({ ...prev, mood: value.mood }));
    } else if (type === POPOVERS.weather) {
      setPopoverValues((prev) => ({ ...prev, weather: value.weather }));
    }
    setIsPopoverOpen(false);
  };

  return {
    isPopoverOpen,
    popoverValues,
    setPopoverValues,
    setIsPopoverOpen,
    popoverType,
    setPopoverType,
    popoverRef,
    handleOutsideClick,
    handleClickPopoverValue,
  };
}

export default usePopover;
