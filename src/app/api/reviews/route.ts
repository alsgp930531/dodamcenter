import { NextRequest, NextResponse } from 'next/server';
import { getAll, create, update, remove } from '@/lib/storage';
import { Review } from '@/types';

export async function GET() {
  const reviews = await getAll<Review>('reviews');
  const published = reviews.filter((r) => r.isPublished);
  return NextResponse.json(published);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { clientInitial, counselingType, content, rating } = body;

  if (!clientInitial || !counselingType || !content) {
    return NextResponse.json({ error: '필수 항목을 모두 입력해주세요.' }, { status: 400 });
  }

  const review = await create<Review>('reviews', {
    id: '',
    clientInitial,
    counselingType,
    content,
    rating: rating || 5,
    isPublished: true,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json(review, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, ...updates } = body;

  if (!id) {
    return NextResponse.json({ error: 'ID가 필요합니다.' }, { status: 400 });
  }

  const updated = await update<Review>('reviews', id, updates);
  if (!updated) {
    return NextResponse.json({ error: '후기를 찾을 수 없습니다.' }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID가 필요합니다.' }, { status: 400 });
  }

  const deleted = await remove('reviews', id);
  if (!deleted) {
    return NextResponse.json({ error: '후기를 찾을 수 없습니다.' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
