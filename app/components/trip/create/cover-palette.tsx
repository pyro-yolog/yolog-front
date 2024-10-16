import { DIARY_COVER_COLORS } from '@/lib/constants/colors';

interface Props {
  selectColor: string | null;
  onChangeColor: (color: string) => void;
}

function TripCreateCoverPalette({ selectColor, onChangeColor }: Props) {
  return (
    <div className="grid grid-cols-4 gap-x-17pxr gap-y-15pxr w-full p-20pxr bg-[#F4F4F4] rounded-[20px] overflow-y-auto scrollbar-hide">
      {DIARY_COVER_COLORS.map((color) => (
        <div
          key={color}
          className="h-45pxr rounded-[10px] cursor-pointer border-[2.5px] transition-colors duartion-50"
          style={{
            backgroundColor: color,
            borderColor: selectColor === color ? '#91D366' : 'rgba(0, 0, 0, 0)',
          }}
          onClick={() => onChangeColor(color)}
        />
      ))}
    </div>
  );
}

export default TripCreateCoverPalette;
