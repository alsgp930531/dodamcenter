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
    address,
    referral,
    unresolvedIssues,
    mainConcern,
    counselingExpectation,
    pastCounselingExperience,
  } = body;

  if (!name || !phone || !birthdate || !address || !referral || !unresolvedIssues?.length || !mainConcern) {
    return NextResponse.json({ error: '필수 항목을 모두 입력해주세요.' }, { status: 400 });
  }

  // Store as an inquiry with counselingType = '정부지원 상담'
  const inquiry = await create<Inquiry>('inquiries', {
    id: '',
    name,
    phone,
    email: '',
    counselingType: '정부지원 상담',
    message: `[생년월일] ${birthdate}\n[주소] ${address}\n[내방경위] ${referral}\n[미해결문제] ${unresolvedIssues.join(', ')}\n[주호소문제] ${mainConcern}${counselingExpectation ? `\n[상담기대] ${counselingExpectation}` : ''}${pastCounselingExperience ? `\n[과거상담경험] ${pastCounselingExperience}` : ''}`,
    isRead: false,
    createdAt: new Date().toISOString(),
  });

  // 텔레그램 알림
  await sendTelegramNotification(formatGovSupportMessage({
    name,
    phone,
    birthdate,
    address,
    referral,
    unresolvedIssues,
    mainConcern,
    counselingExpectation,
    pastCounselingExperience,
  }));

  return NextResponse.json(inquiry, { status: 201 });
}
