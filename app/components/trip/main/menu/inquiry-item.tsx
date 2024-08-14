import useBoolean from '@/hooks/useBoolean';
import { InquiryResponse } from '@/models/inquiry.model';
import InquiryDetail from './inquiry-detail';

interface Props {
  inquiry: InquiryResponse;
}

const InquiryItem = ({ inquiry }: Props) => {
  const [isOpen, , open, close] = useBoolean();

  return (
    <>
      <div
        className="flex items-center justify-between w-full h-77pxr border-b border-[#EAEAEA] pl-12pxr cursor-pointer"
        onClick={open}
      >
        <div className="flex flex-col gap-5pxr">
          <span className="font-semibold">{inquiry.title}</span>

          <span className="text-13pxr text-[#9A9A9A]">{inquiry.createdAt}</span>
        </div>
        <button
          className="py-6pxr w-77pxr text-13pxr font-semibold text-[#121212] rounded-[8px]"
          style={{
            backgroundColor: inquiry.isAnswered ? '#E3E3E3' : '#AFC98D',
          }}
        >
          {inquiry.isAnswered ? '답변 완료' : '대기중'}
        </button>
      </div>

      {isOpen && (
        <InquiryDetail isOpen={true} onClose={close} inquiryId={inquiry.id} />
      )}
    </>
  );
};

export default InquiryItem;
