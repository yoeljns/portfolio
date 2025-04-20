"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Modal } from "./Modal"

const experiences = [
  {
    title: "Data Analyst",
    company: "UW-Madison Entrepreneurship Initiative",
    date: "October 2025 - Present",
    summary:
      "Analyzed entrepreneurial data and designed databases to track university-affiliated entrepreneurs and investors.",
    details: [
      "Developed and executed automated data extraction processes using APIs and Python to gather and aggregate data on 1000+ entrepreneurs and investors, enhancing the accuracy and comprehensiveness of the university's entrepreneurial network and leading to an increase in data points for strategic analysis.",
      "Designed and implemented a scalable Excel-based database to track and analyze university-affiliated entrepreneurs and investors, increasing streamlined access to networking and collaboration opportunities.",
      "Streamlined data analysis processes, which provided key insights that supported the launch of new entrepreneurial programs within the Entrepreneurship Initiative Project",
    ],
  },
  {
    title: "Associate",
    company: "Wisconsin Investment Partners (WIP)",
    date: "October 2025 - Present",
    summary: "Collaborated with WIP to screen, evaluate, and mentor startups as part of an angel investment program.",
    details: [
      "Gained hands-on experience with the angel investment process, including startup evaluation and deal structuring.",
      "Participated actively in deal screening and evaluation committees, contributing to investment decision-making.",
      "Built a network by engaging with entrepreneurs, company representatives, and WIP members.",
      "Mentored high-value startups, supporting their growth and development in dynamic markets.",
    ],
  },
  {
    title: "Senior Analyst",
    company: "Starto VC",
    date: "October 2025 - Present",
    summary: "Evaluated early-stage startups and conducted comprehensive due diligence to inform investment decisions.",
    details: [
      "Sourced and evaluated over 50 high-potential early-stage startups, explicitly focusing on university student-founded ventures, leading to a curated pipeline of 15+ promising investment opportunities for partner firms.",
      "Received formal training from IdeaFund VC, gaining expertise in founder and company valuation, financial modeling (using techniques such as discounted cash flow), and due diligence practices.",
      "Conducted comprehensive due diligence on startup teams, market potential, financials, and scalability to inform investment decisions.",
      "Collaborated with senior partners to assess potential investments' viability and risk profile, contributing to deal flow and strategy.",
    ],
  },
  {
    title: "Business Operations & Sales Intern",
    company: "Avrupa Mümessillik",
    date: "July 2023 – August 2024",
    summary:
      "Improved operational efficiency and strengthened customer relations through process automation and strategic negotiations.",
    details: [
      "Streamlined business operations by automating Excel workflow, cutting time on accounting & finance tasks by 20%",
      "Enhanced customer relations through direct customer engagement, proactively resolving pain points, led to key factory contract talks that extended sales of two products by 3%",
      "Optimized transportation costs by formulating agreements, resulting in route plans and contracts 8% cheaper",
    ],
  },
  {
    title: "Co-Founder/CEO",
    company: "NFTicx",
    date: "October 2022 - September 2023",
    summary: "Led the development and launch of an NFT-based product, from concept to market.",
    details: [
      "Directed the full-cycle development of a Minimum Viable Product (MVP), from concept to market launch, ensuring strategic alignment with user needs and market trends.",
      "Developed and implemented innovative marketing strategies to drive early user adoption and successfully monetize the product.",
      "Negotiated a profitable exit by effectively positioning the venture for acquisition.",
    ],
  },
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<(typeof experiences)[0] | null>(null)

  return (
    <section id="experience" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 relative group"
            onClick={() => setSelectedExperience(exp)}
          >
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs py-1 px-2 rounded z-10 group-hover:bg-black group-hover:text-white transition-colors duration-200">
              Click for more
            </div>
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
