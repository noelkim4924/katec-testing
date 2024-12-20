/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.warn('Email sending is disabled in test mode.');

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
