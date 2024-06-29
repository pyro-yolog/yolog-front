'use client';

import { useState } from 'react';
import DiarySettingCoverModalOption from './cover-modal-option';
import DiarySettingCoverModalPalette from './cover-modal-palette';
import Modal from '../../modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function DiarySettingCoverModal({ isOpen, onClose }: Props) {
  const [option, setOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    if (option === 'COLOR') {
      setOption(option);
      return;
    }

    // 이미지 업로드
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!option && (
        <DiarySettingCoverModalOption onSelect={handleSelectOption} />
      )}

      {option === 'COLOR' && (
        <DiarySettingCoverModalPalette onClose={() => setOption(null)} />
      )}
    </Modal>
  );
}

export default DiarySettingCoverModal;
