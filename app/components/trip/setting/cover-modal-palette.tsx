import { IconNavigateLeft } from '@/app/components/icon';
import { DIARY_COVER_COLORS } from '@/lib/constants/colors';

interface Props {
  onClose: () => void;
}

function TripSettingCoverModalPalette({ onClose }: Props) {
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

        <span className="text-17pxr text-black font-semibold">컬러 이미지</span>
      </div>

      <div className="grid grid-cols-4 gap-x-15pxr gap-y-13pxr py-17pxr px-15pxr w-full bg-[#F4F4F4] rounded-[17px]">
        {DIARY_COVER_COLORS.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="h-38pxr rounded-[8px] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default TripSettingCoverModalPalette;
