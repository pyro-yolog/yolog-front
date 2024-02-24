import React from 'react'
import DateConfigModal from "@/components/date/DateConfigModal";
import DatePicker from "@/components/date/DatePicker";
import DateProvider from "@/components/date/DateProvider";
import { Button } from '@/components/ui/button';

type Props = {}

function page({}: Props) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <p className='font-GowunBatangBold text-xl'>
        - 여행을 시작할까요? -
      </p>
      <Button className='font-GowunBatang bg-[#E1DEBF] text-black'>
        여행 시작
      </Button>
      {/* <DateProvider>
        <DatePicker />
        <DateConfigModal />
      </DateProvider> */}
      <div className='w-full h-full bg-[#EBF3E1] rounded-lg'>
        <Button className='bg-[#9CAA99]'>

        </Button>
      </div>
    </div>
  )
}

export default page