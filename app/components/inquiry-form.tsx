'use client';

import UseDialog from '@/hooks/use-dialog';
import Dialog from './dialog';
import IconCamera from './icon/icon-camera';
import Button from './ui/button';
import DialogInquiryDone from './ui/dialog-inquiry-done';

interface Props {
  onClick: () => void;
}

function InquiryForm({ onClick }: Props) {
  const { isDialogOpen, setIsDialogOpen, dialogOutsideClick, dialogRef } =
    UseDialog();
  const handleClose = () => {
    setIsDialogOpen(false);
  };
  const guideTextStyle =
    'text-[#7b7b7b] text-13pxr leading-[22px] tracking-[-0.4px]';
  return (
    <form className="flex flex-col">
      <textarea
        className="min-w-356pxr min-h-207pxr focus:outline-none placeholder:text-center placeholder:translate-y-92pxr scrollbar-hide resize-none placeholder:text-13pxr placeholder:leading-[22px] placeholder:tracking-[-0.4px] placeholder:text-[#3C3C4399]"
        placeholder="최대한 자세히 적어주시면 빠르게 도와드릴게요."
      />
      <div className="flex flex-col">
        <button
          type="button"
          className="flex mb-12pxr flex-col gap-4pxr w-64pxr h-64pxr rounded-[10px] bg-[#d9d9d9] items-center justify-center"
        >
          <IconCamera />
          <span className="text-13pxr leading-[22px] tracking-[-0.4px] text-[#7b7b7b]">
            0/3
          </span>
        </button>
        <div className="flex flex-col gap-26pxr">
          <div className="max-w-319pxr">
            <h1 className={guideTextStyle}>안내</h1>
            <p className={guideTextStyle}>
              <span className="p-10pxr">•</span>답변을 드리기까지 최대 7일이
              걸릴 수 있어요.
            </p>
            <p className={guideTextStyle}>
              <span className="p-10pxr">•</span>욕설이나 비방, 장난식 문의는
              답변을 드리지 않아요.
            </p>
            <p className={guideTextStyle}>
              <span className="p-10pxr">•</span>[문의하기]버튼을 누를 시
              <span className="underline underline-offset-2">이용약관</span> 및
              <span className="underline underline-offset-2">
                개인정보 수집 및 이용
              </span>
              <span className="pl-27pxr">에 동의하게 됩니다.</span>
            </p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} type="button">
            문의하기
          </Button>
          <Dialog
            isOpen={isDialogOpen}
            dialogOutsideClick={dialogOutsideClick}
            dialogRef={dialogRef}
            className="w-343pxr"
          >
            <DialogInquiryDone onClick={onClick} onClose={handleClose} />
          </Dialog>
        </div>
      </div>
    </form>
  );
}

export default InquiryForm;
