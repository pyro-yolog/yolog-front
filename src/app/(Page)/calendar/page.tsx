import DateConfigModal from "@/components/date/DateConfigModal";
import DatePicker from "@/components/date/DatePicker";
import DateProvider from "@/components/date/DateProvider";

type Props = {};

function Calendar({}: Props) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <DateProvider>
        <DatePicker />
        <DateConfigModal />
      </DateProvider>
    </div>
  );
}

export default Calendar;
