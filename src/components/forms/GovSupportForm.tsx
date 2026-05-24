'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import SuccessModal from '@/components/shared/SuccessModal';
import PrivacyConsentSection from './PrivacyConsentSection';

const concernOptions = [
  '우울',
  '불안',
  '강박',
  '분노',
  '대인관계',
  '가족갈등',
  '부부갈등',
  '자존감',
  '진로/직업',
  '학업/학교생활',
  '번아웃/스트레스',
  '트라우마/PTSD',
  '섭식문제',
  '수면문제',
  '자해/자살',
  '기타',
];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors';

export default function GovSupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthdate: '',
    preferredCounselor: '',
    concerns: [] as string[],
    mainConcern: '',
    counselingExpectation: '',
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleConcernToggle = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((i) => i !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyConsent) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    if (formData.concerns.length === 0) {
      alert('고민 유형을 하나 이상 선택해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/gov-support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, privacyConsent }),
      });

      if (res.ok) {
        setModalOpen(true);
        setFormData({
          name: '',
          phone: '',
          birthdate: '',
          preferredCounselor: '',
          concerns: [],
          mainConcern: '',
          counselingExpectation: '',
        });
        setPrivacyConsent(false);
      } else {
        alert('접수 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        {/* 이름 + 연락처 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="care-name" className="block text-sm font-medium text-black mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="care-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              placeholder="홍길동"
            />
          </div>
          <div>
            <label htmlFor="care-phone" className="block text-sm font-medium text-black mb-2">
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="care-phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
              className={inputClass}
              placeholder="010-1234-5678"
              inputMode="numeric"
            />
          </div>
        </div>

        {/* 생년월일 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="care-birthdate" className="block text-sm font-medium text-black mb-2">
              생년월일 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="care-birthdate"
              required
              value={formData.birthdate}
              onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="care-counselor" className="block text-sm font-medium text-black mb-2">
              희망 상담사
              <span className="text-xs text-black-light/60 ml-2">(선택사항)</span>
            </label>
            <input
              type="text"
              id="care-counselor"
              value={formData.preferredCounselor}
              onChange={(e) => setFormData({ ...formData, preferredCounselor: e.target.value })}
              className={inputClass}
              placeholder="기존 상담사가 있다면 성함을 적어주세요"
            />
          </div>
        </div>

        {/* 고민 유형 (multi-checkbox) */}
        <div>
          <label className="block text-sm font-medium text-black mb-3">
            고민 유형 <span className="text-red-500">*</span>
            <span className="text-xs text-black-light/60 ml-2">(복수 선택 가능)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {concernOptions.map((concern) => (
              <label
                key={concern}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-sm ${
                  formData.concerns.includes(concern)
                    ? 'border-accent bg-accent/5 text-accent'
                    : 'border-beige-200 bg-white text-black-light hover:border-accent/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.concerns.includes(concern)}
                  onChange={() => handleConcernToggle(concern)}
                  className="sr-only"
                />
                <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  formData.concerns.includes(concern)
                    ? 'border-accent bg-accent'
                    : 'border-beige-200'
                }`}>
                  {formData.concerns.includes(concern) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {concern}
              </label>
            ))}
          </div>
        </div>

        {/* 주 호소 문제 */}
        <div>
          <label htmlFor="care-mainConcern" className="block text-sm font-medium text-black mb-2">
            현재 가장 힘든 점 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="care-mainConcern"
            required
            rows={4}
            value={formData.mainConcern}
            onChange={(e) => setFormData({ ...formData, mainConcern: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="현재 가장 힘들거나 어려운 점을 자유롭게 적어주세요."
          />
        </div>

        {/* 상담 기대 사항 */}
        <div>
          <label htmlFor="care-expectation" className="block text-sm font-medium text-black mb-2">
            상담 기대 사항
          </label>
          <textarea
            id="care-expectation"
            rows={3}
            value={formData.counselingExpectation}
            onChange={(e) => setFormData({ ...formData, counselingExpectation: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="상담을 통해 기대하는 변화나 도움을 적어주세요. (선택사항)"
          />
        </div>

        {/* 개인정보 동의 */}
        <PrivacyConsentSection
          checked={privacyConsent}
          onChange={setPrivacyConsent}
        />

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? '접수 중...' : '청년 응원 패키지 신청하기'}
        </Button>

        <p className="text-xs text-black-light/60 text-center break-keep">
          연간 선정 인원이 제한되어 있습니다. 심사 후 개별 안내드립니다.
        </p>
      </form>

      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="신청이 접수되었습니다"
        message={'내부 심사를 거쳐 선정 여부를 안내드립니다.\n선정 시 무료 상담 혜택이 제공됩니다.'}
      />
    </>
  );
}
