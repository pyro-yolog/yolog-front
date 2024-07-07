import { IToast, toastState } from '@/app/lib/store/toast';
import { useSetRecoilState } from 'recoil';

const TOAST_AVAILABLE_TIME = 2000;

function useToast() {
  const setToastList = useSetRecoilState(toastState);

  const showToast = ({ id = Date.now(), message, type }: IToast) => {
    const newToast = { id, message, type };
    setToastList((toast) => [...toast, newToast]);

    setTimeout(() => {
      setToastList((toast) => toast.filter((t) => t.id !== id));
    }, TOAST_AVAILABLE_TIME);
  };

  return showToast;
}

export default useToast;
