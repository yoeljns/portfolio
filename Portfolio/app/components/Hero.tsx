'use client'

import Image from 'next/image'
import { FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Hero() {
  const [imageUrl, setImageUrl] = useState('/placeholder.svg?height=150&width=150')

  useEffect(() => {
    fetch('/api/profile-image')
      .then(response => response.json())
      .then(data => {
        if (data.imageUrl) {
          setImageUrl(data.imageUrl)
        }
      })
      .catch(error => console.error('Error fetching profile image:', error))
  }, [])

  const handleResumeDownload = () => {
    const resumeUrl = '/YoelNasiKazado_resume.pdf'
    window.open(resumeUrl, '_blank')
  }

  return (
    <section id="intro" className="py-20 text-center">
      <Image
        src={imageUrl}
        alt="Yoel Nasi Kazado"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Yoel Nasi Kazado</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Data Science Student</p>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
        Data Science student at UW-Madison with extensive experience in venture capital and entrepreneurship. 
        Passionate about leveraging data analysis to drive business decisions and innovation in entrepreneurial ventures.
      </p>
      <Button onClick={handleResumeDownload}>
        <FileText className="w-5 h-5 mr-2" />
        Download Resume
      </Button>
    </section>
  )
}

