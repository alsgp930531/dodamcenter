import { NextRequest, NextResponse } from 'next/server';
import { getAll, create } from '@/lib/storage';
import { Inquiry } from '@/types';
import { sendTelegramNotification, formatInquiryMessage } from '@/lib/telegram';

export async function GET() {
  const inquiries = await getAll<Inquiry>('inquiries');
  return NextResponse.json(inquiries);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, email, birthdate, address, counselingType, message } = body;

  if (!name || !phone || !counselingType || !message) {
    return NextResponse.json({ error: '필수 항목을 모두 입력해주세요.' }, { status: 400 });
  }

  const inquiry = await create<Inquiry>('inquiries', {
    id: '',
    name,
    phone,
    email: email || '',
    counselingType,
    message,
    isRead: false,
    createdAt: new Date().toISOString(),
  });

  // 텔레그램 알림 (실패해도 응답에 영향 없음)
  await sendTelegramNotification(formatInquiryMessage({ name, phone, email, birthdate, address, counselingType, message }));

  return NextResponse.json(inquiry, { status: 201 });
}
