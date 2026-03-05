'use client';

import { motion } from 'framer-motion';
import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';

const programs = [
  {
    title: '나를 알아가는 여행',
    category: '자기이해',
    image: '/images/photos/seminar-9.jpg',
    description: '심리검사와 상담을 통해 진정한 나를 발견하는 8주 프로그램',
    details: '매주 토요일 · 8주 과정',
    href: '/programs',
  },
  {
    title: '퍼스널 브랜딩 마스터클래스',
    category: '브랜딩',
    image: '/images/photos/seminar-2.jpg',
    imagePosition: '75% center',
    description: '나만의 강점을 찾고 브랜드를 만드는 마스터클래스',
    details: '월 2회 · 6주 과정',
    href: '/programs',
  },
  {
    title: '커리어 리디자인',
    category: '커리어',
    image: '/images/photos/seminar-3.jpg',
    description: '전문가와 함께 커리어 방향을 재설계하는 프로그램',
    details: '주중 저녁 · 4주 과정',
    href: '/programs',
  },
  {
    title: '마음 챙김 워크숍',
    category: '웰니스',
    image: '/images/photos/seminar-10.jpg',
    imagePosition: '25% center',
    description: '명상과 마음챙김을 통한 스트레스 관리 프로그램',
    details: '매주 수요일 · 상시 운영',
    href: '/programs',
  },
  {
    title: '관계의 기술',
    category: '관계',
    image: '/images/photos/seminar-7.jpg',
    description: '건강한 대인관계를 위한 소통 기술 워크숍',
    details: '격주 토요일 · 6주 과정',
    href: '/programs',
  },
];

export default function ProgramPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const navigate = useCallback((direction: 'left' | 'right') => {
    setActiveIndex((prev) => {
      if (direction === 'left') return Math.max(0, prev - 1);
      return Math.min(programs.length - 1, prev + 1);
    });
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      navigate(diff > 0 ? 'right' : 'left');
    }
  }, [navigate]);

  return (
    <section className="bg-beige-50 relative overflow-hidden">
      {/* Background marquee text (very subtle) */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-[0.04]">
        <div
          className="animate-marquee flex whitespace-nowrap"
          style={{ '--marquee-duration': '80s' } as React.CSSProperties}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="text-[80px] md:text-[120px] font-bold mx-6 text-black select-none"
            >
              YOUTH GROWTH PROJECT
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] tracking-[0.4em] text-accent uppercase">
              Growth Programs
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              성장 프로그램
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-3"
          >
            <button
              onClick={() => navigate('left')}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border border-beige-300 flex items-center justify-center hover:bg-dark hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-current"
              aria-label="이전 슬라이드"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => navigate('right')}
              disabled={activeIndex === programs.length - 1}
              className="w-12 h-12 rounded-full border border-beige-300 flex items-center justify-center hover:bg-dark hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-default disabled:hover:bg-transparent disabled:hover:text-current"
              aria-label="다음 슬라이드"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        className="relative pb-16 md:pb-20 z-10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative mx-auto flex justify-center items-center h-[300px] sm:h-[340px] md:h-[420px] lg:h-[470px]"
          style={{ perspective: '1200px' }}
        >
          {programs.map((program, index) => {
            const diff = index - activeIndex;
            const absDiff = Math.abs(diff);
            const isActive = diff === 0;
            const isVisible = absDiff <= 2;

            return (
              <motion.div
                key={program.title}
                animate={{
                  x: `${diff * 82}%`,
                  scale: isActive ? 1 : absDiff === 1 ? 0.82 : 0.68,
                  rotateY: diff * -8,
                  opacity: isVisible
                    ? isActive ? 1 : absDiff === 1 ? 0.5 : 0.25
                    : 0,
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  zIndex: isVisible ? 10 - absDiff : 0,
                  transformStyle: 'preserve-3d',
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                className={`absolute w-[230px] sm:w-[260px] md:w-[320px] lg:w-[360px] ${!isActive ? 'cursor-pointer' : ''}`}
                onClick={() => !isActive && setActiveIndex(index)}
              >
                <div className={!isActive ? 'pointer-events-none' : ''}>
                  <div className="flip-card aspect-[4/5]">
                    <div className="flip-card-inner">
                      {/* Front - Image */}
                      <div className="flip-card-front rounded-2xl overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover"
                          style={{
                            backgroundImage: `url('${program.image}')`,
                            backgroundPosition: program.imagePosition || 'center',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-dark/15 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            {program.category}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-8 left-8 right-8">
                          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            {program.title}
                          </h3>
                        </div>
                      </div>

                      {/* Back - Info */}
                      <div className="flip-card-back bg-accent/90 rounded-2xl flex flex-col justify-between p-8">
                        <div>
                          <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">
                            {program.category}
                          </span>
                          <h3 className="mt-3 text-xl md:text-2xl font-bold text-white leading-tight">
                            {program.title}
                          </h3>
                          <p className="mt-4 text-sm text-white/70 leading-relaxed">
                            {program.description}
                          </p>
                          <p className="mt-3 text-xs text-white/50">
                            {program.details}
                          </p>
                        </div>

                        <Link
                          href={program.href}
                          className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors group"
                        >
                          View More
                          <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l4 4m0 0l-4 4m4-4H8" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8 pb-8">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-accent w-6'
                  : 'bg-beige-300 w-2 hover:bg-beige-400'
              }`}
              aria-label={`프로그램 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
