import MENUS from '@/app/lib/constants/menus';
import Button from './button';
import ToggleMessage from './toggle-message';

interface Props {
  onClick: (menu: string) => void;
}

function CustomerServiceMenu({ onClick }: Props) {
  const titleStyle = 'text-16pxr font-semibold';
  return (
    <div className="flex flex-col justify-between h-full mt-32pxr">
      <div className="flex flex-col gap-30pxr flex-1 overflow-auto">
        <div className="flex flex-col gap-5pxr">
          <h1 className={titleStyle}>주제별 자주 묻는 질문</h1>
          <p className="text-15pxr leading-[23px] text-[#4b4b4b]">
            해당하는 주제를 탭하여 이용 중 궁금한 사항을 확인해보세요.
            <br />
            삼각형 버튼을 누르면 관련 내용을 볼 수 있어요.
          </p>
        </div>
        <div className="flex flex-col gap-7pxr">
          <h1 className={titleStyle}>계정 및 프로필</h1>
          <div className="flex flex-col gap-8pxr">
            <ToggleMessage title="여록 앱을 삭제하면 제 기록도 날아가나요?">
              여록 앱을 삭제하면 제 기록도 날아가나요?여록 앱을 삭제하면 제
              기록도 날아가나요?여록 앱을 삭제하면 제 기록도 날아가나요?여록
              앱을 삭제하면 제 기록도 날아
            </ToggleMessage>
            <ToggleMessage title="이메일 로그인은 없나요?">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
            <ToggleMessage title="일기장 정보를 변경하고 싶어요.">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
            <ToggleMessage title="회원탈퇴는 어떻게 하나요?">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
            <ToggleMessage title="내 일기는 안전하게 보관되나요?">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
          </div>
        </div>
        <div className="flex flex-col gap-7pxr">
          <h1 className={titleStyle}>기능</h1>
          <div className="flex flex-col gap-8pxr">
            <ToggleMessage title="내가 작성한 일기를 공유하고 싶어요.">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
            <ToggleMessage title="일기 작성 알림이 오지 않아요.">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
            <ToggleMessage title="빠른 메모에 기록한 내용을 일기 작성 시 불러오고 싶어요.">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
            <ToggleMessage title="일기 작성 주제는 어떠한 방식으로 생성되는 건가요?">
              네 없어요 네 없어요네 없어요네 없어요네 없어요네 없어요네 없어요네
              없어요네 없어요네 없어요네 없어요네 없어요네 없어요
            </ToggleMessage>
          </div>
        </div>
      </div>
      <div className="absolute bottom-37pxr left-1/2 -translate-x-1/2 px-16pxr w-full">
        <Button
          styles="bg-primary300 text-white "
          onClick={() => onClick(MENUS.inquiry)}
        >
          문의하기
        </Button>
      </div>
    </div>
  );
}

export default CustomerServiceMenu;
