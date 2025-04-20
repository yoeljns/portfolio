import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "Data Analysis",
    "Financial Modeling",
    "Python",
    "Java",
    "R",
    "SQL",
    "Database Management",
    "Web Scraping",
    "Microsoft Office",
    "Project Management",
    "Negotiation",
    "Communication & Presentation",
    "Leadership",
    "Networking",
    "Client Relationship Management",
    "Problem-Solving",
    "Time Management & Multitasking",
    "Due Diligence",
  ]

  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
