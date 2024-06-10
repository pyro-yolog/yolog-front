'use client';

import { useState } from 'react';
import { IconHeadPhone, IconPerson } from '../icon';
import {
  AccountMenu,
  ChangeEmailMenu,
  CustomerServiceMenu,
  InquiryMenu,
  MainMenuHeader,
  MenuBarButton,
} from '../index';
import MENUS from '@/app/lib/constants/menus';

interface Props {
  onClose: () => void;
}

function MainMenu({ onClose }: Props) {
  const [menu, setMenu] = useState(MENUS.menu);
  const handleClickMenu = (menu?: string) => {
    if (menu) {
      setMenu(menu);
    }
  };
  const handleClickBack = () => {
    if (menu === MENUS.account) {
      setMenu(MENUS.menu);
    } else if (menu === MENUS.customerService) {
      setMenu(MENUS.menu);
    } else if (menu === MENUS.changeEmail) {
      setMenu(MENUS.account);
    } else if (menu === MENUS.inquiry) {
      setMenu(MENUS.customerService);
    } else {
      onClose();
    }
  };
  const renderMenu = () => {
    switch (menu) {
      case MENUS.menu:
        return (
          <>
            <MenuBarButton
              title={MENUS.account}
              icon={<IconPerson />}
              onClick={() => handleClickMenu(MENUS.account)}
            />
            <MenuBarButton
              title={MENUS.customerService}
              icon={<IconHeadPhone />}
              onClick={() => handleClickMenu(MENUS.customerService)}
            />
          </>
        );
      case MENUS.account:
        return <AccountMenu onClick={handleClickMenu} />;
      case MENUS.customerService:
        return <CustomerServiceMenu onClick={handleClickMenu} />;
      case MENUS.changeEmail:
        return <ChangeEmailMenu />;
      case MENUS.inquiry:
        return <InquiryMenu onClick={handleClickMenu} />;
    }
  };
  return (
    <>
      <MainMenuHeader title={menu} onClick={handleClickBack} />
      <div className="mx-16pxr mt-20pxr h-full">{renderMenu()}</div>
    </>
  );
}

export default MainMenu;
