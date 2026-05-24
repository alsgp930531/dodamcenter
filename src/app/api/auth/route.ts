import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'admin@dodamcenter.kr';
const ADMIN_PASSWORD = 'dodam2025!';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true, user: { email: ADMIN_EMAIL, name: '관리자' } });
    response.cookies.set('admin-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin-auth');
  return response;
}
