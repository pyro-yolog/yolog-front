import Image from 'next/image';
import { gowunBatang } from './ui/fonts';

function JournalContent() {
  return (
    <div className="flex flex-col gap-36pxr items-center justify-center mx-35pxr">
      <Image
        alt="더미 이미지"
        src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D"
        width={320}
        height={136}
        priority
        className="rounded-md "
      />
      <p
        className={`${gowunBatang.className} text-14pxr leading-[22px] px-4pxr`}
      >
        나는 읽기 쉬운 마음이야 당신도 스윽 훑고 가셔요 달랠 길 없는 외로운 마음
        있지 머물다 가셔요 음 내게 긴 여운을 남겨줘요 사랑을 사랑을 해줘요 할 수
        있다면 그럴 수만 있다면 새하얀 빛으로 그댈 비춰 줄게요 그러다 밤이
        찾아오면 우리 둘만의 비밀을 새겨요 추억할 그 밤 위에 갈피를 꽂고 선
        남몰래 펼쳐보아요 나의 자라나는 마음을 못 본채 꺾어 버릴 수는 없네 미련
        남길바엔 그리워 아픈 게 나아 서둘러 안겨본 그 품은 따스할 테니 그러다
        밤이 찾아오면 우리 둘만의 비밀을 새겨요 추억할 그 밤 위에 갈피를 꽂고 선
        남몰래 펼쳐보아요 언젠가 또 그날이 온대도 우린 서둘러 뒤돌지 말
      </p>
    </div>
  );
}

export default JournalContent;
