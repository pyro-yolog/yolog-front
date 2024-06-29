'use client';

import { useEffect, useState } from 'react';
import Checkbox from './checkbox';
import Button from './ui/button';
import Link from 'next/link';

type TermsName = 'underFourteen' | 'terms' | 'privacyPolicy' | 'all';

function SignupTermsForm() {
  const [isChecked, setIsChecked] = useState({
    underFourteen: false,
    terms: false,
    privacyPolicy: false,
    all: false,
  });

  useEffect(() => {
    const { underFourteen, terms, privacyPolicy, all } = isChecked;
    if (underFourteen && terms && privacyPolicy && !all) {
      setIsChecked((prevState) => ({ ...prevState, all: true }));
    } else if ((!underFourteen || !terms || !privacyPolicy) && all) {
      setIsChecked((prevState) => ({ ...prevState, all: false }));
    }
  }, [isChecked.underFourteen, isChecked.terms, isChecked.privacyPolicy]);

  const handleClickCheckbox = (name: TermsName, value: boolean) => {
    const newState = {
      ...isChecked,
      [name]: value,
    };

    const allTrueExceptAllAgree = Object.keys(isChecked).every(
      (key) => key === 'all' || isChecked[name] === true,
    );

    setIsChecked({
      ...newState,
      all: allTrueExceptAllAgree,
    });
  };

  const handleAllAgreeChange = () => {
    const newState = !isChecked.all;
    setIsChecked({
      underFourteen: newState,
      terms: newState,
      privacyPolicy: newState,
      all: newState,
    });
  };

  const { underFourteen, terms, privacyPolicy, all } = isChecked;
  return (
    <form className="flex flex-col justify-between flex-grow px-16pxr">
      <div className="flex flex-col gap-32pxr px-29pxr">
        <div className="flex flex-col gap-18pxr">
          <div className="flex items-center gap-11pxr">
            <Checkbox
              checked={underFourteen}
              onChange={(checked) =>
                handleClickCheckbox('underFourteen', checked)
              }
            />
            <p className="text-16pxr">만 14세 이상 가입 동의</p>{' '}
            <span className="text-[#646464] text-13pxr">(필수)</span>
          </div>
          <div className="flex items-center gap-11pxr">
            <Checkbox
              checked={terms}
              onChange={(checked) => handleClickCheckbox('terms', checked)}
            />
            <p className="text-16pxr">이용 약관</p>{' '}
            <span className="text-[#646464] text-13pxr">(필수)</span>
          </div>
          <div className="flex items-center gap-11pxr">
            <Checkbox
              checked={privacyPolicy}
              onChange={(checked) =>
                handleClickCheckbox('privacyPolicy', checked)
              }
            />
            <p className="text-16pxr">개인정보처리방침</p>{' '}
            <span className="text-[#646464] text-13pxr">(필수)</span>
          </div>
        </div>
        <div className="flex items-center gap-11pxr">
          <Checkbox checked={all} onChange={handleAllAgreeChange} />
          <p className="font-semibold">전체 동의</p>
        </div>
      </div>

      <Link href="/signup/profile">
        <Button disabled={!isChecked.all} styles="!bg-primary300 text-white">
          확인
        </Button>
      </Link>
    </form>
  );
}

export default SignupTermsForm;
