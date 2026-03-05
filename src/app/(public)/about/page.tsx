import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '센터 소개',
  description: `${SITE_CONFIG.name} - 20~30대 청년 전문 심리상담 센터. 전문 상담사와 함께 내면의 성장을 시작하세요.`,
};

const milestones = [
  { year: '2018', title: '도담상담센터 설립', description: '청년 심리상담 전문 센터로 출발' },
  { year: '2019', title: '온라인 상담 시스템 도입', description: '비대면 시대에 맞춘 온라인 상담 플랫폼 구축' },
  { year: '2020', title: '성장 프로그램 런칭', description: '자기개발, 퍼스널 브랜딩 프로그램 시작' },
  { year: '2021', title: '누적 상담 3,000건 돌파', description: '청년 상담 분야 신뢰도 1위 달성' },
  { year: '2022', title: '기업 EAP 서비스 시작', description: '직장인 심리 건강 지원 서비스 확대' },
  { year: '2023', title: '정부지원 사업 파트너 선정', description: '청년 심리 지원 정부사업 공식 파트너' },
];

const team = [
  { role: '상담심리전문가', count: 15, description: '석·박사 학위 보유 전문 상담사' },
  { role: '임상심리전문가', count: 8, description: '임상심리 전문 자격 보유' },
  { role: '발달심리전문가', count: 4, description: '청년 발달 단계 전문' },
  { role: '코칭 전문가', count: 3, description: '커리어·라이프 코칭 자격 보유' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">About Us</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                도담상담센터를<br />소개합니다
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                도담상담센터는 &apos;도담도담&apos;이라는 순우리말에서 이름을 따왔습니다.
                아이가 탈 없이 잘 자라는 모양을 뜻하는 이 단어처럼,
                우리는 청년들이 건강하게 성장할 수 있도록 돕습니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div
                className="aspect-[4/3] rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/photos/counseling-2.jpg')`,
                }}
              />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Our Mission</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black leading-tight">
                청년의 내면을<br />함께 성장시킵니다
              </h2>
              <p className="mt-6 text-black-light leading-relaxed">
                20~30대는 인생에서 가장 많은 변화와 도전을 경험하는 시기입니다.
                취업, 진로, 대인관계, 자아정체성 등 다양한 고민 속에서
                자신만의 길을 찾아가는 것은 결코 쉬운 일이 아닙니다.
              </p>
              <p className="mt-4 text-black-light leading-relaxed">
                도담상담센터는 단순히 문제를 해결하는 것을 넘어,
                청년들이 자신의 가능성을 발견하고 삶을 주도적으로 설계할 수 있도록
                전문적인 심리 상담과 성장 프로그램을 제공합니다.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 md:py-32 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">History</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">도담상담센터의 발자취</h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {milestones.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 md:gap-10 mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-full bg-beige-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-10">
                    <span className="text-sm text-accent font-medium">{item.year}</span>
                    <h3 className="text-lg font-semibold text-black mt-1">{item.title}</h3>
                    <p className="text-black-light mt-1">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Our Team</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">전문 상담 인력 구성</h2>
              <p className="mt-4 text-lg text-black-light">
                석·박사 학위와 공인 자격증을 보유한 전문가들로 구성되어 있습니다.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((item, index) => (
              <AnimatedSection key={item.role} delay={index * 0.1}>
                <div className="bg-beige-50 rounded-2xl p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{item.count}명</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{item.role}</h3>
                  <p className="text-sm text-black-light">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
