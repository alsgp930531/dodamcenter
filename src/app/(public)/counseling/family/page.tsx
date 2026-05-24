import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: '가족상담',
  description:
    '가족 간 갈등 해결, 세대 간 소통, 부모-자녀 관계 개선을 위한 전문 가족상담. 건강한 가족 관계를 회복합니다.',
};

const features = [
  {
    title: '가족 역동 이해',
    description:
      '가족 구성원 각자의 역할과 관계 패턴을 체계적으로 분석합니다. 눈에 보이지 않던 가족 내 역동을 이해하는 것이 변화의 출발점입니다.',
  },
  {
    title: '세대 간 소통 회복',
    description:
      '부모와 자녀 세대 사이의 가치관 차이, 소통 방식의 차이를 인정하고 서로를 이해할 수 있는 대화법을 함께 연습합니다.',
  },
  {
    title: '갈등 중재 및 조율',
    description:
      '상담사가 중립적인 입장에서 가족 구성원 간의 갈등을 조율합니다. 각자의 입장을 안전하게 표현하고 들을 수 있는 환경을 만듭니다.',
  },
  {
    title: '가족 회복력 강화',
    description:
      '위기를 함께 극복하고 더 단단한 관계를 만들어 갈 수 있도록, 가족 전체의 회복력과 유대감을 높이는 작업을 합니다.',
  },
];

const process = [
  {
    step: '01',
    title: '접수',
    description: '가족 대표 또는 구성원이 상담을 신청합니다. 가족 구성과 주요 갈등 상황에 대한 사전 정보를 수집합니다.',
  },
  {
    step: '02',
    title: '초기상담',
    description:
      '가족 전체 또는 개별 면담을 통해 각 구성원의 입장을 파악합니다. 가족 관계 지도를 작성하고 상담 방향을 설정합니다.',
  },
  {
    step: '03',
    title: '본상담',
    description:
      '가족이 함께 참여하는 세션을 중심으로 진행합니다. 소통 연습, 역할 재정립, 갈등 해결 등 구체적인 변화 작업을 합니다.',
  },
  {
    step: '04',
    title: '마무리',
    description:
      '가족 관계의 변화를 함께 확인하고, 일상에서 건강한 관계를 유지하기 위한 가족 규칙을 만듭니다.',
  },
];

const targets = [
  '부모와 자녀 사이의 깊은 갈등으로 대화가 단절된 가족',
  '형제자매 간 경쟁이나 갈등이 심한 가정',
  '세대 간 가치관 차이로 서로를 이해하기 어려운 가족',
  '이혼, 재혼, 가족 구조 변화를 겪고 있는 가정',
  '가족 구성원의 심리적 문제가 가족 전체에 영향을 미치는 경우',
  '양육 방식의 차이로 부부 갈등이 생기는 경우',
  '가족 간 역할 분담, 경계 설정이 필요한 가정',
];

export default function FamilyCounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Family Counseling
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                가족상담
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                가족은 가장 가까운 사이이기에 상처도 깊을 수 있습니다.
                전문 상담을 통해 서로를 이해하고,
                건강한 가족 관계를 다시 세워 나가세요.
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
                가족상담이란?
              </h2>
              <p className="mt-4 text-lg text-black-light max-w-2xl mx-auto">
                가족상담은 가족 구성원 전체 또는 일부가 함께 참여하여
                가족 내 관계와 소통 방식을 개선하는 상담입니다.
                개인의 문제가 아닌, 가족이라는 시스템 전체를 바라보며
                근본적인 변화를 추구합니다.
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
                가족 전체의 변화를 위한 체계적인 과정을 안내합니다.
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
                이런 가족에게<br />가족상담을 추천합니다
              </h2>
              <p className="mt-4 text-black-light leading-relaxed">
                가족 안에서 느끼는 어려움은 한 사람만의 문제가 아닙니다.
                함께 상담에 참여할 때, 가족 전체가 성장할 수 있습니다.
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
                  150,000<span className="text-xl sm:text-2xl md:text-3xl font-medium">원</span>
                </div>
                <div className="mt-3 text-lg text-black-light group-hover/price:text-white/70 transition-colors duration-300">1회 / 90분</div>
                <div className="mt-6 w-full h-px bg-beige-200 group-hover/price:bg-white/20 transition-colors duration-300" />
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    가족 구성원 함께 참여하는 세션
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    가족 관계 진단 및 분석
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    세대 간 소통 훈련 프로그램
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    필요시 개별 면담 병행 가능
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
                가족이라서<br />더 소중한 관계입니다
              </h2>
              <p className="mt-6 text-lg text-beige-200 max-w-xl mx-auto">
                가족 안에서의 어려움, 더 이상 혼자 감당하지 마세요.
                도담상담센터가 가족 모두의 행복한 변화를 함께 하겠습니다.
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
