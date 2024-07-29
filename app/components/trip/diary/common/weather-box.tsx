'use client';

import { useRecoilState } from 'recoil';
import { IconSun } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';
import useOutsideClick from '@/hooks/useOutsideClick';
import { WEATHERS } from '@/lib/constants/diary-additional';
import { diaryWriteState } from '@/lib/store/diary';
import { DiaryWeatherType } from '@/models/diary.model';
import DiaryWriteAdditionalBox from './additional-box';
import Image from 'next/image';

function DiaryWeatherBox({ editable = false }) {
  const [{ weather }, setWriteData] = useRecoilState(diaryWriteState);
  const [isOpen, , , close, setIsOpen] = useBoolean();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const weatherImage = WEATHERS.find((w) => w.type === weather);

  const handleClick = () => {
    if (editable) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <span className="cursor-pointer" onClick={handleClick}>
        {editable || !weatherImage ? (
          <IconSun size={25} color={weather ? '#8BA47B' : '#B1B1B1'} />
        ) : (
          <Image
            src={weatherImage.image}
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

export default DiaryWeatherBox;
