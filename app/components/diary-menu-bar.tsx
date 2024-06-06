import { IconDiarySetting, IconDiaryShare, IconNavigateLeft } from './icon';

function DiaryMenuBar() {
  return (
    <div className="flex justify-between items-center">
      <IconNavigateLeft />
      <div className="flex gap-20pxr">
        <IconDiaryShare />
        <IconDiarySetting />
      </div>
    </div>
  );
}

export default DiaryMenuBar;
