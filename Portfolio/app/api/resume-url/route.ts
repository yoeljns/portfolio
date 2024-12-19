import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  const resumeUrl = process.env.RESUME_URL || '';
  return NextResponse.json({ resumeUrl });
}

