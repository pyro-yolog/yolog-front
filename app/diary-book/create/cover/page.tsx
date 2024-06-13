'use client';

import {
  Button,
  DiaryBookCreateCoverPalette,
  IconImage,
  IconPalette,
} from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

function DiaryBookCreateCover() {
  const defaultOptionStyles =
    'flex flex-col items-center justify-center gap-13pxr w-1/2 h-213pxr border border-primary400 rounded-[20px] transition-colors duration-100 cursor-pointer';
  const selectOptionStyles = 'bg-primary400/30';

  const router = useRouter();
  const params = useSearchParams();
  const [selectOption, setSelectOption] = useState<string>();
  const [color, setColor] = useState<string>();

  const options = [
    {
      id: 'COLOR',
      name: '컬러 이미지',
      icon: (
        <IconPalette
          size={30}
          color={selectOption === 'COLOR' ? '#3E5C16' : 'black'}
        />
      ),
    },
    {
      id: 'IMAGE',
      name: '사진 선택',
      icon: (
        <IconImage
          size={30}
          color={selectOption === 'IMAGE' ? '#3E5C16' : 'black'}
        />
      ),
    },
  ];

  if (
    !params.get('name') ||
    !params.get('startDate') ||
    !params.get('destination')
  ) {
    router.replace('/diary-book/create/setting');
    return;
  }

  const handleClickOption = (option: string) => {
    if (option === 'IMAGE') {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.click();

      return;
    }

    setSelectOption(option);
  };

  const handleClickButton = () => {
    const name = params.get('name');
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    const destination = params.get('destination');

    console.log({ name, startDate, endDate, destination, color });
  };

  return (
    <div className="flex flex-col justify-between w-full h-screen pt-32pxr px-16pxr bg-white">
      <div className="flex flex-col gap-19pxr">
        <h1 className={`${gowunBatang.className} text-20pxr`}>
          <p className="animate-fadeInRight">일기장 커버를 선택해주세요.</p>
        </h1>

        <div className="flex flex-col gap-12pxr items-end animate-fadeInRight">
          <div className="flex gap-16pxr w-full">
            {options.map((option) => (
              <div
                key={option.id}
                className={`${defaultOptionStyles} ${selectOption === option.id && selectOptionStyles}`}
                onClick={() => handleClickOption(option.id)}
              >
                {option.icon}

                <span
                  className={`text-${selectOption === option.id ? 'inputGreen' : 'black'} text-15pxr font-semibold transition-colors duration-100`}
                >
                  {option.name}
                </span>
              </div>
            ))}
          </div>

          <span className="text-13pxr text-gray">
            *일기장 설정탭에서 커버를 수정할 수 있어요.
          </span>
        </div>

        {selectOption === 'COLOR' && (
          <DiaryBookCreateCoverPalette
            selectColor={color}
            onChangeColor={setColor}
          />
        )}
      </div>

      <Button disabled={!color} onClick={handleClickButton}>
        다음
      </Button>
    </div>
  );
}

export default DiaryBookCreateCover;
