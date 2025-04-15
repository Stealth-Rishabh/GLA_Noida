import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { ArrowRight } from "lucide-react"

export function ProgramOutcomes({ title, subtitle, description, outcomes }) {
  return (
    <section className="py-24 background-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
          <Heading level={2} className="text-center text-cusBlue">
            {title}
          </Heading>
          <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
          <p className="text-black mt-5 text-lg max-w-4xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {outcomes.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gap-2"
            >
              <CardHeader className="flex flex-row gap-5">
                <div className="mb-2 min-w-16 h-16 rounded-2xl bg-cusGreenLighter flex items-center justify-center group-hover:bg-cusGreenLighter/80 transition-colors duration-300">
                  {item.icon}
                </div>
                <CardTitle className="text-cusBlueLight text-2xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="h-auto bg-cusGreen group-hover:text-white text-white hover:text-white hover:bg-cusGreen transition-colors duration-300">
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
