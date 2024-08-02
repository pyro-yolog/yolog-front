'use client';

import { getDiaryAPI } from '@/apis/diaries';
import useToast from '@/hooks/useToast';
import { dumpDiaryDetailData } from '@/lib/utils/dump';
import { DiaryContentData } from '@/models/diary.model';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React, { ClipboardEventHandler } from 'react';

function DiaryFormContent({ editable = false }) {
  const { diaryId } = useParams();
  const { data } = useSuspenseQuery({
    queryKey: ['diary', diaryId],
    queryFn: () => {
      if (!diaryId) {
        return dumpDiaryDetailData;
      }
      return getDiaryAPI(diaryId as string);
    },
  });
  const {
    data: { content },
  }: { data: DiaryContentData } = JSON.parse(data.content);

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
      id="write-box"
      className="w-full min-h-full outline-none animate-fadeInRight"
      aria-placeholder={editable ? '내용을 입력하세요' : ''}
      contentEditable={editable}
      onPaste={handlePaste}
      dangerouslySetInnerHTML={{ __html: content || '' }}
    />
  );
}

export default React.memo(DiaryFormContent);
