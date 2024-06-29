'use client';

import { useState } from 'react';

const useBoolean = (initialBool = false) => {
  const [bool, setBool] = useState(initialBool);

  const setTrue = () => {
    setBool(true);
  };

  const setFalse = () => {
    setBool(false);
  };

  return [bool, !bool, setTrue, setFalse, setBool] as const;
};

export default useBoolean;
