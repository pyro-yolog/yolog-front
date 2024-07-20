'use client';

import { useRecoilState } from 'recoil';
import { IconSmile } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';
import useOutsideClick from '@/hooks/useOutsideClick';
import { EMOTIONS } from '@/lib/constants/diary-additional';
import { diaryWriteState } from '@/lib/store/diary';
import { DiaryEmotionType } from '@/models/diary.model';
import DiaryWriteAdditionalBox from './additional-box';

function DiaryWriteEmotionBox() {
  const [{ emotion }, setWriteData] = useRecoilState(diaryWriteState);
  const [isOpen, , , close, setIsOpen] = useBoolean();
  const ref = useOutsideClick<HTMLDivElement>(close);

  return (
    <>
      <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <IconSmile size={25} color={emotion ? '#8BA47B' : '#B1B1B1'} />
      </span>

      <div ref={ref} className="absolute right-0pxr top-[calc(100%+12px)] z-30">
        {isOpen && (
          <DiaryWriteAdditionalBox
            title="감정"
            datas={EMOTIONS}
            selectData={emotion}
            onSelect={({ type }) => {
              setWriteData((writeData) => {
                return { ...writeData, emotion: type as DiaryEmotionType };
              });
            }}
          />
        )}
      </div>
    </>
  );
}

export default DiaryWriteEmotionBox;
