'use client';

import {
  IconHeadPhone,
  IconNavigateRight,
  IconPerson,
} from '@/app/components/icon';
import Viewer from '@/app/components/viewer';
import useBoolean from '@/hooks/useBoolean';
import AccountMenu from './account-menu';
import MenuItem from './menu-items';
import CustomerServiceMenu from './customer-service-menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MainMenu = ({ isOpen, onClose }: Props) => {
  const [isOpenAccount, , openAccount, closeAccount] = useBoolean();
  const [isOpenInquiry, , openInquiry, closeInquiry] = useBoolean();

  return (
    <>
      <Viewer isOpen={isOpen} onClose={onClose} title="메뉴">
        <div className="flex flex-col justify-between items-center w-full min-h-full pt-10pxr px-16pxr pb-24pxr">
          <div className="flex flex-col w-full">
            <MenuItem onClick={openAccount}>
              <div className="flex gap-27pxr">
                <IconPerson />

                <span className="font-semibold">계정</span>
              </div>

              <IconNavigateRight />
            </MenuItem>

            <MenuItem onClick={openInquiry}>
              <div className="flex gap-27pxr">
                <IconHeadPhone />

                <span className="font-semibold">고객센터</span>
              </div>

              <IconNavigateRight />
            </MenuItem>
          </div>

          <span className="text-[#ADADAD] font-semibold">v.1.0</span>
        </div>
      </Viewer>

      <AccountMenu isOpen={isOpenAccount} onClose={closeAccount} />
      <CustomerServiceMenu isOpen={isOpenInquiry} onClose={closeInquiry} />
    </>
  );
};

export default MainMenu;
