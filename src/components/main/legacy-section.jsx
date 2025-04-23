import React, { useState, useEffect, useRef } from "react";
import sketch from "@/assets/general/sketch_two.png";
import iconOne from "@/assets/icons/icon1.webp";
import iconTwo from "@/assets/icons/icon2.webp";
import iconThree from "@/assets/icons/icon3.webp";
import iconFour from "@/assets/icons/icon4.webp";

const LegacySection = () => {
  const [counters, setCounters] = useState({
    placement: 0,
    alumni: 0,
    faculty: 0,
    students: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = {
    placement: 86,
    alumni: 39000,
    faculty: 700,
    students: 23000,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-10%",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounters(targetValues);
        clearInterval(timer);
      } else {
        const progress = currentStep / steps;
        setCounters({
          placement: Math.floor(targetValues.placement * progress),
          alumni: Math.floor(targetValues.alumni * progress),
          faculty: Math.floor(targetValues.faculty * progress),
          students: Math.floor(targetValues.students * progress),
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a4e78] sm:text-4xl">
            A Legacy of Educational Excellence
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <img src={iconOne} alt="Career icon" className="w-12 h-12" />
            </div>
            <p className="text-4xl font-bold text-[#00b8d4]">
              {counters.placement}%
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              Career Placement
              <br />
              in Past 5 Years
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <img src={iconTwo} alt="Alumni icon" className="w-12 h-12" />
            </div>
            <p className="text-4xl font-bold text-[#00b8d4]">
              {counters.alumni.toLocaleString()}+
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              Alumni Spread Across
              <br />
              the Globe
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <img src={iconThree} alt="Faculty icon" className="w-12 h-12" />
            </div>
            <p className="text-4xl font-bold text-[#00b8d4]">
              {counters.faculty}+
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              Faculty Members from
              <br />
              Global Institutions
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <img src={iconFour} alt="Students icon" className="w-12 h-12" />
            </div>
            <p className="text-4xl font-bold text-[#00b8d4]">
              {counters.students.toLocaleString()}+
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              Students Enrolled in
              <br />
              Different Courses
            </p>
          </div>
        </div>

        {/* Building Image */}
        <div className="w-full">
          <img
            src={sketch}
            alt="Architectural sketch of educational building"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
