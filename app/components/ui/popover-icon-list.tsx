import { gowunBatang } from './fonts';
import { MoodType, WeatherType } from '@/app/lib/types/journal-type';
import {
  MOOD_POPOVER,
  POPOVERS,
  WEATHER_POPOVER,
} from '@/app/lib/constants/popover-write';
import { PopoverValue, WritePopoverType } from '@/app/lib/types/popover-type';

interface Props {
  onClick: (value: PopoverValue, type: WritePopoverType) => void;
  type: WritePopoverType;
}

function PopoverIconList({ type, onClick }: Props) {
  const getPopoverItems = () => {
    switch (type) {
      case POPOVERS.mood:
        return MOOD_POPOVER;
      case POPOVERS.weather:
        return WEATHER_POPOVER;
    }
  };

  return (
    <div className="flex gap-18pxr items-center px-3pxr">
      {getPopoverItems()?.map((item) => (
        <button
          key={item.text}
          className="flex flex-col gap-10pxr items-center"
          onClick={() =>
            onClick(
              {
                mood: item.value as MoodType,
                weather: item.value as WeatherType,
              },
              type,
            )
          }
        >
          {item.icon}
          <p
            className={`${gowunBatang.className} text-[#595959] text-11pxr font-bold`}
          >
            {item.text}
          </p>
        </button>
      ))}
    </div>
  );
}

export default PopoverIconList;
