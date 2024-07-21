'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createTripAPI } from '@/apis/trips';
import {
  Button,
  IconImage,
  IconNavigateLeft,
  IconPalette,
} from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';
import useToast from '@/hooks/useToast';
import { TripRequest } from '@/models/trip.model';
import TripCreateCoverPalette from './cover-palette';
import TripCreateSpinePalette from './spine-palette';
import TripCreateCoverImage from './cover-image';

function TripCreateCover() {
  const defaultOptionStyles =
    'flex flex-col items-center justify-center gap-13pxr w-1/2 h-213pxr border border-primary400 rounded-[20px] transition-colors duration-100 cursor-pointer';
  const selectOptionStyles = 'bg-primary400/30';

  const showToast = useToast();
  const router = useRouter();
  const params = useSearchParams();
  const [selectOption, setSelectOption] = useState<string>();
  const [coverColor, setCoverColor] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [spineColor, setSpineColor] = useState<string | null>(null);
  const isEnabled =
    (selectOption === 'COLOR' && coverColor) ||
    (selectOption === 'IMAGE' && imageUrl && spineColor);

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
    setSelectOption(option);
  };

  const handleClickButton = async () => {
    const name = params.get('name') as string;
    const startDate = params.get('startDate') as string;
    const finishDate = params.get('endDate') || startDate;
    const destination = params.get('destination') as string;

    const data: TripRequest = {
      name,
      startDate,
      finishDate,
      destination,
    };

    if (selectOption === 'COLOR') {
      data.coverColor = coverColor as string;
    } else if (selectOption === 'IMAGE') {
      data.coverImageUrl = imageUrl as string;
      data.spineColor = spineColor as string;
    }

    try {
      await createTripAPI(data);

      router.push('/trip');
    } catch (e) {
      console.error(e);

      showToast({ type: 'error', message: '서버 요청에 문제가 발생했어요!' });
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full pt-32pxr pb-13pxr">
      <div className="flex flex-col gap-30pxr w-full h-[calc(100%-68px)]">
        <Link href="/trip/create/setting" className="px-8pxr">
          <IconNavigateLeft />
        </Link>

        <div className="flex flex-col gap-19pxr px-16pxr h-[calc(100%-63px)]">
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

          <div className="flex flex-col w-full h-[calc(100%-315px)]">
            {/* 컬러 이미지 */}
            {selectOption === 'COLOR' && (
              <TripCreateCoverPalette
                selectColor={coverColor}
                onChangeColor={setCoverColor}
              />
            )}

            {/* 사진 선택 */}
            {selectOption === 'IMAGE' && (
              <div className="flex flex-col gap-10pxr w-full h-full overflow-y-auto scrollbar-hide">
                <TripCreateCoverImage
                  imageUrl={imageUrl}
                  onUploadImage={setImageUrl}
                />

                <TripCreateSpinePalette
                  selectColor={spineColor}
                  onChangeColor={setSpineColor}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full px-16pxr">
        <Button disabled={!isEnabled} onClick={handleClickButton}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default TripCreateCover;
