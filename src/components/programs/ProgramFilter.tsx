'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const categories = ['전체', '자기이해', '자기개발', '브랜딩', '커리어', '소통', '마음챙김'];

const programs = [
  {
    title: '나를 알아가는 여행',
    category: '자기이해',
    description: '자기 탐색을 통해 나만의 강점과 가치를 발견하고, 진정한 나를 이해하는 여정입니다.',
    price: '120,000원',
    duration: '4주 과정',
    image: '/images/photos/seminar-9.jpg',
  },
  {
    title: '퍼스널 브랜딩 마스터클래스',
    category: '브랜딩',
    description: '나만의 브랜드를 구축하고 온·오프라인에서 영향력을 키우는 전략을 배웁니다.',
    price: '180,000원',
    duration: '6주 과정',
    image: '/images/photos/seminar-2.jpg',
  },
  {
    title: '감정 다루기 워크숍',
    category: '자기개발',
    description: '감정을 인식하고 건강하게 표현하는 방법을 배워 정서적 안정감을 높입니다.',
    price: '90,000원',
    duration: '3주 과정',
    image: '/images/photos/counseling-7.jpg',
  },
  {
    title: '커리어 리디자인',
    category: '커리어',
    description: '현재의 커리어를 점검하고 원하는 방향으로 재설계하는 실전 커리어 프로그램입니다.',
    price: '150,000원',
    duration: '5주 과정',
    image: '/images/photos/counseling-6.jpg',
  },
  {
    title: '관계의 기술',
    category: '소통',
    description: '건강한 대인관계를 위한 소통 방법과 경계 설정 기술을 체계적으로 학습합니다.',
    price: '100,000원',
    duration: '4주 과정',
    image: '/images/photos/seminar-7.jpg',
  },
  {
    title: '마인드풀니스 명상',
    category: '마음챙김',
    description: '매일 실천할 수 있는 마음챙김 명상을 통해 내면의 평화와 집중력을 기릅니다.',
    price: '80,000원',
    duration: '8주 과정',
    image: '/images/photos/meditation-mindfulness.jpg',
  },
];

export default function ProgramFilter() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredPrograms = activeCategory === '전체'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter Tabs */}
      <AnimatedSection>
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-accent text-white'
                  : 'bg-beige-100 text-black-light hover:bg-beige-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Program Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program, index) => (
          <AnimatedSection key={program.title} delay={index * 0.08}>
            <div className="group rounded-2xl border border-beige-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Image */}
              <div className="relative overflow-hidden">
                <div
                  className="aspect-[16/10] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${program.image}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-accent rounded-full">
                    {program.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black group-hover:text-accent transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-black-light leading-relaxed line-clamp-2">
                  {program.description}
                </p>

                {/* Meta */}
                <div className="mt-5 flex items-center justify-between pt-5 border-t border-beige-100">
                  <span className="text-lg font-bold text-black">
                    {program.price}
                  </span>
                  <span className="text-sm text-black-light">
                    {program.duration}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
