'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import SuccessModal from '@/components/shared/SuccessModal';
import PrivacyConsentSection from './PrivacyConsentSection';
import { counselorsData } from '@/data/counselors';

const unresolvedIssueOptions = [
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
  '중독 (알코올/게임 등)',
  '트라우마/PTSD',
  '섭식문제',
  '수면문제',
  '자해/자살',
  '기타',
];

const referralOptions = [
  '본인 의뢰',
  '가족/지인 권유',
  '의료기관 의뢰',
  '학교/직장 의뢰',
  '정부기관 안내',
  '인터넷 검색',
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
    address: '',
    referral: '',
    preferredCounselor: '',
    unresolvedIssues: [] as string[],
    mainConcern: '',
    counselingExpectation: '',
    pastCounselingExperience: '',
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleIssueToggle = (issue: string) => {
    setFormData((prev) => ({
      ...prev,
      unresolvedIssues: prev.unresolvedIssues.includes(issue)
        ? prev.unresolvedIssues.filter((i) => i !== issue)
        : [...prev.unresolvedIssues, issue],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyConsent) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    if (formData.unresolvedIssues.length === 0) {
      alert('미해결 문제 유형을 하나 이상 선택해주세요.');
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
          address: '',
          referral: '',
          preferredCounselor: '',
          unresolvedIssues: [],
          mainConcern: '',
          counselingExpectation: '',
          pastCounselingExperience: '',
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
            <label htmlFor="gov-name" className="block text-sm font-medium text-black mb-2">
              내담자 성명 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="gov-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
              placeholder="홍길동"
            />
          </div>
          <div>
            <label htmlFor="gov-phone" className="block text-sm font-medium text-black mb-2">
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="gov-phone"
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
            <label htmlFor="gov-birthdate" className="block text-sm font-medium text-black mb-2">
              생년월일 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="gov-birthdate"
              required
              value={formData.birthdate}
              onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="gov-referral" className="block text-sm font-medium text-black mb-2">
              내방 경위 <span className="text-red-500">*</span>
            </label>
            <select
              id="gov-referral"
              required
              value={formData.referral}
              onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
              className={inputClass}
            >
              <option value="">선택해주세요</option>
              {referralOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 주소 */}
        <div>
          <label htmlFor="gov-address" className="block text-sm font-medium text-black mb-2">
            주소 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="gov-address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className={inputClass}
            placeholder="시/군/구 까지 입력해주세요"
          />
        </div>

        {/* 추천 상담사 */}
        <div>
          <label htmlFor="gov-counselor" className="block text-sm font-medium text-black mb-2">
            추천 상담사
            <span className="text-xs text-black-light/60 ml-2">(선택사항)</span>
          </label>
          <select
            id="gov-counselor"
            value={formData.preferredCounselor}
            onChange={(e) => setFormData({ ...formData, preferredCounselor: e.target.value })}
            className={inputClass}
          >
            <option value="">상담사를 선택해주세요 (선택사항)</option>
            {counselorsData.map((c) => (
              <option key={c.name} value={c.name}>{c.name} ({c.credentials})</option>
            ))}
          </select>
        </div>

        {/* 미해결 문제 유형 (multi-checkbox) */}
        <div>
          <label className="block text-sm font-medium text-black mb-3">
            미해결 문제 유형 <span className="text-red-500">*</span>
            <span className="text-xs text-black-light/60 ml-2">(복수 선택 가능)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {unresolvedIssueOptions.map((issue) => (
              <label
                key={issue}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-sm ${
                  formData.unresolvedIssues.includes(issue)
                    ? 'border-accent bg-accent/5 text-accent'
                    : 'border-beige-200 bg-white text-black-light hover:border-accent/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.unresolvedIssues.includes(issue)}
                  onChange={() => handleIssueToggle(issue)}
                  className="sr-only"
                />
                <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  formData.unresolvedIssues.includes(issue)
                    ? 'border-accent bg-accent'
                    : 'border-beige-200'
                }`}>
                  {formData.unresolvedIssues.includes(issue) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {issue}
              </label>
            ))}
          </div>
        </div>

        {/* 주 호소 문제 */}
        <div>
          <label htmlFor="gov-mainConcern" className="block text-sm font-medium text-black mb-2">
            주 호소 문제 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="gov-mainConcern"
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
          <label htmlFor="gov-expectation" className="block text-sm font-medium text-black mb-2">
            상담 기대 사항
          </label>
          <textarea
            id="gov-expectation"
            rows={3}
            value={formData.counselingExpectation}
            onChange={(e) => setFormData({ ...formData, counselingExpectation: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="상담을 통해 기대하는 변화나 도움을 적어주세요. (선택사항)"
          />
        </div>

        {/* 과거 상담 경험 */}
        <div>
          <label htmlFor="gov-pastExperience" className="block text-sm font-medium text-black mb-2">
            과거 상담 경험
          </label>
          <textarea
            id="gov-pastExperience"
            rows={3}
            value={formData.pastCounselingExperience}
            onChange={(e) => setFormData({ ...formData, pastCounselingExperience: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="이전에 상담을 받으신 경험이 있다면 적어주세요. (선택사항)"
          />
        </div>

        {/* 개인정보 동의 */}
        <PrivacyConsentSection
          checked={privacyConsent}
          onChange={setPrivacyConsent}
        />

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? '접수 중...' : '정부지원 상담 신청하기'}
        </Button>

        <p className="text-xs text-black-light/60 text-center break-keep">
          정부지원 바우처 상담은 내부 검토 후 자격 요건 및 진행 절차를 안내드립니다.
        </p>
      </form>

      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="정부지원 상담 신청이 접수되었습니다"
        message={'내부 검토 후 자격 요건 및\n진행 절차를 안내드리겠습니다.'}
      />
    </>
  );
}
