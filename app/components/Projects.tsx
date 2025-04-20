"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ExternalLink, BarChart2, GamepadIcon, BotIcon as Robot, Calculator, Code } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Medical Bill Negotiation Assistant",
      description:
        "A web application that helps users analyze their medical bills and provides negotiation recommendations. Users can upload their bills or paste bill text to receive detailed analysis and strategies for reducing costs.",
      url: "https://medicalbill.yoelnk.com/",
      role: "Developer",
      date: "2025",
      icon: Calculator,
      domain: "medicalbill.yoelnk.com",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "YJN Calculator",
      description:
        "A comprehensive collection of calculators for students, educators, and professionals. Features over 25 different calculators including academic tools, statistical analysis, financial calculations, and more. Built with Next.js and TypeScript.",
      url: "https://www.yjncalculator.com/",
      role: "Developer",
      date: "2025",
      icon: Calculator,
      domain: "yjncalculator.com",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Pomelo Educational Robot",
      description:
        "An educational robot designed for primary school classrooms to teach coding through physical code-blocks. Winner of the ACM/IEEE Intl. Conference on Human-Robot Interaction 2019 Delegates' Choice Award.",
      url: "https://hisarcs.github.io/pomelo/",
      role: "Project Lead",
      date: "2019",
      icon: Robot,
      domain: "hisarcs.github.io/pomelo",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "VC Investments Visualization",
      description:
        "An interactive data visualization platform analyzing venture capital investments across geographical regions, industries, and investment levels. Built with R/Shiny, this tool provides comprehensive insights into funding patterns and investment trends.",
      url: "https://tuyadr-yoel-nasi0kazado.shinyapps.io/vc-investments-app/",
      role: "Data Scientist & Developer",
      date: "2023",
      icon: BarChart2,
      domain: "tuyadr-yoel-nasi0kazado.shinyapps.io",
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Blackjack Strategy Assistant",
      description:
        "A web application that helps players make optimal decisions in blackjack games. Features include deck tracking, strategy recommendations, and game statistics.",
      url: "https://blackjackstrategy.yoelnk.com/",
      role: "Developer",
      date: "2023",
      icon: GamepadIcon,
      domain: "blackjackstrategy.yoelnk.com",
      color: "bg-red-100 text-red-700",
    },
  ]

  const sortedProjects = projects.sort((a, b) => Number.parseInt(b.date) - Number.parseInt(a.date))

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => {
          const Icon = project.icon || Code
          return (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
              onClick={() => handleProjectClick(project.url)}
            >
              <div className="relative w-full h-48 overflow-hidden">
                {/* Project icon display instead of browser frame */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center ${project.color || "bg-gray-100"}`}
                >
                  <Icon className="w-16 h-16 mb-2" />
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm mt-1 opacity-80">{project.domain}</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    {project.title}
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.role} | {project.date}
                </p>
                <p className="text-sm">{project.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
