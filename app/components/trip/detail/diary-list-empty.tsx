import { gowunBatang } from '@/app/components/ui/fonts';
import Button from '@/app/components/ui/button';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

function TripDetailDiaryListEmpty() {
  const { tripId } = useParams();
  const params = useSearchParams();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <p
        className={`${gowunBatang.className} text-black text-22pxr font-bold animate-fadeInTop`}
      >
        일기장이 공백이에요!
      </p>

      <div className="flex flex-col items-center gap-27pxr mt-17pxr animate-fadeInBottom">
        <p className="text-15pxr text-center">
          추억은 흐르지만 기록은 영원히 지속돼요.
          <br /> 여행의 발자취를 일기로 남겨보세요.
        </p>

        <Link href={`/trip/${tripId}/diary/write?${params}`}>
          <Button
            size="small"
            styles="rounded-full bg-primary400 text-white !text-15pxr"
          >
            일기 쓰기
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default TripDetailDiaryListEmpty;
