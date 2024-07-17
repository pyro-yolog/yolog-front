'use client';

import usePortal from '@/hooks/use-portal';
import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}

function BottomSheet({ isOpen, children, onClose }: Props) {
  const portalRoot = usePortal('bottom-sheet');
  const ref = useOutsideClick<HTMLDivElement>(onClose);
  const [status, setStatus] = useState(isOpen);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setStatus(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setStatus(true);
    }
  }, [isOpen]);

  if (!status || !portalRoot) return null;

  return createPortal(
    <>
      <div className="z-50 fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-black bg-opacity-50" />

      <div
        ref={ref}
        className={`z-50 fixed bottom-0pxr bg-white rounded-tl-[15px] rounded-tr-[15px] w-full max-w-600pxr ${isOpen ? 'animate-showBottomSheet' : 'animate-closeBottomSheet'}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>
    </>,
    portalRoot,
  );
}

export default BottomSheet;
