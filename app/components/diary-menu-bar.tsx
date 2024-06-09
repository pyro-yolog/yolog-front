import { IconDiarySetting, IconNavigateLeft } from './icon';

function DiaryMenuBar() {
  return (
    <div className="flex justify-between items-center mx-16pxr">
      <button>
        <IconNavigateLeft />
      </button>
      <div className="flex gap-20pxr items-center">
        <button>
          <IconDiarySetting />
        </button>
      </div>
    </div>
  );
}

export default DiaryMenuBar;
