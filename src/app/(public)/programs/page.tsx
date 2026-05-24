import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';
import ProgramFilter from '@/components/programs/ProgramFilter';

export const metadata: Metadata = {
  title: '성장 프로그램',
  description: '자기이해, 퍼스널 브랜딩, 커리어 리디자인 등 다양한 성장 프로그램을 만나보세요.',
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Growth Programs
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                성장 프로그램
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                자기이해부터 커리어 설계까지, 체계적인 프로그램으로
                당신의 성장을 함께합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter + Program Cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProgramFilter />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Get Started
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                나에게 맞는 프로그램을 찾고 계신가요?
              </h2>
              <p className="mt-4 text-lg text-black-light">
                어떤 프로그램이 적합한지 고민되신다면,
                상담을 통해 맞춤 프로그램을 추천받아 보세요.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  프로그램 문의하기
                </Button>
                <Button href="/counseling" variant="outline" size="lg">
                  상담 먼저 받아보기
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
