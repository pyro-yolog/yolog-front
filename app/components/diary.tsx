import Image from 'next/image';
import { IconMoodNormal, IconWeatherSunny } from './icon';
import { gowunBatang } from './ui/fonts';

interface Props {
  title?: string;
  date?: string;
  diaryImageURL?: string[];
  diaryScript?: string;
}

function Diary({
  title = 'Day 1',
  date = '2024년 06월 09일',
  diaryImageURL = [
    'https://t2.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2fG8/image/Pd36VU2WcEcEjGBDPuKtJh0yoqM.jpg',
    'https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVBJUIzJUE4JUVCJTkzJUEwJTIwJUVCJUE2JUFDJUVEJThBJUI4JUVCJUE2JUFDJUVCJUIyJTg0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVBJUIzJUE4JUVCJTkzJUEwJTIwJUVCJUE2JUFDJUVEJThBJUI4JUVCJUE2JUFDJUVCJUIyJTg0fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVBJUIzJUE4JUVCJTkzJUEwJTIwJUVCJUE2JUFDJUVEJThBJUI4JUVCJUE2JUFDJUVCJUIyJTg0fGVufDB8fDB8fHww',
  ],
  diaryScript = '오늘은 내 인생에서 가장 기억에 남을 여행 중 하나가 시작된 날이다.하와이로의 여행. 하와이에 도착한 순간,특유의 꽃향기가 나를 반겼다.공항을 나서자 마자 보이는 푸른하늘과 기분 좋은 산들 바람은 내가진짜로 여행을 왔구나 실감나게 해주었다.',
}: Props) {
  const clacAdditionalImages = () => {
    const additionalImages = diaryImageURL?.length - 2;
    if (additionalImages > 0) {
      return additionalImages;
    } else {
      return null;
    }
  };

  return (
    <div className="px-16pxr pt-11pxr pb-17pxr border border-[#e3e3e3] min-w-335pxr min-h-295pxr rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className={`${gowunBatang.className} text-24pxr font-bold`}>
            {title}
          </h1>
          <p className={`${gowunBatang.className} text-12pxr text-[#696969]`}>
            {date}
          </p>
        </div>
        <div className="flex gap-8pxr items-center">
          <IconMoodNormal />
          <IconWeatherSunny />
        </div>
      </div>
      <hr className="mt-13pxr mb-10pxr text-[#e3e3e3]" />
      <div className="flex flex-col gap-15pxr">
        <div className="flex w-full items-center justify-center">
          <div className="w-full relative h-106pxr">
            <Image
              className="rounded-tl-md rounded-bl-md"
              alt="다이어리 이미지"
              src={diaryImageURL[0]}
              fill
              priority
            />
          </div>
          <div className="w-full relative h-106pxr">
            <div className="absolute inset-0 bg-black opacity-50 rounded-tr-md rounded-br-md z-40 w-full h-full" />
            <p className="text-24pxr text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              + {clacAdditionalImages()}
            </p>
            <Image
              className="rounded-tr-md rounded-br-md"
              alt="다이어리 이미지"
              src={diaryImageURL[1]}
              fill
              priority
            />
          </div>
        </div>
        <div>
          <p
            className={`${gowunBatang.className} text-12pxr leading-[22px] h-71pxr w-297pxr text-overflow`}
          >
            {diaryScript}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Diary;
