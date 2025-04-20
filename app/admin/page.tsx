"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AdminPanel() {
  const [imageUrl, setImageUrl] = useState("")

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const filename = `profile_${Date.now()}.${file.name.split(".").pop()}`
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch(`/api/upload?filename=${filename}`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Upload failed")

      const data = await response.json()
      setImageUrl(data.url)

      // Update the profile image URL on the server
      await fetch("/api/update-profile-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: data.url }),
      })

      alert("Profile image uploaded successfully!")
    } catch (error) {
      console.error("Error uploading profile image:", error)
      alert("Failed to upload profile image. Please try again.")
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4">
        <Button asChild>
          <label>
            Upload Profile Image
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
        </Button>
      </div>
      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Preview:</h2>
          <Image src={imageUrl} alt="Profile Preview" width={150} height={150} className="rounded-full" />
        </div>
      )}
    </div>
  )
}
