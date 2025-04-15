import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"

export function FeesSection({ title, subtitle, plans }) {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-md mx-auto text-center mb-20">
        <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
        <Heading level={2} className="text-center text-cusBlue">
          {title}
        </Heading>
        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative group hover:-translate-y-2 transition-all duration-300 ${
              plan.highlight ? "border-primary shadow-lg z-10 pt-0" : "hover:border-primary/50 hover:shadow-md"
            }`}
          >
            <CardHeader
              className={`${
                plan.highlight ? "bg-cusBlue p-5 text-slate-100" : ""
              } rounded-t-lg transition-colors duration-300`}
            >
              <CardTitle className="text-xl">{plan.title}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
            </CardHeader>
            <CardFooter>
              <Button
                className={`w-full group ${
                  plan.highlight
                    ? "bg-cusYellow hover:bg-cusYellow/80 text-cusBlue"
                    : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-primary/50"
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
