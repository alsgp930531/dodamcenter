import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '이용약관',
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">이용약관</h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-black-light leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">제1조 (목적)</h2>
            <p>
              이 약관은 {SITE_CONFIG.name}(이하 &quot;센터&quot;)가 제공하는 상담 서비스의 이용조건 및
              절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">제2조 (서비스 내용)</h2>
            <p>센터는 다음과 같은 서비스를 제공합니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>개인, 커플, 가족, 그룹 심리상담</li>
              <li>심리검사 서비스</li>
              <li>자기성장 프로그램</li>
              <li>기업 EAP 서비스</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">제3조 (예약 및 취소)</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>상담 예약은 온라인 문의 또는 전화를 통해 접수합니다.</li>
              <li>예약 취소는 상담 24시간 전까지 가능합니다.</li>
              <li>당일 취소 또는 노쇼의 경우 상담료의 50%가 부과될 수 있습니다.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">제4조 (비밀보장)</h2>
            <p>
              센터는 상담 과정에서 취득한 모든 정보에 대해 비밀을 보장합니다.
              단, 다음의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>내담자 본인 또는 타인의 생명이나 안전이 위험한 경우</li>
              <li>법원의 명령이 있는 경우</li>
              <li>내담자가 동의한 경우</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">제5조 (면책조항)</h2>
            <p>
              센터의 상담 서비스는 의료행위가 아니며, 의학적 진단이나 치료를 대체할 수 없습니다.
              필요한 경우 전문 의료기관의 진료를 권장합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">제6조 (약관의 변경)</h2>
            <p>
              센터는 필요한 경우 약관을 변경할 수 있으며,
              변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.
            </p>
          </div>

          <p className="text-sm text-beige-300 pt-4 border-t border-beige-200">
            시행일: 2023년 1월 1일
          </p>
        </div>
      </div>
    </section>
  );
}
