# 도담센터 - Claude Code 프로젝트 규칙

## 프로젝트 개요
- **프로젝트명**: 도담센터 (심리상담 전문센터 웹사이트)
- **목적**: 센터 소개 + 상담 예약
- **타겟**: 심리상담이 필요한 성인 고객
- **디자인 톤**: 깔끔하고 전문적인 (미니멀, 신뢰감)

## 기술 스택
- **프레임워크**: Next.js 16 (App Router) + React 19 + TypeScript 5
- **스타일링**: Tailwind CSS 4
- **애니메이션**: Framer Motion
- **DB**: Firebase
- **배포**: Vercel
- **폰트**: Pretendard(본문), Playfair Display(장식용 세리프)

## 프로젝트 구조
```
src/
├── app/
│   ├── (public)/        # 공개 페이지 (Header/Footer 포함 레이아웃)
│   ├── admin/           # 관리자 페이지
│   ├── api/             # API 라우트
│   ├── layout.tsx       # 루트 레이아웃
│   └── globals.css      # 글로벌 스타일 + 디자인 토큰
├── components/
│   ├── shared/          # 재사용 컴포넌트 (Button, Card 등)
│   ├── layout/          # Header, Footer
│   ├── home/            # 홈페이지 섹션
│   ├── forms/           # 폼 컴포넌트
│   ├── counseling/      # 상담 관련
│   ├── counselors/      # 상담사 관련
│   └── reviews/         # 리뷰 관련
├── lib/
│   ├── constants.ts     # 사이트 설정, 네비게이션 등
│   └── storage.ts       # 데이터 CRUD 유틸리티
├── data/                # 정적 데이터
└── types/               # TypeScript 인터페이스
```

## 코딩 컨벤션

### 컴포넌트
- 파일명: **PascalCase** (예: `HeroSection.tsx`, `CounselorCard.tsx`)
- export: **default export** 사용 (`export default function ComponentName()`)
- Props: 컴포넌트 위에 `interface ComponentNameProps` 정의
- 클라이언트 컴포넌트는 파일 최상단에 `'use client'` 명시

### 네이밍
- 변수/함수: `camelCase` (예: `isScrolled`, `handleSubmit`)
- 상수: `SCREAMING_SNAKE_CASE` (예: `NAV_ITEMS`, `SITE_CONFIG`)
- 타입/인터페이스: `PascalCase` (예: `Counselor`, `ButtonProps`)

### 스타일링
- Tailwind 인라인 클래스 사용, 별도 CSS 파일 만들지 않기
- 반응형: **모바일 퍼스트** (`md:`, `lg:` 순서)
- 컨테이너: `max-w-7xl mx-auto px-6 lg:px-8`
- 섹션 패딩: `py-24 md:py-32`
- 카드: `bg-white rounded-2xl border border-beige-200 p-6 md:p-8`
- 버튼: `rounded-full` (pill 형태)
- 트랜지션: `transition-all duration-300`

### 디자인 시스템 (색상)
- 배경: `beige-50`(#FBF9F7), `beige-100`(#F5F0EB), `white`
- 텍스트: `black`(#1A1A1A), `black-light`(#333333)
- 강조: `accent`(#8B7355 따뜻한 브라운), `accent-hover`(#7A6448)
- 보더: `beige-200`(#E8DFD5)

### 애니메이션
- Framer Motion 사용, `AnimatedSection` 컴포넌트로 스크롤 트리거 애니메이션
- `whileInView`, `viewport={{ once: true }}` 패턴 사용
- 기본 duration: 0.6s (섹션), 0.2~0.3s (인터랙션)

### 페이지
- 각 페이지에 `metadata` export 필수 (`title`, `description`)
- 페이지는 섹션 컴포넌트 조합으로 구성
- 섹션 구조: `<section className="py-24 md:py-32"><div className="max-w-7xl mx-auto px-6 lg:px-8">...</div></section>`

## 금지 사항
- `app/` 라우트 구조 임의 변경 금지
- 새 패키지 설치 시 반드시 사용자에게 확인
- 기존 디자인 토큰(색상, 폰트) 임의 변경 금지
- 기존 컴포넌트 구조/네이밍 패턴 변경 금지

## 자주 쓰는 명령어
```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

## 참고 문서
- [docs/plan.md](docs/plan.md) - 전체 사이트 기획서
- [docs/requirements.md](docs/requirements.md) - 기능별 상세 요구사항
