'use client';

import { useEffect, useState } from 'react';
import { Review } from '@/types';

const counselingTypes = ['개인상담', '커플상담', '가족상담', '그룹상담', '성장 프로그램'];

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [form, setForm] = useState({
    clientInitial: '',
    counselingType: '개인상담',
    content: '',
    rating: 5,
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const res = await fetch('/api/reviews');
    const data = await res.json();
    setReviews(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (editingReview) {
      await fetch('/api/reviews', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingReview.id, ...form }),
      });
    } else {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }

    setForm({ clientInitial: '', counselingType: '개인상담', content: '', rating: 5 });
    setShowForm(false);
    setEditingReview(null);
    fetchReviews();
  }

  async function handleDelete(id: string) {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await fetch(`/api/reviews?id=${id}`, { method: 'DELETE' });
    fetchReviews();
  }

  function handleEdit(review: Review) {
    setEditingReview(review);
    setForm({
      clientInitial: review.clientInitial,
      counselingType: review.counselingType,
      content: review.content,
      rating: review.rating,
    });
    setShowForm(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black">후기 관리</h1>
          <p className="text-black-light mt-1">상담 후기를 등록하고 관리합니다.</p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setEditingReview(null); setForm({ clientInitial: '', counselingType: '개인상담', content: '', rating: 5 }); }}
          className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer"
        >
          {showForm ? '취소' : '+ 후기 등록'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-beige-200 p-6 mb-8">
          <h2 className="font-semibold text-black mb-4">{editingReview ? '후기 수정' : '새 후기 등록'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">내담자 이니셜</label>
                <input
                  type="text"
                  required
                  value={form.clientInitial}
                  onChange={(e) => setForm({ ...form, clientInitial: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-beige-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="김○○"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">상담 유형</label>
                <select
                  value={form.counselingType}
                  onChange={(e) => setForm({ ...form, counselingType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-beige-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  {counselingTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">평점</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-lg border border-beige-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  {[5, 4.5, 4, 3.5, 3].map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">후기 내용</label>
              <textarea
                required
                rows={4}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-beige-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                placeholder="후기 내용을 입력하세요."
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors cursor-pointer">
              {editingReview ? '수정하기' : '등록하기'}
            </button>
          </form>
        </div>
      )}

      {/* Review List */}
      {reviews.length === 0 ? (
        <div className="bg-white rounded-xl border border-beige-200 p-12 text-center">
          <p className="text-black-light">등록된 후기가 없습니다. 위 버튼을 눌러 첫 번째 후기를 등록하세요.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl border border-beige-200 p-5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-black">{review.clientInitial}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-beige-50 text-accent">{review.counselingType}</span>
                    <span className="text-xs text-beige-300">★ {review.rating}</span>
                  </div>
                  <p className="text-sm text-black-light">{review.content}</p>
                  <p className="text-xs text-beige-300 mt-2">{new Date(review.createdAt).toLocaleDateString('ko-KR')}</p>
                </div>
                <div className="flex items-center gap-2 ml-4 shrink-0">
                  <button
                    onClick={() => handleEdit(review)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-beige-50 text-black-light hover:bg-beige-100 transition-colors cursor-pointer"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors cursor-pointer"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
