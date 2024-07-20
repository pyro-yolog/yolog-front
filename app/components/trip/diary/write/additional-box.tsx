import { gowunBatang } from '@/app/components/ui/fonts';
import { DiaryEmotion, DiaryWeather } from '@/models/diary.model';
import Image from 'next/image';

interface Props {
  title: string;
  datas: DiaryEmotion[] | DiaryWeather[];
  selectData?: string | null;
  onSelect: (option: DiaryEmotion | DiaryWeather) => void;
}

function DiaryWriteAdditionalBox({
  title,
  datas,
  selectData,
  onSelect,
}: Props) {
  return (
    <div
      className={`${gowunBatang.className} flex flex-col gap-7pxr w-255pxr border border-[#E6E3C8] bg-[#F8F7EE] rounded-[15px] pt-14pxr px-16pxr pb-16pxr`}
    >
      <span className="text-black text-14pxr font-semibold">{title}</span>

      <div className="flex justify-between w-full">
        {datas.map((data) => (
          <div
            key={data.type}
            className="flex flex-col items-center justify-between gap-7pxr cursor-pointer"
            onClick={() => onSelect(data)}
          >
            <Image
              src={data.image}
              width={36}
              height={36}
              style={{ width: 36, height: 36 }}
              alt="diary-additional"
              sizes="200%"
              priority
            />

            <span
              className="inline-block w-full px-5pxr pt-1pxr pb-3pxr text-[#595959] text-11pxr text-center font-bold rounded-[10px] transition-colors duration-100"
              style={{
                backgroundColor:
                  selectData === data.type ? '#E6E3C8' : 'rgba(0, 0, 0, 0)',
              }}
            >
              {data.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiaryWriteAdditionalBox;
