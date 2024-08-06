import Link from 'next/link';
import {
  FloatingButton,
  IconMenu,
  IconPlus,
  TripMainView,
} from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';

function TripPage() {
  return (
    <div className="relative h-full flex flex-col">
      <header className="items-center h-65pxr">
        <div className="mx-16pxr flex justify-center pt-20pxr items-center">
          <span
            className={`${gowunBatang.className} text-primary500 text-20pxr`}
          >
            여록
          </span>

          <button className="absolute right-16pxr">
            <IconMenu />
          </button>
        </div>
      </header>

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
