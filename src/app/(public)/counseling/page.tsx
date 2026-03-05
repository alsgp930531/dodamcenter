import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ServiceCard from '@/components/counseling/ServiceCard';
import PricingTable from '@/components/counseling/PricingTable';
import RecommendedPackage from '@/components/counseling/RecommendedPackage';

export const metadata: Metadata = {
  title: '심리상담',
  description: '개인상담, 커플상담, 가족상담, 그룹상담 등 다양한 심리상담 서비스를 제공합니다.',
};

const services = [
  {
    title: '개인상담',
    description: '1:1 맞춤 심리상담으로 우울, 불안, 스트레스, 자존감 등 개인의 심리적 문제를 전문적으로 다룹니다.',
    price: 80000,
    duration: '50분',
    href: '/counseling/individual',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: '커플상담',
    description: '연인 간의 갈등, 소통 문제, 신뢰 회복 등 관계 개선을 위한 전문 커플 상담입니다.',
    price: 120000,
    duration: '80분',
    href: '/counseling/couple',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: '가족상담',
    description: '가족 간 갈등, 세대 간 소통 문제, 부모-자녀 관계 등 가족 전체의 건강한 관계 회복을 돕습니다.',
    price: 150000,
    duration: '90분',
    href: '/counseling/family',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: '그룹상담',
    description: '비슷한 고민을 가진 사람들과 함께하는 그룹 상담으로, 공감과 지지를 통한 성장을 경험합니다.',
    price: 50000,
    duration: '120분',
    href: '/counseling/group',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function CounselingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Counseling</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                심리상담
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                전문 상담사와 함께 마음의 변화를 시작하세요.
                당신에게 가장 적합한 상담 유형을 선택할 수 있습니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 md:py-32 bg-white border-t border-beige-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Pricing</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black">상담 비용 안내</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <PricingTable />
          </AnimatedSection>
        </div>
      </section>

      {/* Recommended Package */}
      <RecommendedPackage />
    </>
  );
}
