import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 이메일 전송 로직 비활성화
    console.warn('Email sending is disabled in test mode.');

    // 성공적으로 처리된 것처럼 응답
    return NextResponse.json({
      message: "Email sending is disabled in this environment.",
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({
      message: "An error occurred.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
