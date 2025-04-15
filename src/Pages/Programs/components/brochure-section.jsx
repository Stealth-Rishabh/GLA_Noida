import { ArrowRight, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

export function BrochureSection({ title, subtitle, description, features, imageUrl }) {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center background-gradient-blue p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
          <div>
            <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
            <Heading level={3} className="text-center sm:text-left text-white">
              {title}
            </Heading>
            <p className="text-white/80 mb-8">{description}</p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cusBlueLighter flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{feature.title}</h4>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="gap-2 group bg-cusYellow text-cusBlue hover:bg-cusYellow/80 transition-all duration-300 hover:pl-6 hover:pr-10"
              >
                Download Now
                <Download className="h-4 w-4 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>

            <div className="relative bg-white p-4 rounded-xl shadow-lg border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="Program Brochure"
                className="w-full h-auto aspect-square object-cover rounded-lg shadow-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-cusYellow text-cusBlue p-3 rounded-full shadow-lg">
                <Download className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
