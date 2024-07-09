'use client';

import { useState } from 'react';
import { IconMenu } from '../icon';
import Menu from '../menu';
import { gowunBatang } from './fonts';
import MainMenu from './main-menu';
import useMenu from '@/hooks/use-menu';

function MainHeader() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const selectedTabStyle =
    'text-black font-bold border-b-4 border-[#506046] rounded-[2px] opacity-100';
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="items-center h-65pxr bg-[#eaf2e4]">
      <Menu isOpen={isMenuOpen}>
        <MainMenu onClose={handleClose} />
      </Menu>

      <div className="mx-16pxr flex justify-center pt-20pxr items-center">
        <span className={`${gowunBatang.className} text-primary500 text-20pxr`}>
          여록
        </span>

        <button
          className="absolute right-16pxr"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu />
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
