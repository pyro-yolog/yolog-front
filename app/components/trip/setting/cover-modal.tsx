'use client';

import { useState } from 'react';
import TripSettingCoverModalOption from './cover-modal-option';
import TripSettingCoverModalPalette from './cover-modal-palette';
import { Modal } from '@/app/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function TripSettingCoverModal({ isOpen, onClose }: Props) {
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
      {!option && <TripSettingCoverModalOption onSelect={handleSelectOption} />}

      {option === 'COLOR' && (
        <TripSettingCoverModalPalette onClose={() => setOption(null)} />
      )}
    </Modal>
  );
}

export default TripSettingCoverModal;
