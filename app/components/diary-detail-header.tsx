import DiaryMenuBar from './diary-menu-bar';
import { gowunBatang } from './ui/fonts';

interface Props {
  title?: string;
  destination?: string;
  startDate?: string;
  finishDate?: string;
  coverImageUrl?: string;
}

function DiaryDetailHeader({
  title = '마지막 힐링',
  destination = 'HAWAII',
  startDate = '2024.03.21',
  finishDate = '2024.03.26',
  coverImageUrl = 'https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202209/14/newsade/20220914092507033xbze.jpg',
}: Props) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `rgba(255, 255, 255, 0.5)), url(${coverImageUrl})`,
        }}
        className={`bg-[#EAF2E4] pt-73pxr rounded-es-[46%] rounded-ee-[46%] bg-cover`}
      >
        <DiaryMenuBar />
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${gowunBatang.className} text-25pxr`}>{title}</h1>
          <h2 className={`${gowunBatang.className} text-17pxr mt-3pxr`}>
            {destination}
          </h2>
          <h3
            className={`${gowunBatang.className} text-14pxr mt-8pxr pb-31pxr`}
          >
            {startDate} - {finishDate}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DiaryDetailHeader;
