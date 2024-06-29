'use client';

import usePortal from '@/hooks/use-portal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, children, onClose }: Props) {
  const portalRoot = usePortal('dialog-modal');
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  if (!isOpen || !portalRoot) return null;

  return createPortal(
    <div>
      <div className="z-50 fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-black bg-opacity-50" />

      <div
        ref={ref}
        className="z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </div>
    </div>,
    portalRoot,
  );
}

export default Modal;
