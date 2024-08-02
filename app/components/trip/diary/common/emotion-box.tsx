'use client';

import { useRecoilState } from 'recoil';
import { IconSmile } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';
import useOutsideClick from '@/hooks/useOutsideClick';
import { EMOTIONS } from '@/lib/constants/diary-additional';
import { diaryWriteState } from '@/lib/store/diary';
import { DiaryEmotionType } from '@/models/diary.model';
import DiaryWriteAdditionalBox from './additional-box';
import Image from 'next/image';

function DiaryEmotionBox({ editable = false }) {
  const [{ emotion }, setWriteData] = useRecoilState(diaryWriteState);
  const [isOpen, , , close, setIsOpen] = useBoolean();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const emotionImage = EMOTIONS.find((e) => e.type === emotion);

  const handleClick = () => {
    if (editable) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <span className="cursor-pointer" onClick={handleClick}>
        {editable || !emotionImage ? (
          <IconSmile size={25} color={emotion ? '#8BA47B' : '#B1B1B1'} />
        ) : (
          <Image
            src={emotionImage.image}
            width={27}
            height={27}
            style={{ width: 27, height: 27 }}
            alt="diary-additional"
            sizes="200%"
            priority
          />
        )}
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

export default DiaryEmotionBox;
