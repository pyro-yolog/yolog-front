import useToast from '@/hooks/useToast';
import {
  ClipboardEventHandler,
  ForwardedRef,
  forwardRef,
  RefObject,
} from 'react';

function DiaryWriteFormContent(_: any, ref?: ForwardedRef<HTMLDivElement>) {
  const showToast = useToast();

  const handlePaste: ClipboardEventHandler<HTMLDivElement> = (e) => {
    if (
      e.clipboardData.files.length > 0 ||
      e.clipboardData.types.includes('text/html')
    ) {
      e.preventDefault();

      showToast({ type: 'error', message: '텍스트만 붙여넣을 수 있어요!' });
    }

    /**
     * text/plain 이외 붙여넣기 상황도 가능하도록
     */
    // if (ref) {
    //   const div = document.createElement('div');
    //   const text = e.clipboardData.getData('text/plain');
    //   div.innerText = text;

    //   (ref as RefObject<HTMLDivElement>).current?.insertAdjacentElement(
    //     'beforeend',
    //     div,
    //   );
    // }
  };

  return (
    <div
      ref={ref}
      id="write-box"
      className="w-full min-h-full outline-none"
      contentEditable
      onPaste={handlePaste}
    ></div>
  );
}

export default forwardRef(DiaryWriteFormContent);
