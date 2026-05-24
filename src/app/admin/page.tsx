'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DashboardStats {
  inquiries: number;
  unreadInquiries: number;
  reviews: number;
  bookings: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({ inquiries: 0, unreadInquiries: 0, reviews: 0, bookings: 0 });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [inquiriesRes, reviewsRes, bookingsRes] = await Promise.all([
          fetch('/api/inquiries'),
          fetch('/api/reviews'),
          fetch('/api/phone-bookings'),
        ]);

        const inquiries = await inquiriesRes.json();
        const reviews = await reviewsRes.json();
        const bookings = await bookingsRes.json();

        setStats({
          inquiries: inquiries.length,
          unreadInquiries: inquiries.filter((i: { isRead: boolean }) => !i.isRead).length,
          reviews: reviews.length,
          bookings: bookings.length,
        });
      } catch {
        // Silently handle fetch errors for dashboard
      }
    }
    fetchStats();
  }, []);

  const cards = [
    { label: '총 문의', value: stats.inquiries, sub: `읽지 않은 문의: ${stats.unreadInquiries}`, href: '/admin/inquiries', color: 'bg-blue-50 text-blue-600' },
    { label: '상담 후기', value: stats.reviews, sub: '게시 중인 후기', href: '/admin/reviews', color: 'bg-amber-50 text-amber-600' },
    { label: '전화 예약', value: stats.bookings, sub: '전화 상담 예약 건수', href: '/admin/inquiries', color: 'bg-green-50 text-green-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">대시보드</h1>
        <p className="text-black-light mt-1">도담상담센터 관리자 페이지에 오신 것을 환영합니다.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl border border-beige-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${card.color} text-sm font-bold mb-3`}>
              {card.value}
            </div>
            <h3 className="font-semibold text-black">{card.label}</h3>
            <p className="text-sm text-black-light mt-1">{card.sub}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-beige-200 p-6">
        <h2 className="font-semibold text-black mb-4">빠른 작업</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/admin/inquiries" className="px-4 py-3 bg-beige-50 rounded-lg text-sm text-center hover:bg-beige-100 transition-colors">
            문의 확인하기
          </Link>
          <Link href="/admin/reviews" className="px-4 py-3 bg-beige-50 rounded-lg text-sm text-center hover:bg-beige-100 transition-colors">
            후기 등록하기
          </Link>
          <Link href="/admin/counselors" className="px-4 py-3 bg-beige-50 rounded-lg text-sm text-center hover:bg-beige-100 transition-colors">
            상담사 관리
          </Link>
        </div>
      </div>
    </div>
  );
}
