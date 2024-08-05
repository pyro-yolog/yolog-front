'use client';

import { useState } from 'react';
import TripSettingCoverModalOption from './cover-modal-option';
import TripSettingCoverModalPalette from './cover-modal-palette';
import TripSettingCoverModalImage from './cover-modal-image';
import { Modal } from '@/app/components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function TripSettingCoverModal({ isOpen, onClose }: Props) {
  const [option, setOption] = useState<string | null>(null);

  const handleClose = () => {
    onClose();
    setOption(null);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      {!option && (
        <TripSettingCoverModalOption onSelect={(option) => setOption(option)} />
      )}

      {option === 'COLOR' && (
        <TripSettingCoverModalPalette onClose={() => setOption(null)} />
      )}

      {option === 'IMAGE' && (
        <TripSettingCoverModalImage onClose={() => setOption(null)} />
      )}
    </Modal>
  );
}

export default TripSettingCoverModal;
