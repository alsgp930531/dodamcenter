import { Metadata } from 'next';
import AnimatedSection from '@/components/shared/AnimatedSection';
import InquiryForm from '@/components/forms/InquiryForm';

import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '상담 문의',
  description: '도담상담센터 상담 문의. 전문 상담사가 정성껏 답변드립니다.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase font-medium text-accent">Contact</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                상담 문의
              </h1>
              <p className="mt-6 text-lg md:text-xl text-black-light leading-relaxed">
                편안하게 문의해주세요. 전문 상담사가 빠르게 연락드리겠습니다.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-semibold text-black mb-8">연락처 정보</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-beige-50 text-accent flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">전화</h3>
                      <p className="text-black-light">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-beige-50 text-accent flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">이메일</h3>
                      <p className="text-black-light">{SITE_CONFIG.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-beige-50 text-accent flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">운영시간</h3>
                      <p className="text-black-light">{SITE_CONFIG.hours}</p>
                      <p className="text-sm text-beige-300">주말·공휴일 휴무</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-beige-50 text-accent flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">상담 방식</h3>
                      <p className="text-black-light">온라인 센터 (대면 상담)</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="bg-beige-50 rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl font-semibold text-black mb-2">상담 신청</h2>
                  <p className="text-black-light mb-8">아래 양식을 작성해주시면 빠르게 연락드리겠습니다.</p>
                  <InquiryForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
