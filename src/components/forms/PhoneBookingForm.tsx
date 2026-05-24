'use client';

import { useState } from 'react';
import Button from '@/components/shared/Button';

const timeSlots = [
  '09:00', '10:00', '11:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export default function PhoneBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    note: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/phone-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', preferredDate: '', preferredTime: '', note: '' });
      } else {
        alert('예약 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('예약 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-black mb-3">전화 상담 예약이 완료되었습니다</h3>
        <p className="text-black-light mb-6">예약하신 시간에 연락드리겠습니다.</p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" size="sm">
          추가 예약
        </Button>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium text-black mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="booking-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-medium text-black mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="booking-phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
            placeholder="010-1234-5678"
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="preferred-date" className="block text-sm font-medium text-black mb-2">
            희망 날짜 <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="preferred-date"
            required
            min={today}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="preferred-time" className="block text-sm font-medium text-black mb-2">
            희망 시간 <span className="text-red-500">*</span>
          </label>
          <select
            id="preferred-time"
            required
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
          >
            <option value="">선택해주세요</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-note" className="block text-sm font-medium text-black mb-2">
          메모 (선택)
        </label>
        <textarea
          id="booking-note"
          rows={3}
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-beige-200 bg-white text-black placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
          placeholder="간단한 메모를 남겨주세요."
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '예약 중...' : '전화 상담 예약하기'}
      </Button>
    </form>
  );
}
