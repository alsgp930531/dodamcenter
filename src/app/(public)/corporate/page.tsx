import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: '기업심리',
  description: '기업 임직원의 심리 건강을 지원하는 EAP 프로그램. 직장 내 스트레스 관리, 조직 커뮤니케이션, 리더십 코칭을 제공합니다.',
};

const services = [
  {
    title: '직원 심리 상담',
    description: '임직원 개인 심리상담 제공. 업무 스트레스, 번아웃, 대인관계 등 직장 생활에서의 심리적 어려움을 전문적으로 지원합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: '조직 진단 & 컨설팅',
    description: '조직 내 심리적 분위기와 소통 구조를 진단하고, 건강한 조직 문화를 만들기 위한 맞춤 솔루션을 제안합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: '리더십 코칭',
    description: '중간관리자와 리더를 위한 심리 기반 리더십 코칭. 감성 리더십, 갈등 관리, 팀 빌딩 역량을 강화합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: '워크숍 & 교육',
    description: '스트레스 관리, 마인드풀니스, 커뮤니케이션 스킬 등 맞춤형 그룹 워크숍과 교육 프로그램을 운영합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: 'Basic',
    description: '소규모 기업을 위한 기본 플랜',
    price: '월 50만원~',
    features: ['임직원 상담 월 10회', '분기별 조직 진단 1회', '온라인 상담 지원', '상담 현황 리포트'],
  },
  {
    name: 'Standard',
    description: '중규모 기업을 위한 표준 플랜',
    price: '월 100만원~',
    features: ['임직원 상담 월 30회', '분기별 조직 진단 2회', '리더십 코칭 프로그램', '워크숍 연 2회', '실시간 위기 상담'],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: '대규모 조직 맞춤 플랜',
    price: '별도 협의',
    features: ['무제한 상담 지원', '월간 조직 진단', '전담 상담사 배정', '맞춤 워크숍 프로그램', 'HR 컨설팅 연계', '24시간 위기 지원'],
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Corporate EAP</span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                기업심리 서비스
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                건강한 조직은 건강한 구성원에서 시작됩니다.
                임직원의 심리적 안정과 성장을 전문적으로 지원합니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Services</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">제공 서비스</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-beige-50 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-white text-accent flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-black-light leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 md:py-32 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Plans</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">요금 플랜</h2>
              <p className="mt-4 text-lg text-black-light">기업 규모와 니즈에 맞는 플랜을 선택하세요.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 0.15}>
                <div className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white border border-beige-200 hover:bg-dark hover:text-white hover:ring-2 hover:ring-accent group/card'
                    : 'bg-white border border-beige-200'
                }`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      인기
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-black group-hover/card:text-white' : 'text-black'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-black-light group-hover/card:text-white/70' : 'text-black-light'}`}>{plan.description}</p>
                  <div className="text-2xl font-bold mb-6 text-accent">{plan.price}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 shrink-0 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${plan.popular ? 'text-black-light group-hover/card:text-white/80' : 'text-black-light'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.popular ? 'outline' : 'outline'} className={`w-full ${plan.popular ? 'group-hover/card:bg-accent group-hover/card:text-white group-hover/card:border-accent' : ''}`}>
                    문의하기
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              맞춤 상담이 필요하신가요?
            </h2>
            <p className="text-lg text-black-light mb-10">
              기업의 규모와 상황에 맞는 최적의 프로그램을 제안해드립니다.
              부담 없이 문의해주세요.
            </p>
            <Button href="/contact" size="lg">
              기업 상담 문의
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
