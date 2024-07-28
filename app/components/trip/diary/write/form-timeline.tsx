import { IconPlusCircle } from '@/app/components/icon';
import DiaryWriteFormTimelineItem from './form-timeline-items';
import { useState } from 'react';

function DiaryWriteFormTimeline() {
  const [count, setCount] = useState(3);

  return (
    <div className="relative flex flex-col border-l border-[#BEBEBE] mt-16pxr animate-fadeInRight">
      {new Array(count).fill(null).map((_, i) => (
        <DiaryWriteFormTimelineItem key={i} />
      ))}

      <span
        className="absolute left-0pxr top-[calc(100%+1px)] -translate-x-1/2 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        <IconPlusCircle />
      </span>
    </div>
  );
}

export default DiaryWriteFormTimeline;
