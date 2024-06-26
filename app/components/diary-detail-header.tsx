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
  coverImageUrl = 'https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202209/14/newsade/20220914092507033xbze.jpg',
}: Props) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${coverImageUrl})`,
          backgroundColor: 'rgba(255,255,255,0.3)',
          backgroundBlendMode: 'color',
        }}
        className={`bg-[#EAF2E4] pt-65pxr bg-cover`}
      >
        <DiaryMenuBar />
        <div className="flex flex-col justify-center ml-32pxr mt-27pxr">
          <h1 className={`${gowunBatang.className} text-24pxr`}>{title}</h1>
          <h2 className={`${gowunBatang.className} text-15pxr mt-3pxr`}>
            {destination}
          </h2>
          <h3
            className={`${gowunBatang.className} text-12pxr mt-8pxr pb-13pxr`}
          >
            {startDate} - {finishDate}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DiaryDetailHeader;
