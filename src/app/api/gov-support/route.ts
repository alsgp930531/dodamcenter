import { NextRequest, NextResponse } from 'next/server';
import { create } from '@/lib/storage';
import { Inquiry } from '@/types';
import { sendTelegramNotification, formatGovSupportMessage } from '@/lib/telegram';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    name,
    phone,
    birthdate,
    preferredCounselor,
    concerns,
    mainConcern,
    counselingExpectation,
  } = body;

  if (!name || !phone || !birthdate || !concerns?.length || !mainConcern) {
    return NextResponse.json({ error: '필수 항목을 모두 입력해주세요.' }, { status: 400 });
  }

  // Store as an inquiry with counselingType = '청년 응원 패키지'
  const inquiry = await create<Inquiry>('inquiries', {
    id: '',
    name,
    phone,
    email: '',
    counselingType: '청년 응원 패키지',
    message: `[생년월일] ${birthdate}${preferredCounselor ? `\n[희망상담사] ${preferredCounselor}` : ''}\n[고민유형] ${concerns.join(', ')}\n[주호소문제] ${mainConcern}${counselingExpectation ? `\n[상담기대] ${counselingExpectation}` : ''}`,
    isRead: false,
    createdAt: new Date().toISOString(),
  });

  // 텔레그램 알림
  await sendTelegramNotification(formatGovSupportMessage({
    name,
    phone,
    birthdate,
    address: '',
    referral: '청년 응원 패키지',
    preferredCounselor,
    unresolvedIssues: concerns,
    mainConcern,
    counselingExpectation,
    pastCounselingExperience: '',
  }));

  return NextResponse.json(inquiry, { status: 201 });
}
