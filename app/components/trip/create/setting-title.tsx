import { SwitchCase } from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';

function TripCreateSettingTitle({ step }: { step: number }) {
  return (
    <h1 className={`${gowunBatang.className} text-20pxr`}>
      <SwitchCase
        value={step}
        caseBy={{
          0: (
            <p key="destination" className="animate-fadeInRight">
              어디로 여행을 가시나요?
            </p>
          ),
          1: (
            <p key="period" className="animate-fadeInRight">
              얼마나 여행을 떠나나요?
            </p>
          ),
          2: (
            <p key="name" className="animate-fadeInRight">
              일기장 이름은 무엇으로 할까요?
            </p>
          ),
        }}
      />
    </h1>
  );
}

export default TripCreateSettingTitle;
