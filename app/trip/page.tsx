import Link from 'next/link';
import { FloatingButton, IconPlus, MainHeader } from '../components';
import MainDiaryList from '../components/ui/main-diary-list';

function MainPage() {
  return (
    <div className="relative h-full bg-[#eaf2e4] flex flex-col justify-end">
      <MainHeader />
      <MainDiaryList />

      <Link
        className="absolute bottom-38pxr left-1/2 -translate-x-1/2"
        href="/trip/create/setting"
      >
        <FloatingButton>
          <IconPlus />
        </FloatingButton>
      </Link>
    </div>
  );
}

export default MainPage;
