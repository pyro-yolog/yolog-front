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
} from '@/app/components/icon';

export const MOOD_POPOVER = [
  {
    icon: <IconMoodColoredHappy />,
    text: '행복한',
    value: 'happy',
  },
  {
    icon: <IconMoodColoredNormal />,
    text: '평범한',
    value: 'normal',
  },
  {
    icon: <IconMoodColoredTired />,
    text: '피곤한',
    value: 'tired',
  },
  {
    icon: <IconMoodColoredUpset />,
    text: '속상한',
    value: 'upset',
  },
  {
    icon: <IconMoodColoredAngry />,
    text: '화나는',
    value: 'angry',
  },
];

export const WEATHER_POPOVER = [
  {
    icon: <IconWeatherColoredSunny />,
    text: '맑음',
    value: 'sunny',
  },
  {
    icon: <IconWeatherColoredCloudy />,
    text: '흐림',
    value: 'cloudy',
  },
  {
    icon: <IconWeatherColoredRainy />,
    text: '비',
    value: 'rainy',
  },
  {
    icon: <IconWeatherColoredSnowy />,
    text: '눈',
    value: 'snowy',
  },
  {
    icon: <IconWeatherColoredWindy />,
    text: '바람',
    value: 'windy',
  },
];

export const POPOVERS = {
  mood: 'mood',
  weather: 'weather',
};

export const MOOD = {
  happy: 'happy',
  normal: 'normal',
  tired: 'tired',
  upset: 'upset',
  angry: 'angry',
};

export const WEATHER = {
  sunny: 'sunny',
  cloudy: 'cloudy',
  rainy: 'rainy',
  snowy: 'snowy',
  windy: 'windy',
};
