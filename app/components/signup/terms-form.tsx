'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Checkbox } from '@/app/components';

function SignupTermsForm() {
  const [checkList, setCheckList] = useState([false, false, false]);
  const isAllChecked = checkList.every((v) => v);

  const handleChangeItem = (index: number) => {
    setCheckList(checkList.map((v, i) => (i === index ? !v : v)));
  };

  const handleChangeAll = () => {
    setCheckList(checkList.map((v) => !isAllChecked));
  };

  return (
    <form className="flex flex-col justify-between flex-grow px-16pxr">
      <div className="flex flex-col gap-32pxr px-29pxr">
        <div className="flex flex-col gap-18pxr">
          <div className="flex items-center gap-11pxr">
            <Checkbox
              checked={checkList[0]}
              onChange={() => handleChangeItem(0)}
            />
            <p className="text-16pxr">만 14세 이상 가입 동의</p>{' '}
            <span className="text-[#646464] text-13pxr">(필수)</span>
          </div>

          <div className="flex items-center gap-11pxr">
            <Checkbox
              checked={checkList[1]}
              onChange={() => handleChangeItem(1)}
            />
            <p className="text-16pxr">이용 약관</p>{' '}
            <span className="text-[#646464] text-13pxr">(필수)</span>
          </div>

          <div className="flex items-center gap-11pxr">
            <Checkbox
              checked={checkList[2]}
              onChange={() => handleChangeItem(2)}
            />
            <p className="text-16pxr">개인정보처리방침</p>{' '}
            <span className="text-[#646464] text-13pxr">(필수)</span>
          </div>
        </div>

        <div className="flex items-center gap-11pxr">
          <Checkbox checked={isAllChecked} onChange={handleChangeAll} />
          <p className="font-semibold">전체 동의</p>
        </div>
      </div>

      <Link href="/signup/profile">
        <Button disabled={!isAllChecked} styles="bg-primary300 text-white">
          확인
        </Button>
      </Link>
    </form>
  );
}

export default SignupTermsForm;
