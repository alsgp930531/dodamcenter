# 납품 및 배포 체크리스트

## 1. 개발 완료 후 확인
- [ ] `npm run build` 에러 없이 성공
- [ ] `npm run lint` 경고/에러 없음
- [ ] 로컬에서 모든 기능 정상 동작 확인

## 2. GitHub repo 이전
- [ ] GitHub repo → Settings → Transfer ownership → 클라이언트 GitHub 아이디 입력
- [ ] 클라이언트가 이전 수락 확인

## 3. 내 Vercel 정리
- [ ] 내 Vercel 프로젝트 → Settings → Delete Project

## 4. 클라이언트 Vercel 배포
- [ ] 클라이언트 Vercel 계정 생성 (vercel.com)
- [ ] GitHub 연결 → 이전받은 repo 선택
- [ ] 환경변수 설정 (아래 목록 참고)
- [ ] Deploy 후 정상 동작 확인

## 5. 환경변수 전달 목록
`.env.local` 파일 내용을 클라이언트에게 전달하고, Vercel 환경변수에 동일하게 입력.

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

> 환경변수 복사 시 앞뒤 공백 주의!

## 6. Firebase 설정
- [ ] Firebase Console → Authentication → 설정 → 승인된 도메인에 새 Vercel 주소 추가 (예: `프로젝트명.vercel.app`)
- [ ] 커스텀 도메인 사용 시 해당 도메인도 추가 (예: `dodamcenter.com`)
- [ ] Firebase Console → 프로젝트 설정 → 사용자 및 권한 → 클라이언트 Google 계정을 "소유자"로 추가

## 7. 도메인 연결 (커스텀 도메인 사용 시)
- [ ] Vercel → Settings → Domains → 도메인 추가
- [ ] 도메인 등록업체(가비아, 카페24 등)에서 DNS 설정:
  - A 레코드: `76.76.21.21`
  - CNAME: `cname.vercel-dns.com`
- [ ] SSL 인증서 자동 발급 확인 (Vercel이 자동 처리)

## 8. 최종 확인
- [ ] 클라이언트 Vercel 배포 사이트에서 전체 기능 테스트
- [ ] 내 GitHub / Vercel에 프로젝트 흔적 남아있지 않은지 확인
