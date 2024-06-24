'use client';

import usePortal from '@/hooks/use-portal';
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  refEl: React.ForwardedRef<HTMLDivElement>;
  open: boolean;
  children?: ReactNode;
  className?: string;
  onOutsideClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Modal({ children, className, open, refEl, onOutsideClick }: Props) {
  const portalRoot = usePortal('dialog-modal');

  if (!open || !portalRoot) return null;

  return createPortal(
    <div>
      <div
        ref={refEl}
        onClick={onOutsideClick}
        className="z-50 fixed bottom-0pxr left-0pxr right-0pxr top-0pxr bg-black bg-opacity-50"
      />
      <div
        className={`z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      >
        {children}
      </div>
    </div>,
    portalRoot,
  );
}

export default Modal;
