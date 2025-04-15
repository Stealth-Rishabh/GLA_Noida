import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Calendar } from "lucide-react"

export function CurriculumSection({ title, subtitle, programTitle, programDuration, programDescription }) {
  return (
    <section className="py-24 background-gradient relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto text-center mb-16">
          <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
          <Heading level={2} className="text-center text-cusBlue">
            {title}
          </Heading>
          <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-min">
            <Heading level={3} className="text-2xl font-bold mb-2">
              {programTitle}
            </Heading>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                {programDuration}
              </Badge>
            </div>
            <p className="text-muted-foreground mb-6">{programDescription}</p>
            <div className="mt-auto pt-4 border-t">
              <Button className="w-full bg-cusGreen text-white hover:bg-cusGreen/80 gap-2">
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
