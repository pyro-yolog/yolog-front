import {
  JournalContent,
  JournalHeader,
  JournalUpperContent,
} from '@/app/components';

function JournalPage() {
  return (
    <div>
      <JournalHeader className="mb-20pxr" />
      <JournalUpperContent />
      <hr className="h-1pxr text-[#d5e1c0] mt-7pxr mb-14pxr mx-21pxr" />
      <JournalContent />
    </div>
  );
}

export default JournalPage;
