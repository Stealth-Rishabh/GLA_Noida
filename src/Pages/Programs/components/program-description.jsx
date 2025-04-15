import React from "react";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

export function ProgramDescription({ title, description, features, imageUrl }) {
  return (
    <section className="py-24 container mx-auto max-w-7xl px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl overflow-hidden mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Heading level={2} className="text-center text-cusBlue">
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1 w-20 bg-cusYellow mx-auto rounded-full"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <motion.p 
                key={index} 
                className="text-[17px] text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="order-1 md:order-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="relative z-10 background-gradient-blue rounded-2xl shadow-xl p-6 border border-slate-100">
            <motion.img
              src={imageUrl || "/placeholder.svg"}
              alt="Program Overview"
              className="w-full h-auto rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Decorative elements */}
          {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div> */}
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-12 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="min-w-12 h-12 rounded-full bg-cusGreen/10 flex items-center justify-center group-hover:bg-cusGreen/20 transition-colors duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
            <div>
              <h4 className="font-medium text-base text-cusBlue sm:text-lg">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
