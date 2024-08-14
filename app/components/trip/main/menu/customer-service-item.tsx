'use client';

import { IconTriangleRight } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';

interface Props {
  inquiry: {
    title: string;
    description: string;
  };
}

const CustomerServiceItem = ({ inquiry }: Props) => {
  const [isShow, , , , showToggle] = useBoolean();

  return (
    <div
      className="flex gap-10pxr items-start cursor-pointer"
      onClick={() => showToggle(!isShow)}
    >
      <span className="pl-2pxr pt-5pxr">
        <div
          className="transition-transform"
          style={{
            transform: `rotateZ(${isShow ? 90 : 0}deg)`,
          }}
        >
          <IconTriangleRight />
        </div>
      </span>

      <div className="flex flex-col gap-4pxr text-15pxr leading-[23px]">
        <p>{inquiry.title}</p>

        {isShow && <p>{inquiry.description}</p>}
      </div>
    </div>
  );
};

export default CustomerServiceItem;
