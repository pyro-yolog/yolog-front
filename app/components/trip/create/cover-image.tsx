'use client';

import { AxiosError } from 'axios';
import { uploadImageAPI } from '@/apis/images';
import useToast from '@/hooks/useToast';
import Image from 'next/image';
import { IconPlus } from '../../icon';

interface Props {
  imageUrl: string | null;
  onUploadImage: (imageUrl: string) => void;
}

function TripCreateCoverImage({ imageUrl, onUploadImage }: Props) {
  const showToast = useToast();

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();

    input.addEventListener('change', () => handleChangeInput(input));
  };

  const handleChangeInput = async (input: HTMLInputElement) => {
    if (!input.files) return;

    const [image] = input.files;
    const formData = new FormData();
    formData.append('image', image);

    try {
      const { imageUrl } = (await uploadImageAPI(formData)).data;

      onUploadImage(imageUrl);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 413) {
          showToast({ type: 'error', message: '사진 용량이 너무 커요!' });
        }
      }
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col gap-4pxr w-full">
      <span className="text-[#9A9A9A] text-12pxr">커버 사진</span>

      <div
        className="relative flex items-center justify-center w-full min-h-[30vw] bg-[#F4F4F4] rounded-[20px] cursor-pointer overflow-hidden"
        onClick={handleClick}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100%"
            alt="diary-cover-image"
            fill
            priority
          />
        ) : (
          <IconPlus size={28} color="#E3E3E3" />
        )}
      </div>
    </div>
  );
}

export default TripCreateCoverImage;
