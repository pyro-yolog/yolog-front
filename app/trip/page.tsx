import Link from 'next/link';
import {
  FloatingButton,
  IconPlus,
  MainHeader,
  TripMainView,
} from '@/app/components';

function TripPage() {
  return (
    <div className="relative h-full flex flex-col">
      <MainHeader />

      <TripMainView />

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

export default TripPage;
