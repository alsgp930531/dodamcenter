'use client';

import { useState } from 'react';

interface PrivacyConsentSectionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PrivacyConsentSection({ checked, onChange }: PrivacyConsentSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-beige-200 bg-white overflow-hidden">
      {/* Toggle to show/hide full text */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer hover:bg-beige-50 transition-colors"
      >
        <span className="text-sm font-medium text-black">
          개인정보 수집 및 이용 동의 <span className="text-red-500">*</span>
        </span>
        <svg
          className={`w-4 h-4 text-black-light/50 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Collapsible content */}
      {isExpanded && (
        <div className="px-4 pb-3 border-t border-beige-200">
          <div className="mt-3 max-h-48 overflow-y-auto text-xs text-black-light/70 leading-relaxed space-y-2 pr-2">
            <p className="font-medium text-black text-sm">개인정보 보유/이용 및 상담 동의서</p>
            <p>
              도담상담센터는 상담 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용합니다.
            </p>
            <p><span className="font-medium text-black">1. 수집 항목:</span> 성명, 연락처, 생년월일, 주소, 이메일(선택), 상담 내용</p>
            <p><span className="font-medium text-black">2. 수집 목적:</span> 상담 접수 및 진행, 상담 일정 안내, 사후 관리</p>
            <p><span className="font-medium text-black">3. 보유 기간:</span> 상담 종료 후 3년 (관련 법령에 따름). 단, 동의 철회 시 즉시 파기합니다.</p>
            <p><span className="font-medium text-black">4. 동의 거부 권리:</span> 개인정보 수집·이용에 동의하지 않을 권리가 있으며, 동의 거부 시 상담 신청이 제한될 수 있습니다.</p>
            <p>
              상담 과정에서 수집된 모든 정보는 비밀이 보장되며,
              상담 목적 외 다른 용도로 사용되지 않습니다.
              단, 내담자 본인 또는 타인의 생명·안전에 위험이 있는 경우
              관련 법률에 따라 제한적으로 공개될 수 있습니다.
            </p>
          </div>
        </div>
      )}

      {/* Checkbox */}
      <div className={`px-4 py-3 ${isExpanded ? 'border-t border-beige-200' : ''}`}>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 rounded border-beige-200 text-accent focus:ring-accent/50 cursor-pointer"
          />
          <span className="text-sm text-black-light">
            위 개인정보 수집 및 이용에 동의합니다.
          </span>
        </label>
      </div>
    </div>
  );
}
