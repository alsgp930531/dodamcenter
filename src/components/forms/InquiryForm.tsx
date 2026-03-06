'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';
import SuccessModal from '@/components/shared/SuccessModal';

const counselingOptions = [
  '개인상담',
  '커플상담',
  '가족상담',
  '그룹상담',
  '성장 프로그램',
  '심리검사 - 종합심리검사',
  '심리검사 - 성격검사 (MMPI-2)',
  '심리검사 - 지능검사 (K-WAIS)',
  '심리검사 - 정서검사',
  '기업심리(EAP)',
  '추천 패키지 (정부지원)',
  '기타',
];

function getSuccessContent(counselingType: string): { title: string; message: string } {
  if (counselingType.startsWith('심리검사')) {
    return {
      title: '심리검사 신청이 접수되었습니다',
      message: '검사 일정 및 안내를 1~2일 이내 연락드리겠습니다.',
    };
  }
  switch (counselingType) {
    case '성장 프로그램':
      return {
        title: '프로그램 신청이 접수되었습니다',
        message: '프로그램 일정 및 참여 안내를 빠른 시일 내 연락드리겠습니다.',
      };
    case '추천 패키지 (정부지원)':
      return {
        title: '신청이 접수되었습니다',
        message: '정부지원 프로그램은 내부 검토 후 자격 요건 및 진행 절차를 안내드리겠습니다.',
      };
    case '기업심리(EAP)':
      return {
        title: '기업심리 문의가 접수되었습니다',
        message: '맞춤 프로그램 구성을 위해 담당자가 별도 연락드리겠습니다.',
      };
    case '기타':
      return {
        title: '문의가 접수되었습니다',
        message: '확인 후 빠른 시일 내 연락드리겠습니다.',
      };
    default:
      // 개인상담, 커플상담, 가족상담, 그룹상담
      return {
        title: '상담 신청이 접수되었습니다',
        message: '담당 상담사가 1~2일 이내 연락드리겠습니다.\n편안한 마음으로 기다려주세요.',
      };
  }
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    counselingType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successContent, setSuccessContent] = useState({ title: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessContent(getSuccessContent(formData.counselingType));
        setModalOpen(true);
        setFormData({ name: '', phone: '', email: '', counselingType: '', message: '' });
      } else {
        alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              placeholder="홍길동"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              placeholder="010-1234-5678"
              inputMode="numeric"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            이메일
          </label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="email@example.com (선택사항)"
          />
        </div>

        <div>
          <label htmlFor="counselingType" className="block text-sm font-medium text-black mb-2">
            상담 유형 <span className="text-red-500">*</span>
          </label>
          <select
            id="counselingType"
            required
            value={formData.counselingType}
            onChange={(e) => setFormData({ ...formData, counselingType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
          >
            <option value="">선택해주세요</option>
            {counselingOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            상담 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
            placeholder="상담받고 싶은 내용을 자유롭게 적어주세요."
          />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? '접수 중...' : '상담 문의하기'}
        </Button>

        <p className="text-xs text-black-light/60 text-center">
          제출하신 개인정보는 상담 목적으로만 사용되며, 상담 종료 후 안전하게 폐기됩니다.
        </p>
      </form>

      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={successContent.title}
        message={successContent.message}
      />
    </>
  );
}
