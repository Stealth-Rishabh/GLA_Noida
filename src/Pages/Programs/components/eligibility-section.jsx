import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function EligibilitySection({ title, subtitle, description, requirements }) {
  return (
    <section className="py-24 container mx-auto max-w-7xl px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-3xl"></div>
          <div className="relative background-gradient-blue shadow-xl rounded-2xl overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="p-8">
              <Heading level={3} className="text-white mb-8">
                Eligibility Requirements
              </Heading>
              <ul className="space-y-3 text-white">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cusBlueLight group-hover:bg-cusBlueLight/80 transition-colors duration-300">
                      <ArrowRight className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="group gap-2 transition-all bg-cusYellow text-cusBlue hover:bg-cusYellow/80 duration-300 hover:pl-6 hover:pr-7"
                >
                  Check Your Eligibility
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
            <Heading level={2} className="text-left text-cusBlue">
              {title}
            </Heading>
            <div className="h-1 w-20 bg-cusYellow rounded-full"></div>
          </div>

          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  )
}
