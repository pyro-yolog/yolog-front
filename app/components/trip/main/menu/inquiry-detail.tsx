'use client';

import { useQuery } from '@tanstack/react-query';
import { deleteInquiryAPI, getInquiryAPI } from '@/apis/inquiries';
import { Viewer } from '@/app/components';
import useToast from '@/hooks/useToast';

interface Props {
  isOpen: boolean;
  inquiryId: number;
  onClose: () => void;
}

const InquiryDetail = ({ isOpen, inquiryId, onClose }: Props) => {
  const showToast = useToast();
  const { refetch } = useQuery({
    queryKey: ['inquiries'],
  });
  const { data } = useQuery({
    queryKey: ['inquiry', inquiryId],
    queryFn: () => getInquiryAPI(inquiryId),
  });

  const handleClickRemoveButton = async () => {
    try {
      await deleteInquiryAPI(inquiryId);

      refetch();
      onClose();
    } catch (e) {
      console.error(e);
      showToast({
        type: 'error',
        message: '삭제 요청을 하는 도중 오류가 발생했어요!',
      });
    }
  };

  return (
    <Viewer isOpen={isOpen} onClose={onClose} title=" ">
      {data && (
        <div className="flex flex-col w-full pt-25pxr px-28pxr gap-40pxr">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-5pxr">
              <span className="text-[#313131] font-semibold">{data.title}</span>

              <span className="text-13pxr text-[#9A9A9A]">
                {data.createdAt}
              </span>
            </div>

            <button
              className="w-77pxr rounded-[8px] py-7pxr text-13pxr text-[#121212] font-semibold bg-[#E3E3E3]"
              onClick={handleClickRemoveButton}
            >
              삭제
            </button>
          </div>

          <p className="text-15pxr leading-[23px] whitespace-pre">
            {data.content}
          </p>

          {/* Answer */}
          <div className="flex flex-col w-full min-h-270pxr rounded-[20px] border border-[#E3E3E3]">
            <div className="flex items-center justify-between h-70pxr border-b border-[#E3E3E3] px-22pxr">
              <span className="text-[#313131] font-semibold">여록 답변</span>

              <button
                className="w-77pxr py-6pxr rounded-[8px] text-13pxr text-[#121212] font-semibold outline-none"
                style={{
                  backgroundColor: data.isAnswered ? '#E3E3E3' : '#AFC98D',
                }}
              >
                {data.isAnswered ? '답변 완료' : '대기중'}
              </button>
            </div>

            <p className="text-[#313131] leading-[25px] whitespace-pre py-20pxr px-22pxr">
              {data.isAnswered
                ? data.answer
                : '문의하신 내용을 해결하고 있어요. 답변이 완료되면 알려드릴게요.\n\n여록 드림'}
            </p>
          </div>
        </div>
      )}
    </Viewer>
  );
};

export default InquiryDetail;
