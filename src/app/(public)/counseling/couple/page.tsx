import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: '커플상담',
  description:
    '연인 간의 소통 문제, 신뢰 회복, 갈등 해결을 위한 전문 커플상담. 건강한 관계를 함께 만들어 갑니다.',
};

const features = [
  {
    title: '관계 패턴 분석',
    description:
      '두 사람 사이에서 반복되는 갈등의 패턴을 객관적으로 살펴봅니다. 서로의 욕구와 감정을 이해하는 것에서 변화가 시작됩니다.',
  },
  {
    title: '소통 기술 훈련',
    description:
      '비폭력 대화법, 감정 표현 훈련, 경청 기술 등 실질적인 소통 방법을 배우고 연습합니다. 상담실 안에서 직접 실습합니다.',
  },
  {
    title: '신뢰 회복 프로그램',
    description:
      '깨진 신뢰를 다시 쌓아가는 것은 시간과 노력이 필요합니다. 체계적인 과정을 통해 안전한 관계를 재건합니다.',
  },
  {
    title: '미래 설계 지원',
    description:
      '결혼, 동거, 장기적인 관계 유지 등 두 사람의 미래에 대해 함께 이야기하고 현실적인 계획을 세울 수 있도록 돕습니다.',
  },
];

const process = [
  {
    step: '01',
    title: '접수',
    description: '두 분이 함께 또는 개별적으로 상담을 신청합니다. 관계 상황에 대한 사전 설문을 작성합니다.',
  },
  {
    step: '02',
    title: '초기상담',
    description:
      '각자의 이야기를 충분히 듣고 관계 역동을 파악합니다. 함께 달성하고 싶은 상담 목표를 설정합니다.',
  },
  {
    step: '03',
    title: '본상담',
    description:
      '갈등의 근본 원인을 탐색하고, 새로운 소통 방식을 연습합니다. 필요시 개별 세션을 병행합니다.',
  },
  {
    step: '04',
    title: '마무리',
    description:
      '변화된 관계 양상을 정리하고, 앞으로의 관계 유지를 위한 실천 과제를 함께 만듭니다.',
  },
];

const targets = [
  '대화가 자꾸 싸움으로 번져 소통이 어려운 커플',
  '같은 문제로 반복적인 갈등을 겪고 있는 분들',
  '신뢰가 깨져 관계 회복이 필요한 분들',
  '결혼을 앞두고 관계를 점검하고 싶은 예비부부',
  '서로의 가치관 차이로 방향을 잃은 커플',
  '권태기를 겪으며 관계에 대한 의미를 찾고 싶은 분들',
  '이별을 고민하며 관계를 객관적으로 바라보고 싶은 분들',
];

export default function CoupleCounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Couple Counseling
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                커플상담
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                사랑하는 사이에도 상처는 생깁니다.
                전문 상담사와 함께 서로를 더 깊이 이해하고,
                건강한 관계를 다시 만들어 가세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                What We Offer
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                커플상담이란?
              </h2>
              <p className="mt-4 text-lg text-black-light max-w-2xl mx-auto">
                커플상담은 두 사람이 함께 상담에 참여하여 관계 속 어려움을 탐색하고,
                더 나은 소통 방법을 찾아가는 과정입니다. 제3자인 상담사가 중립적인 시각으로
                두 사람의 관계를 함께 바라보며 변화를 이끌어 냅니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-beige-50 rounded-2xl p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                  <p className="text-black-light leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Process
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                상담 진행 과정
              </h2>
              <p className="mt-4 text-lg text-black-light">
                두 사람의 관계를 함께 돌보는 체계적인 과정입니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.15}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-beige-200" />
                  )}
                  <h3 className="text-lg font-semibold text-black mb-3">{item.title}</h3>
                  <p className="text-sm text-black-light leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Who Is It For
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black leading-tight">
                이런 분들께<br />커플상담을 추천합니다
              </h2>
              <p className="mt-4 text-black-light leading-relaxed">
                관계의 어려움은 혼자 해결하기 어렵습니다.
                두 사람이 함께 노력할 때 비로소 진정한 변화가 시작됩니다.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <ul className="space-y-4">
                {targets.map((target, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-black-light leading-relaxed">{target}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Pricing
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">
                상담 비용 안내
              </h2>
              <div className="group/price mt-10 bg-white rounded-3xl p-10 md:p-12 transition-all duration-300 hover:bg-dark">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                  120,000<span className="text-xl sm:text-2xl md:text-3xl font-medium">원</span>
                </div>
                <div className="mt-3 text-lg text-black-light group-hover/price:text-white/70 transition-colors duration-300">1회 / 80분</div>
                <div className="mt-6 w-full h-px bg-beige-200 group-hover/price:bg-white/20 transition-colors duration-300" />
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    두 분이 함께하는 커플 세션
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    관계 역동 분석 및 피드백
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    소통 기술 실습 및 과제 제공
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    필요시 개별 세션 병행 가능
                  </li>
                </ul>
                <div className="mt-8">
                  <Button href="/contact" size="lg">
                    상담 예약하기
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                함께라서 가능한<br />변화가 있습니다
              </h2>
              <p className="mt-6 text-lg text-beige-200 max-w-xl mx-auto">
                관계에 대한 고민을 더 이상 혼자 안고 있지 마세요.
                도담상담센터가 두 사람의 더 나은 내일을 함께 만들어 갑니다.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  상담 문의하기
                </Button>
                <Button href="/counseling" variant="custom" size="lg" className="border border-beige-200 text-beige-200 hover:bg-beige-200 hover:text-black">
                  전체 상담 보기
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
