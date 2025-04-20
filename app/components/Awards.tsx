import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Awards() {
  const awards = [
    {
      title: "ACM/IEEE Intl. Conference on Human-Robot Interaction: Delegates' Choice Award",
      year: "2019",
      description: "Awarded for the project 'Pomelo'.",
    },
    {
      title: "European Product Design Awards: Honorable Mention",
      year: "2019",
      description: "Recognized for innovative product design.",
    },
    {
      title: "Advanced Track: Alumni Award in Transcend UW",
      year: "2023",
      description: "Recognized for outstanding entrepreneurial performance.",
    },
  ]

  return (
    <section id="awards" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Awards</h2>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{award.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{award.year}</p>
              <p className="text-sm">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
