import { ArrowRight } from "lucide-react";
import SetUsApartImage from "@/assets/general/SetUsApart.webp";
import BackgroundWave from "@/assets/general/background-wave.svg";

import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function SetUsApart() {
  console.log("BackgroundWave:", BackgroundWave); // Debug log

  return (
    <div className="relative w-full max-w-7xl mx-auto my-12 px-0 md:px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Content Card */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="lg:col-span-5 bg-white p-8 sm:p-12 shadow-sm rounded-sm z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading
              level={2}
              className="text-black mb-4"
              subtext="Experience excellence at GLA University, where cutting-edge technology meets traditional values. Our state-of-the-art facilities, industry-aligned curriculum, and focus on practical learning sets us apart in higher education."
              subtextClassName="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              <TextAnimate
                as="span"
                by="word"
                delay={0.6}
                duration={0.5}
                animation="slideUp"
                className="inline-flex flex-wrap"
              >
                What Sets Us Apart?
              </TextAnimate>
              <span className="border-b-4 border-cusYellow"> </span>
            </Heading>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cusGreen text-white px-6 py-3 flex items-center gap-2 hover:bg-cusGreenLight transition-all duration-300 hover:shadow-lg"
          >
            Explore More
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="lg:col-span-7 lg:-ml-24 h-[400px] sm:h-[500px] lg:h-[600px] relative"
        >
          <img
            src={SetUsApartImage}
            alt="GLA University campus showcasing modern architecture and vibrant student life"
            className="object-cover rounded-sm w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
