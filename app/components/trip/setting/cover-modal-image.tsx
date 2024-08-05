'use client';

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { uploadImageAPI } from '@/apis/images';
import { Button } from '@/app/components';
import { IconNavigateLeft, IconPlus } from '@/app/components/icon';
import useToast from '@/hooks/useToast';
import { DIARY_SPINE_COLORS } from '@/lib/constants/colors';
import { tripWriteState } from '@/lib/store/trip';
import Image from 'next/image';

interface Props {
  onClose: () => void;
}

function TripSettingCoverModalImage({ onClose }: Props) {
  const showToast = useToast();
  const [writeData, setWriteData] = useRecoilState(tripWriteState);
  const [imageUrl, setImageUrl] = useState('');
  const [spineColor, setSpineColor] = useState<string>();

  const handleClickImageBox = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = async () => {
      if (!input.files) return;

      const [image] = input.files;
      const formData = new FormData();
      formData.append('images', image);

      try {
        const [{ imageUrl }] = (await uploadImageAPI(formData)).data;

        setImageUrl(imageUrl);
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.response?.status === 413) {
            showToast({ type: 'error', message: '사진 용량이 너무 커요!' });
          }
        }
        console.error(e);
      }
    };

    input.click();
  };

  const handleClickButton = () => {
    if (!writeData) return;

    setWriteData({
      ...writeData,
      coverColor: undefined,
      coverImageUrl: imageUrl,
      spineColor: spineColor,
    });

    onClose();
  };

  useEffect(() => {
    setImageUrl('');
    setSpineColor(undefined);
  }, []);

  return (
    <div className="flex flex-col p-16pxr pb-20pxr gap-25pxr w-318pxr bg-white rounded-[24px]">
      <div className="relative flex items-center justify-center h-33pxr">
        <IconNavigateLeft
          className="absolute left-0pxr cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />

        <span className="text-17pxr text-black font-semibold">사진 선택</span>
      </div>

      <div className="flex flex-col gap-7pxr">
        <div className="flex flex-col gap-8pxr">
          <span className="px-18pxr text-12pxr text-[#9A9A9A]">커버 사진</span>

          <div
            className="relative flex flex-col items-center justify-center w-full h-94pxr bg-[#F4F4F4] rounded-[17px] cursor-pointer overflow-hidden"
            onClick={handleClickImageBox}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="100%"
                alt="trip-cover-image"
                fill
                priority
              />
            ) : (
              <IconPlus size={28} color="#E3E3E3" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8pxr">
          <span className="px-18pxr text-12pxr text-[#9A9A9A]">책등 색상</span>

          <div className="grid grid-cols-4 gap-x-17pxr gap-y-10pxr w-full px-20pxr pt-14pxr pb-18pxr bg-[#F4F4F4] rounded-[20px]">
            {DIARY_SPINE_COLORS.map((color) => (
              <div
                key={color}
                className="h-30pxr rounded-[10px] cursor-pointer border-[2.5px] transition-colors duartion-50"
                style={{
                  backgroundColor: color,
                  borderColor:
                    spineColor === color ? '#91D366' : 'rgba(0, 0, 0, 0)',
                }}
                onClick={() => setSpineColor(color)}
              />
            ))}
          </div>
        </div>
      </div>

      <Button
        size="small"
        disabled={!(imageUrl && spineColor)}
        onClick={handleClickButton}
      >
        확인
      </Button>
    </div>
  );
}

export default TripSettingCoverModalImage;
