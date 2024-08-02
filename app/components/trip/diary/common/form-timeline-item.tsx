import { DiaryContentData } from '@/models/diary.model';
import React, { ChangeEventHandler, FocusEventHandler, useState } from 'react';

interface Props {
  editable: boolean;
  data: DiaryContentData | null;
}

function DiaryFormTimelineItem({ editable = false, data = null }: Props) {
  const [time, setTime] = useState((data as DiaryContentData)?.time || '');

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTime(e.target.value);
  };

  const handleBlurInput: FocusEventHandler<HTMLInputElement> = () => {
    if (!/^(\d{2})\:(\d{2})$/g.test(time)) {
      setTime('00:00');
    }
  };

  return (
    <div className="relative timeline-box">
      <div className="time-box absolute left-0pxr flex gap-5pxr">
        <div className="w-20pxr h-1pxr bg-[#BEBEBE]" />

        <input
          className="text-10pxr text-[#9A9A9A] -translate-y-1/2 w-45pxr outline-none"
          type="text"
          placeholder="시간 입력"
          maxLength={5}
          value={time}
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
          disabled={!editable}
        />
      </div>

      <div
        className="write-box w-full min-h-120pxr py-20pxr pl-20pxr outline-none write-box border-l-[2px] border-primary300/0 transition-colors focus:border-primary300"
        aria-placeholder={editable ? '내용을 입력하세요' : ''}
        contentEditable={editable}
        dangerouslySetInnerHTML={{ __html: data?.content || '' }}
      />
    </div>
  );
}

export default React.memo(DiaryFormTimelineItem);
