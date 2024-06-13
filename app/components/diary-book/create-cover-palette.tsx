interface Props {
  selectColor?: string;
  onChangeColor: (color: string) => void;
}

function DiaryBookCreateCoverPalette({ selectColor, onChangeColor }: Props) {
  const COLORS = [
    '#FFFFB5',
    '#D2F5F5',
    '#C6DCE9',
    '#9DAAA2',
    '#C6EFDC',
    '#FED5CF',
    '#FFD1DB',
    '#BBA498',
    '#F2E3C7',
    '#C4D4B1',
    '#B2BDA8',
    '#A49D92',
    '#C6DBDA',
    '#F1B598',
    '#D3C7E6',
    '#ECD5E3',
  ];

  return (
    <div className="grid grid-cols-4 gap-x-17pxr gap-y-15pxr w-full p-20pxr bg-[#F4F4F4] rounded-[20px]">
      {COLORS.map((color) => (
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

export default DiaryBookCreateCoverPalette;
