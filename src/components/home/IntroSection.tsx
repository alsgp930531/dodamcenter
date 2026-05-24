'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: '진심 어린 공감',
    description: '당신의 이야기를 있는 그대로 받아들이고, 깊이 공감하며 함께합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: '실질적 변화',
    description: '단순 상담을 넘어 삶에서 실제로 변화를 만들어내는 방법을 제시합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: '성장의 동반자',
    description: '청년의 심리적 안정과 자기성장, 커리어 발전까지 함께 설계합니다.',
  },
];

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
              마음의 변화가<br />시작되는 곳
            </h2>
            <p className="mt-6 text-lg text-black-light max-w-2xl mx-auto leading-relaxed">
              도담상담센터는 20~30대 청년의 심리적 건강과 성장을 전문적으로 지원합니다.
              검증된 상담사와 체계적인 프로그램으로 당신만의 변화를 이끌어냅니다.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.15}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-beige-100 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-black-light leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
