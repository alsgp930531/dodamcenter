'use client';

import { useEffect, useState } from 'react';
import { Inquiry } from '@/types';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    const res = await fetch('/api/inquiries');
    const data = await res.json();
    setInquiries(data.sort((a: Inquiry, b: Inquiry) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  }

  async function markAsRead(id: string) {
    await fetch(`/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isRead: true }),
    });
    fetchInquiries();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">문의 관리</h1>
        <p className="text-black-light mt-1">접수된 상담 문의를 확인하고 관리합니다.</p>
      </div>

      {inquiries.length === 0 ? (
        <div className="bg-white rounded-xl border border-beige-200 p-12 text-center">
          <p className="text-black-light">접수된 문의가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* List */}
          <div className="space-y-3">
            {inquiries.map((inquiry) => (
              <button
                key={inquiry.id}
                onClick={() => { setSelectedInquiry(inquiry); markAsRead(inquiry.id); }}
                className={`w-full text-left bg-white rounded-xl border p-4 transition-all hover:shadow-md cursor-pointer ${
                  selectedInquiry?.id === inquiry.id ? 'border-accent ring-1 ring-accent' : 'border-beige-200'
                } ${!inquiry.isRead ? 'border-l-4 border-l-accent' : ''}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-black">{inquiry.name}</span>
                  <span className="text-xs text-beige-300">{new Date(inquiry.createdAt).toLocaleDateString('ko-KR')}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-beige-50 text-accent">{inquiry.counselingType}</span>
                  {!inquiry.isRead && <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-white">새 문의</span>}
                </div>
                <p className="text-sm text-black-light line-clamp-1">{inquiry.message}</p>
              </button>
            ))}
          </div>

          {/* Detail */}
          {selectedInquiry ? (
            <div className="bg-white rounded-xl border border-beige-200 p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-black mb-4">문의 상세</h2>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-beige-300 uppercase">이름</span>
                  <p className="text-black font-medium">{selectedInquiry.name}</p>
                </div>
                <div>
                  <span className="text-xs text-beige-300 uppercase">연락처</span>
                  <p className="text-black">{selectedInquiry.phone}</p>
                </div>
                {selectedInquiry.email && (
                  <div>
                    <span className="text-xs text-beige-300 uppercase">이메일</span>
                    <p className="text-black">{selectedInquiry.email}</p>
                  </div>
                )}
                <div>
                  <span className="text-xs text-beige-300 uppercase">상담 유형</span>
                  <p className="text-accent font-medium">{selectedInquiry.counselingType}</p>
                </div>
                <div>
                  <span className="text-xs text-beige-300 uppercase">내용</span>
                  <p className="text-black-light whitespace-pre-wrap leading-relaxed">{selectedInquiry.message}</p>
                </div>
                <div>
                  <span className="text-xs text-beige-300 uppercase">접수일</span>
                  <p className="text-black-light">{new Date(selectedInquiry.createdAt).toLocaleString('ko-KR')}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-beige-200 p-12 text-center flex items-center justify-center">
              <p className="text-black-light">문의를 선택하면 상세 내용을 확인할 수 있습니다.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
