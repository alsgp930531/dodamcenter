export const SITE_CONFIG = {
  name: '도담상담센터',
  slogan: '도담, 성장의 기반을 세우는 곳',
  description: '20~30대 청년을 위한 온라인 심리상담 센터. 개인상담, 커플상담, 가족상담, 그룹상담 및 자기성장 프로그램을 제공합니다.',
  phone: '010-7669-1037',
  email: 'tnghks16@gmail.com',
  hours: '09:00 ~ 21:00',
  url: 'https://dodamcenter.kr',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: '센터 소개', href: '/about' },
  {
    label: '심리상담',
    href: '/counseling',
    children: [
      { label: '개인상담', href: '/counseling/individual' },
      { label: '커플상담', href: '/counseling/couple' },
      { label: '가족상담', href: '/counseling/family' },
      { label: '그룹상담', href: '/counseling/group' },
      { label: '성장 프로그램', href: '/programs' },
    ],
  },
  { label: '심리검사', href: '/testing' },
  { label: '기업심리', href: '/corporate' },
  { label: '상담 후기', href: '/reviews' },
  { label: '상담 문의', href: '/contact' },
];

export const COUNSELING_TYPES = [
  { key: 'individual', label: '개인상담', description: '1:1 맞춤 심리상담으로 내면의 성장을 돕습니다.', price: 80000, duration: '50분' },
  { key: 'couple', label: '커플상담', description: '관계 개선과 소통을 위한 커플 전문 상담입니다.', price: 120000, duration: '80분' },
  { key: 'family', label: '가족상담', description: '가족 간 갈등 해결과 건강한 관계 회복을 지원합니다.', price: 150000, duration: '90분' },
  { key: 'group', label: '그룹상담', description: '비슷한 고민을 가진 사람들과 함께 성장합니다.', price: 50000, duration: '120분' },
] as const;

export const TRUST_INDICATORS = [
  { label: '누적 상담', value: 5000, suffix: '건+', icon: 'chat' },
  { label: '상담 만족도', value: 4.9, suffix: '/5.0', icon: 'star' },
  { label: '전문 상담사', value: 30, suffix: '명', icon: 'people' },
  { label: '운영 기간', value: 7, suffix: '년+', icon: 'calendar' },
] as const;
