import React from "react";
import { Heading } from "@/components/ui/heading";

export function ProgramDescription({ title, description, features, imageUrl }) {
  return (
    <section className="py-24 container mx-auto max-w-7xl px-4">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <Heading level={2} className="text-center text-cusBlue">
          {title}
        </Heading>
        <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative z-10 background-gradient-blue rounded-2xl shadow-xl p-6 border border-slate-100">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Program Overview"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-12 mt-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer gap-3 group"
          >
            <div className="min-w-12 h-12 rounded-full bg-cusGreen/10 flex items-center justify-center group-hover:bg-cusGreen/20 transition-colors duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-base text-cusBlue sm:text-lg">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
