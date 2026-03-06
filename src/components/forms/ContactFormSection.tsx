'use client';

import { useState } from 'react';
import InquiryForm from './InquiryForm';
import GovSupportForm from './GovSupportForm';

type FormType = 'general' | 'gov';

export default function ContactFormSection() {
  const [activeForm, setActiveForm] = useState<FormType>('general');

  return (
    <div className="bg-beige-50 rounded-2xl p-8 md:p-10">
      {/* Toggle Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setActiveForm('general')}
          className={`flex-1 py-3 px-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
            activeForm === 'general'
              ? 'bg-accent text-white shadow-md'
              : 'bg-white text-black-light border border-beige-200 hover:border-accent/30'
          }`}
        >
          일반 상담 신청
        </button>
        <button
          onClick={() => setActiveForm('gov')}
          className={`flex-1 py-3 px-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${
            activeForm === 'gov'
              ? 'bg-accent text-white shadow-md'
              : 'bg-white text-black-light border border-beige-200 hover:border-accent/30'
          }`}
        >
          정부지원 상담 신청
        </button>
      </div>

      {/* Form Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-2">
          {activeForm === 'general' ? '상담 신청' : '정부지원 상담 신청'}
        </h2>
        <p className="text-black-light">
          {activeForm === 'general'
            ? '아래 양식을 작성해주시면 빠르게 연락드리겠습니다.'
            : '정부지원 바우처 상담을 위한 접수 양식입니다.'}
        </p>
      </div>

      {/* Forms */}
      {activeForm === 'general' ? <InquiryForm /> : <GovSupportForm />}
    </div>
  );
}
