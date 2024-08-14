'use client';

import { AxiosError } from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { uploadImageAPI } from '@/apis/images';
import { createInquiryAPI } from '@/apis/inquiries';
import { Button, IconCamera, IconClose, Viewer } from '@/app/components';
import useToast from '@/hooks/useToast';
import useBoolean from '@/hooks/useBoolean';
import CreateInquiryModal from './create-inquiry-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateInquiry = ({ isOpen, onClose }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isOpenModal, , openModal, closeModal] = useBoolean();
  const showToast = useToast();

  const handleClickButton = async () => {
    try {
      await createInquiryAPI({ title, content, imageUrls });

      openModal();
    } catch (e) {
      console.error(e);

      showToast({
        type: 'error',
        message: '문의를 요청하는 도중에 오류가 발생했어요!',
      });
    }
  };

  const handleClickImageBox = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = async () => {
      const { files } = input;

      if (!files) return;
      if (files.length + imageUrls.length > 3) {
        showToast({
          type: 'error',
          message: '이미지는 최대 3개까지 첨부할 수 있습니다!',
        });
        return;
      }

      const formData = new FormData();
      Array.from(files).forEach((image) => formData.append('images', image));

      try {
        const { data } = await uploadImageAPI(formData);

        setImageUrls([...imageUrls, ...data.map((d) => d.imageUrl)]);
      } catch (e) {
        console.error(e);
        if (e instanceof AxiosError) {
          if (e.response?.status === 413) {
            showToast({
              type: 'error',
              message: '첨부된 이미지 파일이 너무 커요!',
            });
          }
        }
      }
    };

    input.click();
  };

  const handleClickRemoveImage = (imageUrl: string) => {
    setImageUrls(imageUrls.filter((url) => url !== imageUrl));
  };

  const handleCloseModal = () => {
    closeModal();
    onClose();
  };

  return (
    <>
      <Viewer isOpen={isOpen} onClose={onClose} title="문의하기">
        <div className="flex flex-col justify-between pt-25pxr pb-16pxr px-16pxr w-full min-h-full">
          <div className="flex flex-col">
            <div className="flex flex-col gap-17pxr">
              <span className="text-15pxr font-semibold">제목</span>

              <input
                type="text"
                placeholder="문의 제목을 작성해주세요."
                className="w-full h-48pxr py-13pxr px-16pxr bg-white rounded-[12px] shadow-inquiryInput text-13pxr leading-[22px] outline-none border border-white transition-colors focus:border-gray"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-17pxr mt-33pxr">
              <span className="text-15pxr font-semibold">내용</span>

              <div className="relative">
                <textarea
                  placeholder="최대한 자세히 적어주시면 빠르게 도와드릴게요."
                  className="w-full h-175pxr py-13pxr px-16pxr bg-white rounded-[12px] shadow-inquiryInput text-13pxr leading-[22px] outline-none border border-white transition-colors focus:border-gray resize-none scrollbar-hide"
                  maxLength={500}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <span className="absolute right-19pxr bottom-15pxr text-12pxr font-light text-[#9A9A9A]">
                  {content.length} / 500
                </span>
              </div>
            </div>

            <div className="flex gap-10pxr mt-27pxr">
              <div
                className="flex flex-col items-center justify-center gap-4pxr w-64pxr h-64pxr rounded-[10px] bg-[#D9D9D9] cursor-pointer"
                onClick={handleClickImageBox}
              >
                <IconCamera size={20} />

                <span className="text-13pxr text-[#7B7B7B]">
                  {imageUrls.length}/3
                </span>
              </div>

              {imageUrls.map((imageUrl, i) => (
                <div
                  key={imageUrl}
                  className="relative w-64pxr h-64pxr rounded-[10px] border-[2px] border-[#91D366]"
                >
                  <Image
                    src={imageUrl}
                    style={{
                      borderRadius: 10,
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    sizes="100%"
                    alt="inquiry-image"
                    fill
                    priority
                  />

                  <span
                    className="absolute right-0pxr top-0pxr -translate-y-1/2 translate-x-1/2 cursor-pointer"
                    onClick={() => handleClickRemoveImage(imageUrl)}
                  >
                    <IconClose />
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8pxr mt-46pxr text-13pxr text-[#7B7B7B] leading-[22px]">
              <span>안내</span>

              <ul className="list-disc px-20pxr">
                <li>답변을 드리기까지 최대 7일이 걸릴 수 있어요.</li>
                <li>욕설이나 비방, 장난식 문의는 답변을 드리지 않아요.</li>
                <li>
                  [문의하기] 버튼을 누를 시{' '}
                  <span className="underline">이용약관</span> 및{' '}
                  <span className="underline">개인정보 수집 및 이용</span>에
                  동의하게 됩니다.
                </li>
              </ul>
            </div>
          </div>

          <Button disabled={!title || !content} onClick={handleClickButton}>
            문의 완료
          </Button>
        </div>
      </Viewer>

      <CreateInquiryModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </>
  );
};

export default CreateInquiry;
