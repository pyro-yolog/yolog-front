import { IconKebab, IconNavigateLeft } from './icon';
import { gowunBatang } from './ui/fonts';

interface Props {
  date?: string;
  className?: string;
}

function JournalHeader({ date = '2024년 3월 10일', className }: Props) {
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <button>
        <IconNavigateLeft />
      </button>
      <h1 className={`${gowunBatang.className} text-18pxr font-bold`}>
        {date}
      </h1>
      <button>
        <IconKebab />
      </button>
    </header>
  );
}

export default JournalHeader;
