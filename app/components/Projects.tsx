"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ExternalLink, BarChart2, GamepadIcon, BotIcon as Robot, Calculator } from "lucide-react"

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
          const Icon = project.icon
          return (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 relative group overflow-hidden"
              onClick={() => handleProjectClick(project.url)}
            >
              <div className="relative w-full h-48 overflow-hidden">
                {/* Browser-like frame for website preview */}
                <div className="absolute inset-0 flex flex-col border border-gray-200 rounded-t-lg bg-white">
                  {/* Browser header */}
                  <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 rounded-t-lg">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto flex items-center px-3 py-1 rounded-md bg-gray-200 text-xs text-gray-600 max-w-[80%] truncate">
                      {project.domain}
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <Icon className="w-12 h-12 text-gray-400 mb-2" />
                      <h3 className="text-sm font-medium text-gray-700">{project.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">Click to visit website</p>
                    </div>
                  </div>
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
