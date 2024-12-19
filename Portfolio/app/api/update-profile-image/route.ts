import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { imageUrl } = await request.json();

  // In a real application, you'd store this in a database
  // For simplicity, we're using an environment variable
  process.env.PROFILE_IMAGE_URL = imageUrl;

  return NextResponse.json({ success: true });
}

