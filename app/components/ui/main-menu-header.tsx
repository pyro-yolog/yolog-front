'use client';

import { IconNavigateLeft } from '../icon';

interface Props {
  title: string;
  onClick: () => void;
}

function MainMenuHeader({ title, onClick }: Props) {
  return (
    <div className="relative flex items-center justify-center mt-74pxr">
      <button className="absolute left-6pxr" onClick={onClick}>
        <IconNavigateLeft />
      </button>
      <h1 className="text-18pxr font-semibold">{title}</h1>
    </div>
  );
}

export default MainMenuHeader;
