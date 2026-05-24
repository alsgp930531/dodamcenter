# 도담센터 - 기능별 상세 요구사항

> 이 문서는 대화를 통해 지속적으로 업데이트됩니다.
> 최종 수정: 2026-03-02

---

## 1. Firebase 연동

### 1-1. Firestore (데이터베이스)

**컬렉션 구조:**

| 컬렉션 | 용도 | 주요 필드 |
|---------|------|-----------|
| `inquiries` | 상담 문의 | name, phone, email, counselingType, message, isRead, createdAt |
| `reviews` | 상담 후기 | author, rating, content, counselingType, isPublished, createdAt |
| `phone-bookings` | 전화 예약 | name, phone, preferredDate, preferredTime, message, createdAt |
| `counselors` | 상담사 정보 | name, credentials, education, specialty[], experience, bio, order, isActive |
| `programs` | 프로그램 | title, description, category, price, duration, features[] |

**현재 상태:** 로컬 JSON 파일 저장 (`src/lib/storage.ts`)
**목표:** Firebase Firestore로 전환

### 1-2. Firebase Auth (인증)

- 관리자 이메일/비밀번호 인증
- 현재: 하드코딩된 인증정보 (`admin@dodamcenter.kr / dodam2025!`)
- 목표: Firebase Auth로 전환, 보안 강화

### 1-3. Firebase Storage (파일)

- 상담사 프로필 사진 업로드
- 리뷰 이미지 업로드 (선택)
- 현재: 외부 URL(Unsplash) 하드코딩
- 목표: 직접 이미지 업로드 지원

---

## 2. 관리자 기능

### 2-1. 인증 및 보안

- [ ] Firebase Auth 기반 로그인/로그아웃
- [ ] 미들웨어에서 `/admin/*` 라우트 보호
- [ ] 세션 만료 처리
- [ ] 비밀번호 변경 기능

### 2-2. 대시보드 (`/admin/dashboard`)

**현재 완료:**
- 통계 카드 (총 문의 수, 리뷰 수, 예약 수)
- 빠른 액션 링크

**추가 필요:**
- [ ] 기간별 통계 (주간/월간)
- [ ] 최근 문의 미리보기

### 2-3. 문의 관리 (`/admin/inquiries`)

**현재 완료:**
- 문의 목록 조회
- 상세 보기
- 읽음/안읽음 표시

**추가 필요:**
- [ ] 답변 기능 (이메일 또는 메모)
- [ ] 문의 삭제
- [ ] 필터링 (상담 유형별, 읽음 상태별)

### 2-4. 후기 관리 (`/admin/reviews`)

**현재 완료:**
- 후기 CRUD (생성, 수정, 삭제)
- 공개/비공개 전환

**추가 필요:**
- [ ] 후기 정렬 (날짜, 평점)

### 2-5. 상담사 관리 (`/admin/counselors`)

**현재 완료:**
- 상담사 목록 조회 (검색 가능)

**추가 필요:**
- [ ] 상담사 추가
- [ ] 상담사 정보 수정
- [ ] 상담사 삭제 (또는 비활성화)
- [ ] 프로필 사진 업로드
- [ ] 표시 순서 변경

### 2-6. 전화예약 관리 (미구현)

- [ ] 전화예약 목록 페이지 생성
- [ ] 예약 상세 보기
- [ ] 처리 상태 관리 (대기/확인/완료)

---

## 3. 공개 페이지 기능

### 3-1. 상담 문의 (`/contact`)

**현재 완료:**
- 문의 폼 (이름, 연락처, 이메일, 상담유형, 내용)
- 전화예약 폼 (이름, 연락처, 희망일시, 메시지)
- API 연동하여 데이터 저장

**추가 필요:**
- [ ] 폼 제출 후 확인 이메일/알림
- [ ] 유효성 검사 강화
- [ ] 스팸 방지 (reCAPTCHA 등)

### 3-2. 후기 페이지 (`/reviews`)

**현재 완료:**
- 샘플 리뷰 표시
- 평점 통계

**추가 필요:**
- [ ] Firebase에서 실제 리뷰 불러오기
- [ ] 페이지네이션 또는 무한 스크롤

### 3-3. 상담사 페이지 (`/counselors`)

**현재 완료:**
- 정적 데이터 기반 상담사 카드 그리드

**추가 필요:**
- [ ] Firebase에서 동적 데이터 로드
- [ ] 상담사 상세 페이지 (개별 프로필)

### 3-4. 프로그램 페이지 (`/programs`)

**현재 완료:**
- 6개 프로그램 하드코딩 표시
- 카테고리 필터 UI (동작 안 함)

**추가 필요:**
- [ ] Firebase에서 동적 데이터 로드
- [ ] 카테고리 필터 동작 구현

---

## 4. 알림 시스템 (미구현)

### 4-1. 이메일 알림
- [ ] 새 문의 접수 시 → 관리자 이메일 알림
- [ ] 새 전화예약 접수 시 → 관리자 이메일 알림
- [ ] 문의 답변 시 → 고객 이메일 발송

### 4-2. 구현 방안 (선택 필요)
- 옵션 A: Nodemailer + Gmail SMTP
- 옵션 B: SendGrid / Resend 등 이메일 API
- 옵션 C: 카카오 알림톡

---

## 5. SEO 및 성능

### 5-1. SEO
- [x] `robots.ts` 설정 완료
- [x] `sitemap.ts` 설정 완료
- [x] 페이지별 메타데이터 설정
- [ ] Open Graph 이미지 최적화
- [ ] 구조화된 데이터 (JSON-LD) 추가

### 5-2. 성능
- [ ] 이미지 최적화 (Next/Image 활용)
- [ ] 폰트 최적화 (next/font)
- [ ] 번들 사이즈 분석 및 최적화

---

## 6. 배포 및 환경 설정

### 6-1. 환경변수 (.env.local)
```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Admin (Firebase Auth로 전환 후 제거)
ADMIN_EMAIL=
ADMIN_PASSWORD=

# 이메일 (선택 시)
EMAIL_SERVICE_API_KEY=
```

### 6-2. Vercel 배포
- [ ] Vercel 프로젝트 연결
- [ ] 환경변수 설정
- [ ] 커스텀 도메인 연결
- [ ] 프리뷰 배포 설정
