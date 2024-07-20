import { DiaryEmotion, DiaryWeather } from '@/models/diary.model';

export const EMOTIONS: DiaryEmotion[] = [
  {
    type: 'HAPPY',
    image: '/images/emotion-happy.png',
    text: '행복한',
  },
  {
    type: 'COMMON',
    image: '/images/emotion-common.png',
    text: '평범한',
  },
  {
    type: 'TIRED',
    image: '/images/emotion-tired.png',
    text: '피곤한',
  },
  {
    type: 'SAD',
    image: '/images/emotion-sad.png',
    text: '속상한',
  },
  {
    type: 'ANGRY',
    image: '/images/emotion-angry.png',
    text: '화나는',
  },
];

export const WEATHERS: DiaryWeather[] = [
  {
    type: 'SUNNY',
    image: '/images/weather-sunny.png',
    text: '맑음',
  },
  {
    type: 'CLOUDY',
    image: '/images/weather-cloudy.png',
    text: '흐림',
  },
  {
    type: 'RAINY',
    image: '/images/weather-rainy.png',
    text: '비',
  },
  {
    type: 'SNOWY',
    image: '/images/weather-snowy.png',
    text: '눈',
  },
  {
    type: 'WINDY',
    image: '/images/weather-windy.png',
    text: '바람',
  },
];
