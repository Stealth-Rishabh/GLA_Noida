import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";

export function FeesSection({ title, subtitle, plans }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="py-24 container mx-auto px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto text-center mb-20"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
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

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.5,
              delay: 0.2 + index * 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <Card
              className={`relative group hover:-translate-y-2 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary shadow-lg z-10 pt-0"
                  : "hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
              >
                <CardHeader
                  className={`${
                    plan.highlight ? "bg-cusBlue p-5 text-slate-100" : ""
                  } rounded-t-lg transition-colors duration-300`}
                >
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                  >
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>
                  </motion.div>
                </CardHeader>
              </motion.div>
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
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
