'use client';

import { ChangeEventHandler, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { gowunBatang } from '@/app/components/ui/fonts';
import { IconAlignLeft, IconImage, IconTimeline } from '@/app/components/icon';
import { uploadImageAPI } from '@/apis/images';
import useToast from '@/hooks/useToast';
import { diaryWriteState } from '@/lib/store/diary';
import { isTimelineState } from '@/lib/store/ui';
import DiaryWriteFormContent from './form-content';
import DiaryWriteFormTimeline from './form-timeline';
import { AxiosError } from 'axios';

function DiaryWriteForm() {
  const showToast = useToast();
  const [{ title }, setWriteData] = useRecoilState(diaryWriteState);
  const [isTimeline, setIsTimeline] = useRecoilState(isTimelineState);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setWriteData((writeData) => {
      return {
        ...writeData,
        title: e.target.value,
      };
    });
  };

  const handleAppendImage = (el: HTMLDivElement) => {
    const selection = window.getSelection();
    let hasFocusEl = false;

    if (isTimeline) {
      const writeBoxList = document.querySelectorAll('.write-box');

      hasFocusEl = !!(
        selection?.focusNode &&
        Array.from(writeBoxList).some((el) => el.contains(selection.focusNode))
      );
    } else {
      const writeBox = document.getElementById('write-box') as HTMLDivElement;

      hasFocusEl = !!(
        selection?.focusNode && writeBox.contains(selection.focusNode)
      );
    }

    if (selection && hasFocusEl) {
      const range = selection.getRangeAt(0);

      range.insertNode(el);
      range.setStartAfter(el);
      range.setEndAfter(el);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      if (isTimeline) {
        const writeBoxList = document.querySelectorAll('.write-box');

        writeBoxList[0].insertAdjacentElement('afterbegin', el);
      } else {
        const writeBox = document.getElementById('write-box') as HTMLDivElement;

        writeBox.insertAdjacentElement('afterbegin', el);
      }
    }
  };

  const handleClickImageIcon = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = async () => {
      if (!input.files) return;

      if (input.files.length > 50) {
        showToast({
          type: 'error',
          message: '이미지는 한번에 최대 50장 첨부할 수 있어요!',
        });
        return;
      }

      const formData = new FormData();
      Array.from(input.files).forEach((image) =>
        formData.append('images', image),
      );

      const imgList = document.createElement('div');

      try {
        const { data: imageUrlList } = await uploadImageAPI(formData);

        imageUrlList.forEach(({ imageUrl }) => {
          const img = document.createElement('img');

          img.src = imageUrl;

          imgList.appendChild(img);
        });
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.status === 413) {
            showToast({
              type: 'error',
              message: '이미지 업로드 크기가 초과되었어요!',
            });
          }
        } else {
          showToast({
            type: 'error',
            message: '이미지를 업로드하는 도중 오류가 발생했어요!',
          });
        }

        console.error(e);
      }

      handleAppendImage(imgList);
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
            <DiaryWriteFormTimeline />
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
