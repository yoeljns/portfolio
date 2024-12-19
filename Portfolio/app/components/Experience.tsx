'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Modal } from './Modal'

const experiences = [
  {
    title: "Data Analyst",
    company: "Entrepreneurship Initiative Project, Office of the Chancellor",
    date: "October 2024 - Present",
    summary: "Analyzed entrepreneurial data and designed databases to track university-affiliated entrepreneurs and investors.",
    details: [
      "Exported, processed, and analyzed data on entrepreneurial activities, leveraging insights to support strategic initiatives in entrepreneurship.",
      "Designed and implemented databases to track and analyze university-affiliated entrepreneurs and investors, facilitating streamlined access to networking and collaboration opportunities.",
      "Developed and executed LinkedIn and other scraping processes to gather and aggregate data on entrepreneurs and investors, enhancing the accuracy and comprehensiveness of the university's entrepreneurial network."
    ]
  },
  {
    title: "Senior Analyst",
    company: "StartoVC, UW-Madison",
    date: "February 2024 – Present",
    summary: "Evaluated early-stage startups and conducted comprehensive due diligence to inform investment decisions.",
    details: [
      "Sourced and evaluated high-potential early-stage startups, focusing on university student-founded ventures.",
      "Conducted comprehensive due diligence on startup teams, market potential, financials, and scalability to inform investment decisions.",
      "Collaborated with senior partners to assess potential investments' viability and risk profile, contributing to deal flow and strategy.",
      "Received formal training from Idea Fund VC on founder and company valuation, financial modeling, and due diligence practices."
    ]
  },
  {
    title: "Business Operations & Sales Intern",
    company: "Avrupa Mümessillik",
    date: "July 2023 – August 2024",
    summary: "Improved operational efficiency and strengthened customer relations through process automation and strategic negotiations.",
    details: [
      "Implemented an automated Excel Workflow to reduce time spent on accounting and finance operations by 20%.",
      "Strengthened customer relations by connecting with customers to understand and resolve pain points.",
      "Engaged in contract negotiations with factories, managing to extend sales of 2 types of products by 3%.",
      "Formulated transportation agreements and pricing, optimizing route plans/contracts to be 8% cheaper."
    ]
  }
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null)

  return (
    <section id="experience" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedExperience(exp)}>
            <CardHeader>
              <CardTitle className="text-lg">{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.date}</p>
              <p className="text-sm">{exp.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)}>
        {selectedExperience && (
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedExperience.title}</h3>
            <p className="text-lg text-muted-foreground mb-2">{selectedExperience.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{selectedExperience.date}</p>
            <p className="mb-4">{selectedExperience.summary}</p>
            <h4 className="text-xl font-semibold mb-2">Responsibilities & Achievements</h4>
            <ul className="list-disc list-inside space-y-2">
              {selectedExperience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  )
}

