import { gowunBatang } from './ui/fonts';
import {
  IconMoodColoredAngry,
  IconMoodColoredHappy,
  IconMoodColoredNormal,
  IconMoodColoredTired,
  IconMoodColoredUpset,
  IconWeatherColoredCloudy,
  IconWeatherColoredRainy,
  IconWeatherColoredSnowy,
  IconWeatherColoredSunny,
  IconWeatherColoredWindy,
} from './icon';
import { MoodType, WeatherType } from '@/lib/types/journal-type';

interface Props {
  title?: string;
  mood?: MoodType;
  weather?: WeatherType;
}

function JournalUpperContent({
  title = 'Day 1',
  mood = 'normal',
  weather = 'rainy',
}: Props) {
  const setMoodIcon = () => {
    switch (mood) {
      case 'happy':
        return <IconMoodColoredHappy />;
      case 'angry':
        return <IconMoodColoredAngry />;
      case 'normal':
        return <IconMoodColoredNormal />;
      case 'tired':
        return <IconMoodColoredTired />;
      case 'upset':
        return <IconMoodColoredUpset />;
    }
  };

  const setWeatherIcon = () => {
    switch (weather) {
      case 'cloudy':
        return <IconWeatherColoredCloudy />;
      case 'rainy':
        return <IconWeatherColoredRainy />;
      case 'snowy':
        return <IconWeatherColoredSnowy />;
      case 'sunny':
        return <IconWeatherColoredSunny />;
      case 'windy':
        return <IconWeatherColoredWindy />;
    }
  };

  return (
    <div className="flex flex-col mx-28pxr gap-13pxr">
      <div className="flex justify-between items-center">
        <p className={`${gowunBatang.className} text-24pxr`}>{title}</p>
        <div className="flex items-center gap-11pxr">
          {setMoodIcon()}
          {setWeatherIcon()}
        </div>
      </div>
      <h1 className={`${gowunBatang.className} text-24pxr font-bold`}>
        마지막 힐링
      </h1>
    </div>
  );
}

export default JournalUpperContent;
