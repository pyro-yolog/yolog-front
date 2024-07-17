'use client';

import {
  Button,
  IconImage,
  IconNavigateLeft,
  IconPalette,
} from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import TripCreateCoverPalette from './cover-palette';
import Link from 'next/link';
import { createTripAPI } from '@/apis/trips';
import { uploadImageAPI } from '@/apis/images';
import { AxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { TripRequest } from '@/models/trip.model';

function TripCreateCover() {
  const defaultOptionStyles =
    'flex flex-col items-center justify-center gap-13pxr w-1/2 h-213pxr border border-primary400 rounded-[20px] transition-colors duration-100 cursor-pointer';
  const selectOptionStyles = 'bg-primary400/30';

  const showToast = useToast();
  const router = useRouter();
  const params = useSearchParams();
  const [selectOption, setSelectOption] = useState<string>();
  const [color, setColor] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

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

      input.addEventListener('change', () => handleChangeInput(input));

      return;
    }

    setSelectOption(option);
  };

  const handleChangeInput = async (input: HTMLInputElement) => {
    if (!input.files) return;

    const [image] = input.files;
    const formData = new FormData();
    formData.append('image', image);

    try {
      const { imageUrl } = (await uploadImageAPI(formData)).data;

      handleClickButton(null, imageUrl);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 413) {
          showToast({ type: 'error', message: '사진 용량이 너무 커요!' });
        }
      }
      console.error(e);
    }
  };

  const handleClickButton = async (_?: any, imageUrl?: string) => {
    const name = params.get('name') as string;
    const startDate = params.get('startDate') as string;
    const finishDate = params.get('endDate') || startDate;
    const destination = params.get('destination') as string;

    const data: TripRequest = { name, startDate, finishDate, destination };

    if (imageUrl) {
      data.coverImageUrl = imageUrl;
    } else {
      data.colorCover = color;
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
      <div className="flex flex-col gap-30pxr">
        <Link href="/trip/create/setting" className="px-8pxr">
          <IconNavigateLeft />
        </Link>

        <div className="flex flex-col gap-19pxr px-16pxr">
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
            <TripCreateCoverPalette
              selectColor={color}
              onChangeColor={setColor}
            />
          )}
        </div>
      </div>

      <div className="w-full px-16pxr">
        <Button
          disabled={!color && !isLoading}
          onClick={() => handleClickButton()}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default TripCreateCover;
