'use client';

import { ChangeEventHandler, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { gowunBatang } from '@/app/components/ui/fonts';
import { IconAlignLeft, IconImage, IconTimeline } from '@/app/components/icon';
import { uploadImageAPI } from '@/apis/images';
import useToast from '@/hooks/useToast';
import { diaryWriteState } from '@/lib/store/diary';
import DiaryWriteFormContent from './form-content';

function DiaryWriteForm() {
  const showToast = useToast();
  const [{ title }, setWriteData] = useRecoilState(diaryWriteState);
  const [isTimeline, setIsTimeline] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setWriteData((writeData) => {
      return {
        ...writeData,
        title: e.target.value,
      };
    });
  };

  const handleClickImageIcon = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = async () => {
      const [image] = input.files as FileList;
      const formData = new FormData();
      formData.append('image', image);

      const imgList = document.createElement('div');

      try {
        const img = document.createElement('img');

        // const imageUrl =
        //   'https://s3.ap-northeast-2.amazonaws.com/yolog-aws-bucket/image/54e31772-eimages.png';
        const { imageUrl } = (await uploadImageAPI(formData)).data;
        img.src = imageUrl;

        imgList.appendChild(img);
      } catch (e) {
        showToast({
          type: 'error',
          message: '이미지를 업로드하는 도중 오류가 발생했어요!',
        });
        console.error(e);
      }

      const writeBox = document.getElementById('write-box') as HTMLDivElement;
      const selection = window.getSelection();

      if (selection?.focusNode && writeBox.contains(selection.focusNode)) {
        const range = selection.getRangeAt(0);

        range.insertNode(imgList);
        range.setStartAfter(imgList);
        range.setEndAfter(imgList);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        writeBox.insertAdjacentElement('afterbegin', imgList);
      }
    };

    input.click();
  };

  const handleClickTimelineIcon = () => {
    setIsTimeline(!isTimeline);
  };

  return (
    <div className="flex flex-col w-full h-[calc(100%-100px)] pt-7pxr">
      <div className="flex flex-col gap-20pxr w-full h-[calc(100%-73px)] px-21pxr pb-20pxr">
        <div className="w-full px-7pxr py-6pxr border-b border-[#E3E3E3]">
          <input
            className={`${gowunBatang.className} w-full text-24pxr text-black font-bold outline-none placeholder:text-[#B1B1B1]`}
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>

        <div
          className={`${gowunBatang.className} relative w-full h-[calc(100%-70px)] px-7pxr overflow-y-auto scrollbar-hide`}
        >
          {isTimeline ? (
            <>Timeline</>
          ) : (
            <DiaryWriteFormContent ref={contentRef} />
          )}
        </div>
      </div>

      <div className="flex items-center w-full gap-26pxr bg-[#EAF2E4] px-18pxr pt-16pxr pb-35pxr">
        <div
          className="cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClickImageIcon}
        >
          <IconImage size={22} />
        </div>

        <span className="cursor-pointer" onClick={handleClickTimelineIcon}>
          {isTimeline ? (
            <IconAlignLeft size={22} />
          ) : (
            <IconTimeline size={22} />
          )}
        </span>
      </div>
    </div>
  );
}

export default DiaryWriteForm;
