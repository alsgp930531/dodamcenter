import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: '개인상담',
  description:
    '1:1 맞춤 심리상담으로 우울, 불안, 스트레스, 자존감, 정체성 문제를 전문적으로 다룹니다. 도담상담센터 개인상담 안내.',
};

const features = [
  {
    title: '1:1 맞춤 상담',
    description:
      '내담자 한 분만을 위한 온전한 시간입니다. 상담사와 1:1로 깊이 있는 대화를 나누며, 개인의 고유한 상황과 감정에 집중합니다.',
  },
  {
    title: '과학적 심리평가',
    description:
      '표준화된 심리검사 도구를 활용하여 현재의 심리 상태를 객관적으로 파악하고, 상담 방향을 함께 설정합니다.',
  },
  {
    title: '근거 기반 치료',
    description:
      'CBT(인지행동치료), DBT(변증법적 행동치료), 정신역동 등 검증된 치료 기법을 내담자에 맞게 적용합니다.',
  },
  {
    title: '지속적 성장 지원',
    description:
      '상담 종결 이후에도 일상에서 활용할 수 있는 대처 전략과 자기 관리 방법을 함께 설계합니다.',
  },
];

const process = [
  {
    step: '01',
    title: '접수',
    description: '온라인 또는 전화로 상담을 예약합니다. 간단한 사전 설문을 통해 주요 고민을 파악합니다.',
  },
  {
    step: '02',
    title: '초기상담',
    description:
      '상담사와 처음 만나 현재 상황과 기대를 나눕니다. 심리검사를 진행하고 상담 목표를 함께 설정합니다.',
  },
  {
    step: '03',
    title: '본상담',
    description:
      '설정한 목표를 중심으로 정기적인 상담을 진행합니다. 내면 탐색과 변화를 위한 구체적 작업을 합니다.',
  },
  {
    step: '04',
    title: '마무리',
    description:
      '상담을 통해 달성한 변화를 정리하고, 앞으로의 일상에서 유지할 수 있는 전략을 확인합니다.',
  },
];

const targets = [
  '우울감이나 무기력함이 지속되어 일상이 힘든 분',
  '불안, 걱정, 공황 증상으로 고통받고 계신 분',
  '직장, 학업, 대인관계에서 과도한 스트레스를 느끼는 분',
  '자존감이 낮아 자신을 부정적으로 바라보는 분',
  '나는 누구인지, 무엇을 원하는지 방향을 잃은 분',
  '과거의 상처나 트라우마가 현재에 영향을 미치는 분',
  '감정 조절이 어렵고 반복되는 패턴에서 벗어나고 싶은 분',
];

export default function IndividualCounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">
                Individual Counseling
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                개인상담
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                나만을 위한 온전한 시간, 전문 상담사와 함께
                내면의 목소리에 귀 기울이는 여정을 시작하세요.
                1:1 맞춤 상담으로 당신만의 변화를 만들어 갑니다.
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
                개인상담이란?
              </h2>
              <p className="mt-4 text-lg text-black-light max-w-2xl mx-auto">
                개인상담은 상담사와 내담자가 1:1로 만나 심리적 어려움을 함께 탐색하고
                해결해 나가는 전문적인 과정입니다. 안전한 공간에서 자유롭게 이야기하며,
                자기 이해를 깊이 하고 삶의 변화를 이끌어 냅니다.
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
                체계적인 4단계 과정으로 안정적인 변화를 이끌어 냅니다.
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
                이런 분들께<br />개인상담을 추천합니다
              </h2>
              <p className="mt-4 text-black-light leading-relaxed">
                아래 항목 중 하나라도 해당된다면, 전문 상담사와의 대화가 도움이 될 수 있습니다.
                혼자 감당하기 어려운 마음의 짐을 함께 내려놓아 보세요.
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
                <div className="text-5xl md:text-6xl font-bold text-accent">
                  80,000<span className="text-2xl md:text-3xl font-medium">원</span>
                </div>
                <div className="mt-3 text-lg text-black-light group-hover/price:text-white/70 transition-colors duration-300">1회 / 50분</div>
                <div className="mt-6 w-full h-px bg-beige-200 group-hover/price:bg-white/20 transition-colors duration-300" />
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    전문 상담사 1:1 개인상담
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    초기 심리평가 포함
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    맞춤형 상담 계획 수립
                  </li>
                  <li className="flex items-center gap-3 text-black-light group-hover/price:text-white/80 transition-colors duration-300">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    상담 후 요약 피드백 제공
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
                지금, 나를 위한<br />첫 걸음을 내딛어 보세요
              </h2>
              <p className="mt-6 text-lg text-beige-200 max-w-xl mx-auto">
                상담에 대한 궁금한 점이 있으시면 부담 없이 문의해 주세요.
                도담상담센터가 당신의 변화를 함께 하겠습니다.
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
