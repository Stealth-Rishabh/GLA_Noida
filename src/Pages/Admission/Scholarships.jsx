import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Calendar } from "lucide-react";
import { scholarships } from "./data";

export default function Scholarships() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-black text-white p-6">
              <h3 className="text-xl font-semibold">{scholarship.name}</h3>
              <p className="text-gray-300 mt-1 flex items-center">
                <Award className="h-4 w-4 mr-1" />
                {scholarship.coverage}
              </p>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-gray-600">{scholarship.description}</p>

              <div>
                <h4 className="font-medium text-lg mb-4 flex items-center">
                  <span className="bg-gray-100 p-1.5 rounded-full mr-2">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </span>
                  Eligibility
                </h4>
                <ul className="space-y-2 pl-4">
                  {scholarship.eligibility.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2"
                      variants={itemVariants}
                    >
                      <div className="h-5 w-5 flex-shrink-0 mt-0.5 text-black">
                        •
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {scholarship.deadline && (
                <motion.div
                  className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg"
                  variants={itemVariants}
                >
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Application Deadline: {scholarship.deadline}
                  </span>
                </motion.div>
              )}

              <motion.div
                className="pt-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="bg-black hover:bg-gray-800 text-white w-full">
                  Apply for Scholarship
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-100"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="md:w-1/4 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <Award className="h-12 w-12 text-white" />
            </div>
          </motion.div>
          <div className="md:w-3/4">
            <h3 className="text-2xl font-semibold mb-4">
              Additional Financial Aid
            </h3>
            <p className="text-gray-600 mb-6">
              Beyond our institutional scholarships, we encourage students to
              explore external funding opportunities:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Government education grants and loans",
                "Corporate sponsorships",
                "International student exchange programs",
                "Work-study opportunities on campus",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 bg-white p-4 rounded-lg border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
