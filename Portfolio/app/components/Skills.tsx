import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "Data Analysis", "Python", "Java", "R", "SQL", "MongoDB", "ED Technology",
    "Problem-Solving", "Microsoft Office", "Project Management", "Negotiation",
    "Event Organization/Management", "Client Relationship Management",
    "Communication and Presentation Skills", "Change Management",
    "Time Management and Multitasking"
  ]

  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary">{skill}</Badge>
        ))}
      </div>
    </section>
  )
}

