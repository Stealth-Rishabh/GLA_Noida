import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export function CTASection({ title, subtitle, description, ctaInfo }) {
  return (
    <section className="py-24 background-gradient-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cusGreen/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cusGreen/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mx-auto">
          <Badge className="mb-6 bg-cusGreen text-white hover:bg-cusGreen/80">
            {subtitle}
          </Badge>
          <Heading level={2} className="text-center mb-6 text-cusBlue">
            {title}
          </Heading>
          <p className="text-xl opacity-90 mb-12 text-black max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap max-w-3xl mx-auto justify-center gap-6">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 group bg-cusYellow text-cusBlue hover:bg-cusYellow/80 transition-all duration-300 hover:pl-6 hover:pr-10"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-cusBlue border-cusYellow hover:bg-cusYellow/10 gap-2 group"
            >
              Request Information
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="mt-16 pt-16 border-t border-cusBlue max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
            {ctaInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cusGreenLighter flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="opacity-80">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
