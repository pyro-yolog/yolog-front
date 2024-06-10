import { gowunBatang } from './fonts';

function MainDiaryList() {
  return (
    <div className="h-725pxr rounded-tl-[27px] rounded-tr-[27px] shadow-mainDiaryList flex items-center justify-center bg-white w-full">
      <div className="flex flex-col gap-13pxr items-center justify-center">
        <h1 className={`${gowunBatang.className} text-22pxr font-bold`}>
          여행 일기 시작하기
        </h1>
        <p className="text-15pxr font-normal text-center opacity-[0.7]">
          나만의 여행 일기를 작성해보세요.
          <br />
          시작하려면 더하기 버튼을 탭하세요.
        </p>
      </div>
    </div>
  );
}

export default MainDiaryList;
