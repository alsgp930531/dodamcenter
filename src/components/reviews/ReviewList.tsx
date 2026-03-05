'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ReviewCard from '@/components/reviews/ReviewCard';

interface Review {
  id: string;
  clientInitial: string;
  counselingType: string;
  content: string;
  rating: number;
  createdAt: string;
}

const ITEMS_PER_PAGE = 8;

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentReviews = reviews.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentReviews.map((review, index) => (
          <AnimatedSection key={review.id} delay={index * 0.06}>
            <ReviewCard {...review} />
          </AnimatedSection>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm rounded-full border border-beige-200 text-black-light hover:bg-beige-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            이전
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 text-sm rounded-full transition-colors ${
                currentPage === i + 1
                  ? 'bg-accent text-white'
                  : 'text-black-light hover:bg-beige-50 border border-beige-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm rounded-full border border-beige-200 text-black-light hover:bg-beige-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            다음
          </button>
        </div>
      )}
    </>
  );
}
