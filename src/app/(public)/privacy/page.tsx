import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '개인정보처리방침',
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">개인정보처리방침</h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-black-light leading-relaxed">
          <p>
            {SITE_CONFIG.name}(이하 &quot;센터&quot;)는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
            개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">1. 개인정보의 처리 목적</h2>
            <p>센터는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>상담 서비스 제공 및 상담 예약 관리</li>
              <li>문의사항 접수 및 처리</li>
              <li>서비스 개선 및 통계 분석</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">2. 수집하는 개인정보 항목</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>필수항목: 이름, 연락처, 상담 유형</li>
              <li>선택항목: 이메일</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">3. 개인정보의 보유 및 이용기간</h2>
            <p>
              센터는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              상담 관련 기록은 상담 종료 후 1년간 보관 후 안전하게 파기합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">4. 개인정보의 제3자 제공</h2>
            <p>
              센터는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라
              수사기관의 요구가 있는 경우에는 예외로 합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">5. 개인정보의 파기절차 및 방법</h2>
            <p>
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며,
              종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">6. 개인정보보호책임자</h2>
            <ul className="list-none space-y-1">
              <li>연락처: {SITE_CONFIG.phone}</li>
              <li>이메일: {SITE_CONFIG.email}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">7. 개인정보처리방침 변경</h2>
            <p>
              이 개인정보처리방침은 2023년 1월 1일부터 적용되며,
              법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는
              변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
