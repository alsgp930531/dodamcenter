import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: '심리검사',
  description: '종합심리검사, 성격검사, 지능검사, 정서검사 등 전문 심리검사 서비스를 제공합니다.',
};

const tests = [
  {
    title: '종합심리검사',
    description: '성격, 정서, 인지 기능 종합 평가',
    details:
      '다양한 심리검사 도구를 활용하여 개인의 성격 특성, 정서 상태, 인지 기능 등을 종합적으로 평가합니다. 자기 이해를 높이고 맞춤 상담 방향을 설정하는 데 도움이 됩니다.',
    price: '300,000원',
    duration: '약 3시간',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: '성격검사 (MMPI-2)',
    description: '성격 특성 및 심리적 적응 수준 평가',
    details:
      '미네소타 다면적 인성검사를 통해 성격 구조, 심리적 적응 수준, 행동 특성 등을 객관적으로 평가합니다. 자기 성격에 대한 깊은 이해를 제공합니다.',
    price: '100,000원',
    duration: '약 1시간',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: '지능검사 (K-WAIS)',
    description: '인지 기능과 지적 능력 평가',
    details:
      '한국판 웩슬러 성인 지능검사를 통해 언어 이해, 지각 추론, 작업 기억, 처리 속도 등 인지 기능을 다각적으로 평가합니다.',
    price: '150,000원',
    duration: '약 2시간',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: '정서검사',
    description: '우울, 불안 등 정서 상태 평가',
    details:
      '표준화된 심리검사 도구를 활용하여 우울, 불안, 스트레스 등 현재 정서 상태를 체계적으로 평가하고 적합한 상담 방향을 제시합니다.',
    price: '80,000원',
    duration: '약 1시간',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: '예약 신청',
    description: '온라인 또는 전화를 통해 검사 일정을 예약합니다.',
  },
  {
    step: '02',
    title: '검사 실시',
    description: '센터를 방문하여 전문가의 안내에 따라 검사를 진행합니다.',
  },
  {
    step: '03',
    title: '결과 분석',
    description: '전문 심리사가 검사 결과를 종합적으로 분석합니다.',
  },
  {
    step: '04',
    title: '해석 상담',
    description: '검사 결과를 바탕으로 1:1 해석 상담을 진행합니다.',
  },
];

export default function TestingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Psychological Testing
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                심리검사
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                검사에 기반한 정확한 진단은 더 깊은 상담의 출발점이 됩니다.
                표준화된 심리검사와 전문 분석을 통해 현재의 어려움을 객관적으로 이해하고,
                맞춤형 상담으로 연결합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Available Tests */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Tests
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                검사 종류 안내
              </h2>
              <p className="mt-4 text-lg text-black-light">
                전문 심리사가 직접 실시하고 해석하는 표준화된 심리검사입니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tests.map((test, index) => (
              <AnimatedSection key={test.title} delay={index * 0.1}>
                <div className="group h-full rounded-2xl border border-beige-200 bg-white p-6 md:p-8 transition-all duration-300 hover:bg-dark hover:shadow-lg hover:-translate-y-1">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-beige-50 group-hover:bg-accent flex items-center justify-center text-accent group-hover:text-white shrink-0 transition-all duration-300">
                      {test.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">
                        {test.title}
                      </h3>
                      <p className="text-sm text-accent font-medium mt-0.5">
                        {test.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="text-sm text-black-light group-hover:text-white/70 transition-colors duration-300 leading-relaxed mb-5">
                    {test.details}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between pt-5 border-t border-beige-100 group-hover:border-white/20 transition-colors duration-300">
                    <span className="text-lg font-bold text-black group-hover:text-accent transition-colors duration-300">
                      {test.price}
                    </span>
                    <span className="text-sm text-black-light group-hover:text-white/70 bg-beige-50 group-hover:bg-white/10 px-3 py-1 rounded-full transition-all duration-300">
                      {test.duration}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Process
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                검사 진행 과정
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.12}>
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mx-auto mb-5">
                    {item.step}
                  </div>

                  {/* Connector Line (hidden on last item and mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-beige-200" />
                  )}

                  <h3 className="text-lg font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application / CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Apply
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                심리검사 신청 안내
              </h2>
              <p className="mt-6 text-lg text-black-light leading-relaxed">
                심리검사는 대면으로 진행됩니다.
                정확한 검사와 전문적인 해석을 위해 센터를 직접 방문해 주세요.
                검사 후 결과 해석 상담이 포함되어 있습니다.
              </p>
              <div className="mt-4 text-sm text-black-light">
                <p>검사 예약 후 방문 일정을 안내드립니다.</p>
                <p>검사 결과는 약 1~2주 내에 해석 상담을 통해 전달됩니다.</p>
              </div>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  검사 예약 신청하기
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
