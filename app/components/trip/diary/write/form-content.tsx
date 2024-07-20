import { ForwardedRef, forwardRef } from 'react';

function DiaryWriteFormContent(props: any, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className="w-full min-h-full outline-none"
      contentEditable
      onInput={(e) => {
        console.log(e);
      }}
    ></div>
  );
}

export default forwardRef(DiaryWriteFormContent);
