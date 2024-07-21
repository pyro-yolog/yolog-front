import { DIARY_SPINE_COLORS } from '@/lib/constants/colors';

interface Props {
  selectColor: string | null;
  onChangeColor: (color: string) => void;
}

function TripCreateSpinePalette({ selectColor, onChangeColor }: Props) {
  return (
    <div className="flex flex-col gap-4pxr w-full">
      <span className="text-[#9A9A9A] text-12pxr">책등 색상</span>

      <div className="grid grid-cols-4 gap-x-17pxr gap-y-10pxr w-full px-20pxr pt-14pxr pb-18pxr bg-[#F4F4F4] rounded-[20px]">
        {DIARY_SPINE_COLORS.map((color) => (
          <div
            key={color}
            className="h-30pxr rounded-[10px] cursor-pointer border-[2.5px] transition-colors duartion-50"
            style={{
              backgroundColor: color,
              borderColor:
                selectColor === color ? '#91D366' : 'rgba(0, 0, 0, 0)',
            }}
            onClick={() => onChangeColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default TripCreateSpinePalette;
