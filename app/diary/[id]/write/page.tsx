import {
  IconGallery,
  IconMoodNormal,
  IconNavigateLeft,
  IconTimeline,
  IconWeatherSunny,
} from '@/app/components';
import IconCamera from '@/app/components/icon/icon-camera';
import { gowunBatang } from '@/app/components/ui/fonts';
import IconCheck from '@/app/components/ui/icon-check';

function WritePage() {
  return (
    <div className="h-full">
      <header className="flex justify-between items-center mb-20pxr pt-71pxr">
        <IconNavigateLeft />
        <p
          className={`${gowunBatang.className} text-[#697a53] text-18pxr font-bold`}
        >
          2024년 3월 10일
        </p>
        <button>
          <IconCheck />
        </button>
      </header>
      <div className="mx-28pxr h-full">
        <div className="flex items-center justify-between">
          <p className={`${gowunBatang.className} text-24pxr`}>Day 1</p>
          <div className="flex items-center gap-10pxr">
            <button>
              <IconMoodNormal />
            </button>
            <button>
              <IconWeatherSunny />
            </button>
          </div>
        </div>
        <input
          className={`h-42pxr indent-4pxr mt-13pxr w-full text-24pxr focus:outline-none border-b border-[#e3e3e3] ${gowunBatang.className} placeholder:text-24pxr placeholder:font-bold placeholder:font-[#b1b1b1] placeholder:${gowunBatang.className}`}
          placeholder="제목"
        />
        <textarea
          className={`${gowunBatang.className} text-16pxr resize-none w-full focus:outline-none indent-4pxr mt-26pxr placeholder:text-[#b1b1b1] placeholder:font-bold scrollbar-hide`}
          placeholder="내용을 입력하세요"
        />
      </div>
      <div className="py-10pxr px-18pxr flex items-center w-full h-52pxr bg-[#eaf2e4] sticky bottom-0pxr">
        <div className="flex gap-26pxr">
          <button>
            <IconGallery />
          </button>
          <button>
            <IconCamera size={26} stroke="black" />
          </button>
          <button>
            <IconTimeline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WritePage;
