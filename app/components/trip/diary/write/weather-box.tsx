'use client';

import { useRecoilState } from 'recoil';
import { IconSun } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';
import useOutsideClick from '@/hooks/useOutsideClick';
import { WEATHERS } from '@/lib/constants/diary-additional';
import { diaryWriteState } from '@/lib/store/diary';
import { DiaryWeatherType } from '@/models/diary.model';
import DiaryWriteAdditionalBox from './additional-box';

function DiaryWriteWeatherBox() {
  const [{ weather }, setWriteData] = useRecoilState(diaryWriteState);
  const [isOpen, , , close, setIsOpen] = useBoolean();
  const ref = useOutsideClick<HTMLDivElement>(close);

  return (
    <>
      <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <IconSun size={25} color={weather ? '#8BA47B' : '#B1B1B1'} />
      </span>

      <div ref={ref} className="absolute right-0pxr top-[calc(100%+12px)] z-30">
        {isOpen && (
          <DiaryWriteAdditionalBox
            title="날씨"
            datas={WEATHERS}
            selectData={weather}
            onSelect={({ type }) => {
              setWriteData((writeData) => {
                return { ...writeData, weather: type as DiaryWeatherType };
              });
            }}
          />
        )}
      </div>
    </>
  );
}

export default DiaryWriteWeatherBox;
