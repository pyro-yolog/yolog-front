import { MouseEvent } from 'react';
import { IconImage, IconPalette } from '../../icon';

interface Props {
  onSelect: (option: string) => void;
}

function DiarySettingCoverModalOption({ onSelect }: Props) {
  const handleClickOption = (e: MouseEvent, option: string) => {
    e.stopPropagation();

    onSelect(option);
  };

  return (
    <div className="flex flex-col items-center py-22pxr px-20pxr gap-25pxr w-318pxr bg-white rounded-[20px]">
      <span className="text-black text-17pxr font-semibold">커버 변경</span>

      <div className="flex gap-12pxr w-full h-165pxr">
        <div
          className="group flex flex-col items-center justify-center gap-10pxr w-1/2 bg-white hover:bg-[#E0ECD9] border border-primary400 rounded-[16px] cursor-pointer transition-colors duration-100"
          onClick={(e) => handleClickOption(e, 'COLOR')}
        >
          <IconPalette className="group-hover:stroke-inputGreen" size={24} />

          <span className="text-12pxr text-black font-semibold group-hover:text-inputGreen">
            컬러 이미지
          </span>
        </div>

        <div
          className="group flex flex-col items-center justify-center gap-10pxr w-1/2 bg-white hover:bg-[#E0ECD9] border  border-primary400 rounded-[16px] cursor-pointer transition-colors duration-100"
          onClick={(e) => handleClickOption(e, 'IMAGE')}
        >
          <IconImage className="group-hover:stroke-inputGreen" size={24} />

          <span className="text-12pxr text-black font-semibold group-hover:text-inputGreen">
            사진 선택
          </span>
        </div>
      </div>
    </div>
  );
}

export default DiarySettingCoverModalOption;
