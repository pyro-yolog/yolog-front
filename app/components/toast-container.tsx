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
              className="w-358pxr h-58pxr px-24pxr rounded-[15px] fixed top-9pxr -translate-x-1/2 flex items-center z-50 space-y-3 left-1/2 animate-showToast border"
              key={toast.id}
              style={{
                backgroundColor: toast.type === 'error' ? '#ffc9c9' : '#dfedd5',
                borderColor: toast.type === 'error' ? 'red' : '#A4BF82',
              }}
            >
              {toast.type !== 'error' && (
                <div className="mr-20pxr">
                  <IconCheck />
                </div>
              )}

              <p className="text-[#313131] text-15pxr font-medium">
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
