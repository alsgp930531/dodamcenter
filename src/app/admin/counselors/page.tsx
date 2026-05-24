'use client';

import { useState } from 'react';
import { counselorsData } from '@/data/counselors';

export default function AdminCounselorsPage() {
  const [counselors] = useState(counselorsData);
  const [search, setSearch] = useState('');

  const filtered = counselors.filter(
    (c) =>
      c.name.includes(search) ||
      c.credentials.includes(search) ||
      c.specialty.some((s) => s.includes(search))
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">상담사 관리</h1>
          <p className="text-black-light mt-1">총 {counselors.length}명의 상담사가 등록되어 있습니다.</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 rounded-lg border border-beige-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          placeholder="이름, 자격증, 전문분야로 검색..."
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-beige-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-beige-200 bg-beige-50">
                <th className="text-left py-3 px-4 text-xs font-semibold text-black-light uppercase">#</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-black-light uppercase">이름</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-black-light uppercase">자격증</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-black-light uppercase">학력</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-black-light uppercase">전문분야</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-black-light uppercase">경력</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((counselor, index) => (
                <tr key={counselor.name} className="border-b border-beige-200 last:border-0 hover:bg-beige-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-beige-300">{index + 1}</td>
                  <td className="py-3 px-4 text-sm font-medium text-black">{counselor.name}</td>
                  <td className="py-3 px-4 text-sm text-accent">{counselor.credentials}</td>
                  <td className="py-3 px-4 text-xs text-black-light">{counselor.education}</td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {counselor.specialty.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-beige-50 text-black-light">{s}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-black-light">{counselor.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
