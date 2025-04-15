import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Calendar } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";

export function CurriculumSection({
  title,
  subtitle,
  programTitle,
  programDuration,
  programDescription,
}) {
  return (
    <section className="py-24 background-gradient relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"
        />
      </motion.div>

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
          className="max-w-md mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Badge className="mb-4 bg-cusGreen text-white">{subtitle}</Badge>
          </motion.div>
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="h-1 w-20 bg-cusYellow mx-auto rounded-full"
          />
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-min"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Heading level={3} className="text-2xl font-bold mb-2">
                {programTitle}
              </Heading>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-2 mb-4"
            >
              <Badge variant="outline" className="text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                {programDuration}
              </Badge>
            </motion.div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-muted-foreground mb-6"
            >
              {programDescription}
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-auto pt-4 border-t"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cusGreen text-white hover:bg-cusGreen/80 gap-2 flex items-center justify-center py-2 rounded-md"
              >
                Apply Now
                <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
