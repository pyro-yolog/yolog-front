import { DiaryEmotion, DiaryWeather } from '@/models/diary.model';

export const EMOTIONS: DiaryEmotion[] = [
  {
    type: 'HAPPY',
    image: '/images/emotion-happy.png',
    text: '행복한',
  },
  {
    type: 'NORMAL',
    image: '/images/emotion-normal.png',
    text: '평범한',
  },
  {
    type: 'TIRED',
    image: '/images/emotion-tired.png',
    text: '피곤한',
  },
  {
    type: 'UPSET',
    image: '/images/emotion-upset.png',
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
    type: 'RAIN',
    image: '/images/weather-rain.png',
    text: '비',
  },
  {
    type: 'SNOW',
    image: '/images/weather-snow.png',
    text: '눈',
  },
  {
    type: 'WINDS',
    image: '/images/weather-winds.png',
    text: '바람',
  },
];
