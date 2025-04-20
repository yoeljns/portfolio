"use client"

import Image from "next/image"
import { FileText, Linkedin, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Hero() {
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20at%2011.19.01%E2%80%AFAM-419iKkuFz2ZAqwmYgn5x9XVVMWck8h.png",
  )

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1Q2g14JWKi6X_AB81m2tskbUpLzlVWmsG/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer",
    )
  }

  const scrollToBottom = () => {
    // Set a global variable that the ChatBot component can check
    window.openYoelBot = true

    // Force a re-render of components that might be listening
    window.dispatchEvent(new Event("openYoelBot"))
  }

  return (
    <section id="intro" className="py-12 text-center relative">
      <div className="relative w-[150px] h-[150px] mx-auto mb-4">
        <Image
          src={profileImageUrl || "/placeholder.svg"}
          alt="Yoel Nasi Kazado"
          fill
          className="rounded-full object-cover"
          priority
          onError={() => setProfileImageUrl("/placeholder.svg?height=150&width=150")}
        />
      </div>
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Yoel Nasi Kazado</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Data Science Student | Venture Capital Enthusiast</p>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
        Aspiring to leverage my data analysis, financial modeling, and due diligence expertise to secure a strategic
        role in a venture capital firm, focusing on evaluating high-potential startups and driving data-driven
        investment decisions.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button onClick={handleResumeDownload}>
          <FileText className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open("https://www.linkedin.com/in/yoel-nasi-kazado", "_blank", "noopener,noreferrer")}
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </Button>
        <Button
          variant="secondary"
          onClick={scrollToBottom}
          className="bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary"
        >
          <Bot className="w-5 h-5 mr-2" />
          Chat with YoelBot
        </Button>
      </div>
    </section>
  )
}
