"use client"

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Modal } from "./Modal"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

const leadershipExperiences = [
  {
    title: "Guest Speaker Host",
    organization: "UW-Madison",
    date: "2023",
    summary: "Hosted Dan Fogarty, a former journalist turned content marketer, as a guest speaker.",
    details: [
      "Leveraging LinkedIn: Follow industry leaders, engage with content, use genuine messages for connections.",
      "Authenticity Matters: Balance authenticity with professionalism to create genuine connections.",
      "Maximizing AI for Content Creation: Train AI tools with your unique knowledge, avoid generic language.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=efhPCVv1h7U&ab_channel=YoelNasiKazado",
    thumbnailUrl: `https://img.youtube.com/vi/efhPCVv1h7U/0.jpg`,
  },
  {
    title: "Gener8tor CS Nest & Ramp100 Member",
    organization: "UW-Madison",
    date: "February 2023 – September 2024",
    summary: "Participated in entrepreneurship programs and received mentorship on the entrepreneurial process.",
    details: [
      "Collaborated with fellow entrepreneurs and mentors during my Entrepreneurship Process",
      "Received mentorship from founders and professors on the entrepreneurial process, including fundraising.",
      "Engaged in networking events and workshops to enhance entrepreneurial skills and knowledge",
    ],
  },
  {
    title: "Board Member",
    organization: "Madison Association of Turkish Students, UW-Madison",
    date: "March 2023 – December 2024",
    summary: "Contributed to the promotion of Turkish culture and community engagement.",
    details: [
      "Worked on fundraising initiatives to support association activities",
      "Organized events showcasing Turkish culture to promote cross-cultural understanding",
    ],
  },
  {
    title: "Event Manager/Mentor",
    organization: "Hisar IdeaLab, Hisar Schools",
    date: "January 2018 – June 2022",
    summary: "Led educational initiatives and managed logistics for large-scale events.",
    details: [
      "Demonstrated strong organizational skills in planning and executing events",
      "Mentored students in various educational initiatives, fostering their growth and development",
    ],
  },
]

export default function LeadershipInvolvement() {
  const [selectedExperience, setSelectedExperience] = useState<(typeof leadershipExperiences)[0] | null>(null)

  const handleExperienceClick = (exp: (typeof leadershipExperiences)[0]) => {
    setSelectedExperience(exp)
  }

  return (
    <section id="leadership-involvement" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Leadership & Involvement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {leadershipExperiences.map((exp, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
            onClick={() => handleExperienceClick(exp)}
          >
            <CardHeader className="p-0">
              {exp.thumbnailUrl ? (
                <div className="relative w-full h-40">
                  <Image
                    src={exp.thumbnailUrl || "/placeholder.svg"}
                    alt={`${exp.title} thumbnail`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Youtube className="w-12 h-12 text-white opacity-80" />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-200 h-40 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">{exp.organization}</span>
                </div>
              )}
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.organization}</p>
              <p className="text-xs text-muted-foreground mt-1">{exp.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Modal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)}>
        {selectedExperience && (
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedExperience.title}</h3>
            <p className="text-lg text-muted-foreground mb-2">{selectedExperience.organization}</p>
            <p className="text-sm text-muted-foreground mb-4">{selectedExperience.date}</p>
            <p className="mb-4">{selectedExperience.summary}</p>
            <h4 className="text-xl font-semibold mb-2">Key Takeaways</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {selectedExperience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            {selectedExperience.videoUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(selectedExperience.videoUrl, "_blank", "noopener,noreferrer")}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Watch Event Video
              </Button>
            )}
          </div>
        )}
      </Modal>
    </section>
  )
}
