'use client';

import usePortal from '@/hooks/use-portal';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { IconBottomSheetBar } from './icon';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  bottomSheetRef?: React.ForwardedRef<HTMLDivElement>;
  onOutsideClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title: string;
  description: string;
}

function BottomSheetDiary({
  children,
  bottomSheetRef,
  onOutsideClick,
  isOpen,
  title,
  description,
}: Props) {
  const portalRoot = usePortal('bottomSheetDiary');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  if (!isOpen && !isAnimating) return null;
  return portalRoot
    ? createPortal(
        <>
          <div
            ref={bottomSheetRef}
            onClick={onOutsideClick}
            className="z-50 fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-black bg-opacity-50"
          />
          <div
            onAnimationEnd={handleAnimationEnd}
            className={`z-50 min-w-390pxr absolute bottom-0pxr left-1/2 -translate-x-1/2 bg-white rounded-tr-[10px] rounded-tl-[10px] ${isOpen ? 'animate-showBottomSheet' : 'animate-closeBottomSheet'} transition duration-300`}
          >
            <IconBottomSheetBar className="absolute top-10pxr left-1/2 -translate-x-1/2" />
            <div className="flex flex-col mt-23pxr pb-14pxr gap-8pxr border-b border-primary400 px-19pxr">
              <p className="text-16pxr font-semibold leading-[22px] tracking-[-0.4px]">
                {title}
              </p>
              <p className="text-13pxr leading-[22px] tracking-[-0.4px]">
                {description}
              </p>
            </div>
            {children}
          </div>
        </>,
        portalRoot,
      )
    : null;
}

export default BottomSheetDiary;
