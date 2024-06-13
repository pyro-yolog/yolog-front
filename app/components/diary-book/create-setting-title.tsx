import { gowunBatang } from '../ui/fonts';

function DiaryBookCreateSettingTitle({ step }: { step: number }) {
  return (
    <h1 className={`${gowunBatang.className} text-20pxr`}>
      {step === 0 && (
        <p className="animate-fadeInRight">어디로 여행을 가시나요?</p>
      )}

      {step === 1 && (
        <p className="animate-fadeInRight">얼마나 여행을 떠나나요?</p>
      )}

      {step === 2 && (
        <p className="animate-fadeInRight">일기장 이름은 무엇으로 할까요?</p>
      )}
    </h1>
  );
}

export default DiaryBookCreateSettingTitle;
