import Diary from './diary';
import Button from './ui/button';
import { gowunBatang } from './ui/fonts';

interface Props {
  diaries?: any;
}

function DiaryList({ diaries = true }: Props) {
  return (
    <div className="flex flex-col px-26pxr">
      {diaries ? (
        <div className="flex flex-col gap-19pxr mt-33pxr">
          <Diary />
          <Diary />
          <Diary />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-17pxr items-center justify-center">
            <h1 className={`${gowunBatang.className} text-22pxr font-bold`}>
              일기장이 공백이에요!
            </h1>
            <p className="text-15pxr leading-[25px] opacity-70 text-center">
              추억은 흐르지만 기록은 영원히 지속돼요.
              <br />
              여행의 발자취를 일기로 남겨보세요.
            </p>
          </div>
          <Button
            size="small"
            styles="rounded-full text-white font-medium bg-primary400 text-15pxr mt-27pxr"
          >
            일기 쓰기
          </Button>
        </div>
      )}
    </div>
  );
}

export default DiaryList;
