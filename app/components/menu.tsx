'use client';

import usePortal from '@/hooks/use-portal';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  menuRef?: React.ForwardedRef<HTMLDivElement>;
}

function Menu({ isOpen, children }: Props) {
  const portalRoot = usePortal('menu-portal');

  if (!isOpen) return null;

  return portalRoot
    ? createPortal(
        <div className="bg-white z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-390pxr w-full h-844pxr">
          {children}
        </div>,
        portalRoot,
      )
    : null;
}

export default Menu;
