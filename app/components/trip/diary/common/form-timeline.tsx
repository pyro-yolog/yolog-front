'use client';

import { useState } from 'react';
import { IconPlusCircle } from '@/app/components/icon';
import DiaryFormTimelineItem from './form-timeline-item';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { dumpDiaryDetailData } from '@/lib/utils/dump';
import { getDiaryAPI } from '@/apis/diaries';
import { DiaryContentData } from '@/models/diary.model';

function DiaryFormTimeline({ editable = false }) {
  const { diaryId } = useParams();
  const { data } = useSuspenseQuery({
    queryKey: ['diary', diaryId],
    queryFn: () => {
      if (editable) {
        return dumpDiaryDetailData;
      }
      return getDiaryAPI(diaryId as string);
    },
  });
  const { data: timelineList }: { data: DiaryContentData[] } = JSON.parse(
    data.content,
  );

  const [count, setCount] = useState(editable ? 3 : timelineList.length);

  return (
    <div className="relative flex flex-col border-l border-[#BEBEBE] mt-16pxr animate-fadeInRight">
      {new Array(count).fill(null).map((_, i) => (
        <DiaryFormTimelineItem
          key={i}
          editable={editable}
          data={editable ? null : timelineList[i]}
        />
      ))}

      {editable && (
        <span
          className="absolute left-0pxr top-[calc(100%+1px)] -translate-x-1/2 cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          <IconPlusCircle />
        </span>
      )}
    </div>
  );
}

export default DiaryFormTimeline;
