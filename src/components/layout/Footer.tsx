import Link from 'next/link';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-beige-300 leading-relaxed mb-6">
              {SITE_CONFIG.slogan}<br />
              당신의 내면의 성장을 함께합니다.
            </p>
            <div className="space-y-2 text-sm text-beige-300">
              <p>전화: {SITE_CONFIG.phone}</p>
              <p>이메일: {SITE_CONFIG.email}</p>
              <p>운영시간: {SITE_CONFIG.hours} (주말·공휴일 휴무)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-200">바로가기</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-beige-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-200">상담 서비스</h4>
            <ul className="space-y-3">
              <li><Link href="/counseling/individual" className="text-sm text-beige-300 hover:text-white transition-colors">개인상담</Link></li>
              <li><Link href="/counseling/couple" className="text-sm text-beige-300 hover:text-white transition-colors">커플상담</Link></li>
              <li><Link href="/counseling/family" className="text-sm text-beige-300 hover:text-white transition-colors">가족상담</Link></li>
              <li><Link href="/counseling/group" className="text-sm text-beige-300 hover:text-white transition-colors">그룹상담</Link></li>
              <li><Link href="/programs" className="text-sm text-beige-300 hover:text-white transition-colors">성장 프로그램</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-200">상담 문의</h4>
            <p className="text-sm text-beige-300 leading-relaxed mb-4">
              전문 상담사가 당신의 이야기에<br />
              귀 기울이겠습니다.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-beige-300">
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
            </div>
            <span>&copy; 2023 {SITE_CONFIG.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
