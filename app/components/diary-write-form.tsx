'use client';

import useBottomSheet from '@/hooks/use-bottom-sheet';
import usePopover from '@/hooks/use-popover';
import React, { useState } from 'react';
import { MOOD, POPOVERS, WEATHER } from '../lib/constants/popover-write';
import {
  IconCamera,
  IconGallery,
  IconMoodColoredAngry,
  IconMoodColoredHappy,
  IconMoodColoredNormal,
  IconMoodColoredTired,
  IconMoodColoredUpset,
  IconMoodNormal,
  IconNavigateLeft,
  IconTimeline,
  IconWeatherColoredCloudy,
  IconWeatherColoredRainy,
  IconWeatherColoredSnowy,
  IconWeatherColoredSunny,
  IconWeatherColoredWindy,
  IconWeatherSunny,
} from './icon';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import BottomSheetDiary from './bottom-sheet-diary';
import BottomSheetCancel from './ui/bottom-sheet-cancel';
import { gowunBatang } from './ui/fonts';
import IconCheck from './ui/icon-check';
import DiaryWritePopover from './diary-write-popover';
import DraftEditor from './draft-editor';

function DiaryWriteForm() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageFiles = Array.from(files);
      const imagePreviews = imageFiles.map((file) => URL.createObjectURL(file));
      setSelectedImages(imagePreviews);
    }
  };

  const {
    popoverRef,
    popoverType,
    popoverValues,
    isPopoverOpen,
    setIsPopoverOpen,
    setPopoverType,
    handleClickPopoverValue,
    handleOutsideClick,
  } = usePopover();

  const {
    isSheetOpen,
    setIsSheetOpen,
    handleOutsideClick: handleSheetOutsideClick,
    bottomSheetRef,
  } = useBottomSheet();

  const handleClickMoodPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
    setPopoverType(POPOVERS.mood);
  };

  const handleClickWeatherPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
    setPopoverType(POPOVERS.weather);
  };

  const getMoodIcon = () => {
    switch (popoverValues.mood) {
      case MOOD.happy:
        return <IconMoodColoredHappy />;
      case MOOD.normal:
        return <IconMoodColoredNormal />;
      case MOOD.tired:
        return <IconMoodColoredTired />;
      case MOOD.upset:
        return <IconMoodColoredUpset />;
      case MOOD.angry:
        return <IconMoodColoredAngry />;
      default:
        return (
          <IconMoodNormal
            color={`${popoverType === POPOVERS.mood && isPopoverOpen ? '#8BA47B' : '#B1B1B1'}`}
          />
        );
    }
  };

  const getWeatherIcon = () => {
    switch (popoverValues.weather) {
      case WEATHER.sunny:
        return <IconWeatherColoredSunny />;
      case WEATHER.cloudy:
        return <IconWeatherColoredCloudy />;
      case WEATHER.rainy:
        return <IconWeatherColoredRainy />;
      case WEATHER.snowy:
        return <IconWeatherColoredSnowy />;
      case WEATHER.windy:
        return <IconWeatherColoredWindy />;
      default:
        return (
          <IconWeatherSunny
            color={`${popoverType === POPOVERS.weather && isPopoverOpen ? '#8BA47B' : '#B1B1B1'}`}
          />
        );
    }
  };

  const { watch, register } = useForm();
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const handleClickCancelBtn = () => {
    if (watch('diaryContentInput')) {
      setIsSheetOpen(true);
    } else {
      router.push(`/diary/${id}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="h-full" onSubmit={handleSubmit}>
      <header className="flex justify-between items-center mb-20pxr pt-71pxr">
        <button onClick={handleClickCancelBtn}>
          <IconNavigateLeft />
        </button>
        <BottomSheetDiary
          title="작성을 취소하시겠습니까?"
          description="작성 취소 선택 시, 작성 중인 글은 저장되지 않습니다."
          bottomSheetRef={bottomSheetRef}
          onOutsideClick={handleSheetOutsideClick}
          isOpen={isSheetOpen}
        >
          <BottomSheetCancel onClose={() => setIsSheetOpen(false)} id={id} />
        </BottomSheetDiary>
        <p
          className={`${gowunBatang.className} text-[#697a53] text-18pxr font-bold`}
        >
          2024년 3월 10일
        </p>
        <button>
          <IconCheck />
        </button>
      </header>
      <div
        className="mx-28pxr h-full "
        ref={popoverRef}
        onClick={handleOutsideClick}
      >
        <div className="flex items-center justify-between">
          <p className={`${gowunBatang.className} text-24pxr`}>Day 1</p>
          <div className="flex items-center gap-10pxr">
            <button onClick={handleClickMoodPopover}>{getMoodIcon()}</button>
            {isPopoverOpen && (
              <DiaryWritePopover
                type={popoverType}
                className="absolute right-20pxr top-162pxr"
                onClick={handleClickPopoverValue}
              />
            )}
            <button onClick={handleClickWeatherPopover}>
              {getWeatherIcon()}
            </button>
          </div>
        </div>
        <label htmlFor="diaryTitleInput">
          <input
            id="diaryTitleInput"
            className={`h-42pxr indent-4pxr mt-13pxr w-full text-24pxr focus:outline-none border-b border-[#e3e3e3] ${gowunBatang.className} placeholder:text-24pxr placeholder:font-bold placeholder:font-[#b1b1b1] placeholder:${gowunBatang.className}`}
            placeholder="제목"
            {...register('diaryTitleInput')}
          />
        </label>
        <DraftEditor />
      </div>
      <div className="py-10pxr px-18pxr flex items-center w-full h-52pxr bg-[#eaf2e4] sticky bottom-0pxr">
        <div className="flex gap-26pxr">
          <label htmlFor="galleryInput" className="cursor-pointer">
            <IconGallery />
          </label>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="galleryInput"
            multiple
            onChange={handleChangeImage}
          />
          <button>
            <IconCamera size={26} stroke="black" />
          </button>
          <button>
            <IconTimeline />
          </button>
        </div>
      </div>
    </form>
  );
}

export default DiaryWriteForm;
