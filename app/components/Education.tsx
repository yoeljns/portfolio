import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>University of Wisconsin-Madison</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">May 2025</p>
          <p>Bachelor of Science in Data Science</p>
          <p>Certificates in Entrepreneurship and Computer Science</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Venture Institute, VC Lab</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">March 2025</p>
          <p>Intensive 9-week program training in venture capital fund management with Decile Hub certification.</p>
        </CardContent>
      </Card>
    </section>
  )
}
