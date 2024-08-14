'use client';

import { Button, Viewer } from '@/app/components';
import { ACCOUNT_INQUIRIES, FUNCTION_INQUIRIES } from '@/lib/constants/inquiry';
import useBoolean from '@/hooks/useBoolean';
import CustomerServiceItem from './customer-service-item';
import InquiryMenu from './inquiry-menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomerServiceMenu = ({ isOpen, onClose }: Props) => {
  const [isOpenInquiry, , openInquiry, closeInquiry] = useBoolean();

  return (
    <>
      <Viewer isOpen={isOpen} onClose={onClose} title="고객센터">
        <div className="flex flex-col justify-between pt-20pxr px-16pxr pb-16pxr w-full min-h-full">
          <div className="flex flex-col gap-30pxr">
            <div className="flex flex-col gap-5pxr">
              <span className="font-semibold">주제별 자주 묻는 질문</span>

              <p className="text-15pxr leading-[23px]">
                해당하는 주제를 탭하여 이용 중 궁금한 사항을 확인해보세요.
                <br />
                삼각형 버튼을 누르면 관련 내용을 볼 수 있어요.
              </p>
            </div>

            <div className="flex flex-col gap-8pxr">
              <span className="font-semibold">계정</span>

              {ACCOUNT_INQUIRIES.map((inquiry, i) => (
                <CustomerServiceItem key={i} inquiry={inquiry} />
              ))}
            </div>

            <div className="flex flex-col gap-8pxr">
              <span className="font-semibold">기능</span>

              {FUNCTION_INQUIRIES.map((inquiry, i) => (
                <CustomerServiceItem key={i} inquiry={inquiry} />
              ))}
            </div>
          </div>

          <Button onClick={openInquiry}>문의하기</Button>
        </div>
      </Viewer>

      <InquiryMenu isOpen={isOpenInquiry} onClose={closeInquiry} />
    </>
  );
};

export default CustomerServiceMenu;
