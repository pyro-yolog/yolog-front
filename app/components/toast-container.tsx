'use client';

import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import { toastState } from '@/lib/store/toast';
import usePortal from '@/hooks/use-portal';
import IconCheck from './ui/icon-check';

function ToastContainer() {
  const toastList = useRecoilValue(toastState);
  const portalRoot = usePortal('toast-portal');

  return portalRoot
    ? createPortal(
        <div>
          {toastList.map((toast) => (
            <div
              className="w-358pxr h-58pxr shrink-0 rounded-[15px] bg-[#dfedd5] fixed top-9pxr -translate-x-1/2 flex items-center z-50 space-y-3 left-1/2 animate-showToast border-[#A4BF82] border"
              key={toast.id}
            >
              <div className="absolute left-22pxr">
                <IconCheck />
              </div>

              <p className="text-[#313131] text-15pxr font-medium absolute left-64pxr">
                {toast.message}
              </p>
            </div>
          ))}
        </div>,
        portalRoot,
      )
    : null;
}

export default ToastContainer;
