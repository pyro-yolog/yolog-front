import { DiaryDetailHeader } from '@/app/components';
import DiaryDateSwiper from '@/app/components/diary-date-swiper';
import DiaryList from '@/app/components/diary-list';

function DiaryDetailPage() {
  return (
    <div className="relative h-full">
      <DiaryDetailHeader />
      <DiaryDateSwiper />
      <DiaryList />
    </div>
  );
}

export default DiaryDetailPage;
