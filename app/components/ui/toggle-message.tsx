'use client';

import React, { useState } from 'react';
import IconToggle from '../icon/icon-toggle';

interface Props {
  children: React.ReactNode;
  title: string;
}

function ToggleMessage({ children, title }: Props) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4pxr">
      <div className="flex items-center gap-5pxr text-center">
        <button onClick={() => setIsToggleOpen(!isToggleOpen)}>
          <IconToggle />
        </button>
        <p className="text-15pxr text-[#222]">{title}</p>
      </div>
      {isToggleOpen ? (
        <p className="text-15pxr leading-[23px] text-[#222] ml-17pxr">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export default ToggleMessage;
