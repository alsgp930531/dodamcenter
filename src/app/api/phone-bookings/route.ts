import { NextRequest, NextResponse } from 'next/server';
import { getAll, create } from '@/lib/storage';
import { PhoneBooking } from '@/types';
import { sendTelegramNotification, formatPhoneBookingMessage } from '@/lib/telegram';

export async function GET() {
  const bookings = await getAll<PhoneBooking>('phone-bookings');
  return NextResponse.json(bookings);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, phone, preferredDate, preferredTime, note } = body;

  if (!name || !phone || !preferredDate || !preferredTime) {
    return NextResponse.json({ error: '필수 항목을 모두 입력해주세요.' }, { status: 400 });
  }

  const booking = await create<PhoneBooking>('phone-bookings', {
    id: '',
    name,
    phone,
    preferredDate,
    preferredTime,
    note: note || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  });

  // 텔레그램 알림 (실패해도 응답에 영향 없음)
  await sendTelegramNotification(formatPhoneBookingMessage({ name, phone, preferredDate, preferredTime, note }));

  return NextResponse.json(booking, { status: 201 });
}
