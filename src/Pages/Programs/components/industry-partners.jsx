import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import IconMarquee from "@/components/main/IconMarquee"

export function IndustryPartners({ title, subtitle, icons }) {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
        <Heading level={2} className="text-center text-cusBlue">
          {title}
        </Heading>
        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        <div className="mt-10 sm:mt-16">
          <IconMarquee icons={icons} />
        </div>
      </div>
    </section>
  )
}
