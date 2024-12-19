import { NextResponse } from 'next/server'

export async function GET() {
  // In a real-world scenario, you'd fetch this URL from a database or CMS
  const imageUrl = process.env.PROFILE_IMAGE_URL || '/placeholder.svg?height=150&width=150'
  
  return NextResponse.json({ imageUrl })
}

