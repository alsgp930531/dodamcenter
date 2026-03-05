import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import CounselorCard from '@/components/counselors/CounselorCard';
import { counselorsData } from '@/data/counselors';

export const metadata: Metadata = {
  title: '전문 상담사',
  description: '도담상담센터의 전문 상담사를 소개합니다. 석·박사 학위와 공인 자격증을 보유한 전문가들이 함께합니다.',
};

export default function CounselorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Our Counselors</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                전문 상담사
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                석·박사 학위와 공인 자격증을 보유한 {counselorsData.length}명의 전문 상담사가
                당신의 성장을 함께합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Counselors Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {counselorsData.map((counselor, index) => (
              <AnimatedSection key={counselor.name} delay={(index % 6) * 0.08}>
                <CounselorCard {...counselor} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
