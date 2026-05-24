import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: '그룹상담',
  description:
    '비슷한 고민을 가진 사람들과 함께하는 그룹상담. 공감과 지지를 통한 성장, 사회적 기술 향상을 경험합니다.',
};

const features = [
  {
    title: '공감과 연대',
    description:
      '비슷한 경험을 가진 사람들과 이야기를 나누며 "나만 이런 게 아니구나"라는 위안과 공감을 얻습니다. 함께하는 힘이 치유를 만듭니다.',
  },
  {
    title: '사회적 기술 향상',
    description:
      '그룹 안에서 자연스럽게 대인관계를 연습합니다. 경청, 자기표현, 피드백 주고받기 등 일상에 바로 적용할 수 있는 소통 능력을 키웁니다.',
  },
  {
    title: '다양한 시각 경험',
    description:
      '같은 주제에 대해 다양한 시각과 경험을 공유하면서, 자신의 문제를 새로운 관점에서 바라볼 수 있는 기회를 제공합니다.',
  },
  {
    title: '전문가 진행',
    description:
      '경험 풍부한 전문 상담사가 그룹을 이끌며, 모든 참여자가 안전하고 존중받는 환경에서 이야기할 수 있도록 세심하게 조율합니다.',
  },
];

const process = [
  {
    step: '01',
    title: '접수',
    description: '관심 있는 그룹상담 프로그램에 신청합니다. 사전 면담을 통해 그룹 참여 적합성을 확인합니다.',
  },
  {
    step: '02',
    title: '초기상담',
    description:
      '개별 사전 면담을 진행하여 참여 목표를 설정합니다. 그룹 규칙과 운영 방식에 대해 안내받습니다.',
  },
  {
    step: '03',
    title: '본상담',
    description:
      '6~10명이 함께하는 정기 그룹 세션에 참여합니다. 주제별 활동, 나눔, 피드백을 통해 함께 성장합니다.',
  },
  {
    step: '04',
    title: '마무리',
    description:
      '그룹 경험을 통해 얻은 통찰과 변화를 정리합니다. 이후 개인 상담 연계 또는 추가 그룹 참여를 안내합니다.',
  },
];

const targets = [
  '비슷한 고민을 가진 사람들과 경험을 나누고 싶은 분',
  '대인관계에서 어려움을 느끼고 사회적 기술을 키우고 싶은 분',
  '혼자 상담받는 것이 부담스러워 함께하는 환경을 선호하는 분',
  '다른 사람들의 이야기를 통해 새로운 시각을 얻고 싶은 분',
  '자기표현이 어렵고 안전한 환경에서 연습하고 싶은 분',
  '공감과 지지를 주고받으며 함께 성장하고 싶은 분',
  '우울, 불안, 자존감 등 특정 주제의 집중 프로그램을 원하는 분',
];

export default function GroupCounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Group Counseling
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                그룹상담
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                혼자가 아닌, 함께 성장하는 경험.
                비슷한 고민을 가진 사람들과 공감하고 지지하며,
                서로의 이야기 속에서 나를 발견합니다.
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
                그룹상담이란?
              </h2>
              <p className="mt-4 text-lg text-black-light max-w-2xl mx-auto">
                그룹상담은 전문 상담사의 진행 아래 6~10명의 참여자가 함께 모여
                서로의 경험과 감정을 나누는 상담 형태입니다. 타인과의 상호작용 속에서
                자기 이해를 깊이 하고, 대인관계 능력을 자연스럽게 향상시킵니다.
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
                안전한 그룹 환경에서 함께 성장하는 과정입니다.
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
                이런 분들께<br />그룹상담을 추천합니다
              </h2>
              <p className="mt-4 text-black-light leading-relaxed">
                함께하는 힘을 믿으신다면, 그룹상담이 새로운 경험이 될 수 있습니다.
                혼자서는 어려웠던 변화를, 서로의 지지 속에서 만들어 가세요.
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
                  50,000<span className="text-xl sm:text-2xl md:text-3xl font-medium">원</span>
                </div>
                <div className="mt-3 text-lg text-black-light group-hover/price:text-white/70 transition-colors duration-300">1회 / 120분 (1인 기준)</div>
                <div className="mt-6 w-full h-px bg-beige-200 group-hover/price:bg-white/20 transition-colors duration-300" />
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    6~10명 소규모 그룹 세션
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    전문 상담사 진행 및 조율
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    주제별 활동 자료 제공
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    사전 개별 면담 포함
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
                함께일 때<br />더 큰 성장이 가능합니다
              </h2>
              <p className="mt-6 text-lg text-beige-200 max-w-xl mx-auto">
                그룹상담에 대해 궁금한 점이 있으시면 편하게 문의해 주세요.
                현재 모집 중인 프로그램을 안내해 드리겠습니다.
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
