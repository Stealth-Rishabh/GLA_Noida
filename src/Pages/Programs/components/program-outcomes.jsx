import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";

export function ProgramOutcomes({ title, subtitle, description, outcomes }) {
  return (
    <section className="py-24 background-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
          <Heading
            level={2}
            className="text-center text-cusBlue"
            subtextClassName="text-gray-600 text-[17px] mb-8 text-center leading-relaxed"
          >
            <TextAnimate
              as="span"
              by="word"
              delay={0.2}
              duration={0.5}
              animation="slideUp"
              className="inline-flex flex-wrap"
            >
              {title}
            </TextAnimate>
          </Heading>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 w-20 bg-cusYellow mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Increased delay between each card
                ease: "easeOut",
              }}
            >
              <Card
                className="border-none shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gap-2"
              >
                <CardHeader className="flex flex-row gap-5">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="mb-2 min-w-16 h-16 rounded-2xl bg-cusGreenLighter flex items-center justify-center group-hover:bg-cusGreenLighter/80 transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <CardTitle className="text-cusBlueLight text-2xl font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cusGreen text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-cusGreenLight transition-all duration-300 hover:shadow-lg w-fit justify-center"
                  >
                    Learn more
                    <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
