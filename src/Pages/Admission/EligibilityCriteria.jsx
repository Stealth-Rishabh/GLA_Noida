"use client";

import { CheckCircle, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function EligibilityCriteria({ course }) {
  if (!course) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-600"
      >
        Please select a course to view eligibility criteria
      </motion.div>
    );
  }

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
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-cusBlue to-cusBlue/80 text-white p-8 rounded-lg shadow-lg"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
        <p className="text-white/80">{course.overview}</p>
      </motion.div>

      {/* Eligibility Section */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Eligibility Criteria
        </h3>
        <div className="space-y-4">
          {Array.isArray(course.eligibility) ? (
            course.eligibility.map((criteria, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <CheckCircle className="h-6 w-6 text-cusYellow flex-shrink-0 mt-1" />
                <p className="text-gray-700">{criteria}</p>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="flex items-start space-x-3"
              variants={itemVariants}
            >
              <CheckCircle className="h-6 w-6 text-cusYellow flex-shrink-0 mt-1" />
              <p className="text-gray-700">{course.eligibility}</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Program Overview */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Program Overview
        </h3>
        <div className="space-y-4">
          {Array.isArray(course.benefits) ? (
            course.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                variants={itemVariants}
              >
                <CheckCircle className="h-6 w-6 text-cusYellow flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="flex items-start space-x-3"
              variants={itemVariants}
            >
              <CheckCircle className="h-6 w-6 text-cusYellow flex-shrink-0 mt-1" />
              <p className="text-gray-700">{course.benefits}</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Career Opportunities */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md"
        variants={itemVariants}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Career Opportunities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.isArray(course.positions) ? (
            course.positions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {position}
                </h4>
                <p className="text-gray-600">{course.careerPaths[index]}</p>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {course.positions}
              </h4>
              <p className="text-gray-600">{course.careerPaths}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
