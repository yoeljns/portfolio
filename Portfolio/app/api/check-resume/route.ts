import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'portfolio', 'YoelNasiKazado_resume.pdf')
  
  try {
    await fs.promises.access(filePath, fs.constants.F_OK)
    return NextResponse.json({ exists: true, path: filePath })
  } catch (error) {
    return NextResponse.json({ exists: false, error: error.message })
  }
}

