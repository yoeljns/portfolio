'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ExternalLink, BarChart2, DollarSign, GamepadIcon } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "VC Investments Visualization",
      description: "An interactive data visualization platform analyzing venture capital investments across geographical regions, industries, and investment levels. Built with R/Shiny, this tool provides comprehensive insights into funding patterns and investment trends.",
      url: "https://tuyadr-yoel-nasi0kazado.shinyapps.io/vc-investments-app/",
      role: "Data Scientist & Developer",
      date: "2023",
      icon: BarChart2
    },
    {
      title: "Blackjack Strategy Assistant",
      description: "A web application that helps players make optimal decisions in blackjack games. Features include deck tracking, strategy recommendations, and game statistics.",
      url: "https://blackjackstrategy.yoelnk.com/",
      role: "Developer",
      date: "2023",
      icon: GamepadIcon
    },
    {
      title: "NFTicx",
      role: "Co-Founder/CEO",
      date: "October 2022 - September 2023",
      description: "Directed the full-cycle development of a Minimum Viable Product (MVP), from concept to market launch. Developed and implemented innovative marketing strategies to drive early user adoption.",
      url: "#",
      icon: DollarSign
    }
  ]

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <Card 
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all group"
              onClick={() => handleProjectClick(project.url)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    {project.title}
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{project.role} | {project.date}</p>
                <p className="text-sm">{project.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

