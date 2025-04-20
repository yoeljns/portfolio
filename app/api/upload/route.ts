import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get("filename")

  if (!filename) {
    return NextResponse.json({ error: "Filename is required" }, { status: 400 })
  }

  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "File is required" }, { status: 400 })
  }

  try {
    const blob = await put(filename, file, { access: "public" })

    return NextResponse.json(blob)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error uploading file"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
