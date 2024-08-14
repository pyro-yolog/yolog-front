'use client';

import { useQuery } from '@tanstack/react-query';
import { Button, Viewer } from '@/app/components';
import useBoolean from '@/hooks/useBoolean';
import { getInquiryListAPI } from '@/apis/inquiries';
import CreateInquiry from './create-inquiry';
import InquiryItem from './inquiry-item';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryMenu = ({ isOpen, onClose }: Props) => {
  const [isOpenCreate, , openCreate, closeCreate] = useBoolean();

  const { data, refetch } = useQuery({
    queryKey: ['inquiries'],
    queryFn: () => getInquiryListAPI(),
  });

  const handleCloseCreateInquiry = () => {
    refetch();
    closeCreate();
  };

  return (
    <>
      <Viewer isOpen={isOpen} onClose={onClose} title="문의하기">
        <div className="flex flex-col w-full min-h-full pt-25pxr pb-16pxr px-16pxr gap-16pxr">
          {!data || !data.length ? (
            <div className="flex flex-auto items-center justify-center w-full text-[#313131]">
              문의 내용이 없어요
            </div>
          ) : (
            <div className="w-full h-[calc(100%-74px)] overflow-y-auto scrollbar-hide">
              {data.map((inquiry) => (
                <InquiryItem key={inquiry.id} inquiry={inquiry} />
              ))}
            </div>
          )}

          <Button onClick={openCreate}>문의 작성</Button>
        </div>
      </Viewer>

      {isOpenCreate && (
        <CreateInquiry isOpen={true} onClose={handleCloseCreateInquiry} />
      )}
    </>
  );
};

export default InquiryMenu;
