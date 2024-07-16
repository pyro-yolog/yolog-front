import Calendar from '../../calendar';
import Modal from '../../modal';

interface Props {
  isOpen: boolean;
  startDate: string;
  endDate?: string;
  onClose: () => void;
  onChange: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate?: string;
  }) => void;
}

function TripSettingCalendarModal({
  isOpen,
  startDate,
  endDate,
  onClose,
  onChange,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Calendar startDate={startDate} endDate={endDate} onChange={onChange} />
    </Modal>
  );
}

export default TripSettingCalendarModal;
