'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

const packages = [
  {
    title: '마음 성장 패키지',
    description: '개인상담 + 자기성장 프로그램을 결합한 종합 패키지',
    items: ['개인상담 4회', '자기성장 워크숍 2회', '심리검사 1회', '맞춤 성장 보고서'],
    price: 350000,
    originalPrice: 450000,
    isGovSupported: false,
    highlight: false,
  },
  {
    title: '추천 패키지',
    badge: '정부지원 대상',
    description: '정부지원 사업 추천 대상자로 선정 시 무료로 제공되는 프리미엄 패키지',
    items: ['개인상담 8회', '그룹상담 4회', '퍼스널 브랜딩 프로그램', '심리검사 2회', '1:1 커리어 코칭', '사후 관리 3개월'],
    price: 0,
    originalPrice: 800000,
    isGovSupported: true,
    highlight: true,
  },
  {
    title: '커플 성장 패키지',
    description: '커플상담과 개인 성장을 동시에 진행하는 패키지',
    items: ['커플상담 4회', '개인상담 각 2회', '관계 진단 검사', '커뮤니케이션 워크숍'],
    price: 480000,
    originalPrice: 600000,
    isGovSupported: false,
    highlight: false,
  },
];

export default function RecommendedPackage() {
  return (
    <section className="py-24 md:py-32 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Packages</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">추천 패키지</h2>
            <p className="mt-4 text-lg text-black-light max-w-2xl mx-auto">
              개별 서비스를 결합한 패키지로 더 큰 변화를 경험하세요.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.title} delay={index * 0.15}>
              <div className={`group relative rounded-2xl p-5 sm:p-6 md:p-8 h-full flex flex-col transition-all duration-300 bg-white hover:bg-dark ${
                pkg.highlight ? 'border-2 border-accent' : 'border border-beige-200'
              }`}>
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">
                  {pkg.title}
                </h3>
                <p className="text-sm mb-6 text-black-light group-hover:text-white/70 transition-colors duration-300">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  {pkg.isGovSupported ? (
                    <div>
                      <span className="text-3xl font-bold text-accent">무료</span>
                      <span className="ml-2 text-sm line-through text-black-light group-hover:text-white/50 transition-colors duration-300">
                        {pkg.originalPrice.toLocaleString()}원
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold text-black group-hover:text-accent transition-colors duration-300">
                        {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-sm ml-1 text-black-light group-hover:text-white/70 transition-colors duration-300">원</span>
                      {pkg.originalPrice > pkg.price && (
                        <span className="ml-2 text-sm line-through text-black-light group-hover:text-white/50 transition-colors duration-300">
                          {pkg.originalPrice.toLocaleString()}원
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-black-light group-hover:text-white/80 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {pkg.isGovSupported ? (
                  <Button href="/contact" variant="primary" className="w-full">
                    무료 대상 확인 신청
                  </Button>
                ) : (
                  <Button href="/contact" variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                    패키지 신청
                  </Button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
