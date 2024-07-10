import { gowunBatang } from '../../ui/fonts';

function TripMainEmpty() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-13pxr">
      <p
        className={`${gowunBatang.className} text-black text-22pxr font-bold animate-fadeInTop`}
      >
        여행 일기 시작하기
      </p>

      <p className="text-black text-15pxr opacity-0 text-center animate-[fadeInBottom_1.2s_0.2s_forwards]">
        나만의 여행 일기를 작성해보세요.
        <br />
        시작하려면 더하기 버튼을 탭하세요.
      </p>
    </div>
  );
}

export default TripMainEmpty;
