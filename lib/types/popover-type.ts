import { MoodType, WeatherType } from './journal-type';

export interface PopoverValue {
  mood: MoodType;
  weather: WeatherType;
}

export type WritePopoverType = 'mood' | 'weather' | string;
