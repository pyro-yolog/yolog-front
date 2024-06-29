import Link from 'next/link';
import { IconDiarySetting, IconNavigateLeft } from './icon';

function DiaryMenuBar() {
  return (
    <div className="flex justify-between items-center mx-16pxr">
      <button>
        <Link href="/main">
          <IconNavigateLeft />
        </Link>
      </button>
      <div className="flex gap-20pxr items-center">
        <button className="p-6pxr rounded-md bg-white bg-opacity-30">
          <IconDiarySetting />
        </button>
      </div>
    </div>
  );
}

export default DiaryMenuBar;
