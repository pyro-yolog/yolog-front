'use client';

import { useState } from 'react';

function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return {
    isMenuOpen,
    setIsMenuOpen,
  };
}

export default useMenu;
