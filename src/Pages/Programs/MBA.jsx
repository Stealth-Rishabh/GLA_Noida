import { Calendar, GraduationCap, Users, Beaker, BookOpen } from "lucide-react";
import Seo from "@/components/SEO/Seo";

import { HeroSection } from "./components/hero-section";
import { ProgramDescription } from "./components/program-description";
import { IndustryPartners } from "./components/industry-partners";
import { ProgramOutcomes } from "./components/program-outcomes";
import { EligibilitySection } from "./components/eligibility-section";
import { CurriculumSection } from "./components/curriculum-section";
import { BrochureSection } from "./components/brochure-section";
import { CTASection } from "./components/cta-section";
import herobg from "@/assets/programs/HeroMBA.png";
import AdmissionStepper from "./Stepper";
import googleWebp from "@/assets/programs/recruiters/Google.webp";
import microsoftImg from "@/assets/programs/recruiters/microsoft.png";
import eyWebp from "@/assets/programs/recruiters/ey.webp";
import deloitteWebp from "@/assets/programs/recruiters/Deloitte.webp";
import axisWebp from "@/assets/programs/recruiters/Axis_Bank.webp";
import boaWebp from "@/assets/programs/recruiters/bankOfAmerica.webp";
import hdfcWebp from "@/assets/programs/recruiters/hdfc.webp";
import nseWebp from "@/assets/programs/recruiters/nse.webp";
import brochureImg from "@/assets/programs/brochure4.webp";
import { AnimationStyles } from "./components/animation-styles";
import MBAPrograms from "./components/MBAPrograms";
import CoreSpecializations from "./components/core-specializations";

export function MBA() {
  const icons = [
    {
      src: googleWebp,
      alt: "Google",
    },
    {
      src: microsoftImg,
      alt: "Microsoft",
    },
    {
      src: deloitteWebp,
      alt: "Deloitte",
    },
    {
      src: axisWebp,
      alt: "Axis Bank",
    },
    {
      src: boaWebp,
      alt: "Bank of America",
    },
    {
      src: hdfcWebp,
      alt: "HDFC Bank",
    },
    {
      src: nseWebp,
      alt: "NSE",
    },
    {
      src: eyWebp,
      alt: "EY",
    },
  ];

  const plans = [
    {
      title: "1st Year Fees",
      price: "₹2,35,000/-",
      highlight: true,
      buttonText: "Enroll Now",
    },
    {
      title: "2nd Year Fees",
      price: "₹2,45,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Seo
        title="Top MBA Colleges in Noida with Fee Structure - GLA University"
        description="Explore top MBA colleges in Noida with fee structure. GLA University offers quality education, expert faculty, and great placements."
        keywords={[
          "mba colleges in noida",
          "top mba colleges in noida",
          "top mba colleges in noida with fee structure",
        ]}
        // ogTitle="GLA University - MBA with Dual Specialization"
        // ogDescription="Advance your career with our comprehensive MBA program. Learn about our curriculum, specializations, and industry connections."
        // ogImage="https://www.example.com/images/gla-mba-og.jpg" // Replace with actual image URL
        canonicalUrl="/programs/mba" // Replace with actual URL
      />
      <AnimationStyles />
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={herobg}
        title="AI-Enabled MBA with"
        subtitle="Dual Specialization"
        para="The AI-Enabled MBA. Double the Expertise. Transform Your Future."
        features={[
          "4-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "AI-Powered Learning",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "500+", label: "Top Recruiters" },
        ]}
        courseName="8410"
        courseTitle="MBA"
      />

      {/* Program Description */}
      <ProgramDescription
        title="About the Program"
        description={[
          "Step into the future of business leadership with GLA University’s AI-Enabled MBA (Dual Specialization). This cutting-edge program empowers you to master today’s dynamic global market by combining two specializations, giving you a versatile skill set and a competitive advantage.",
          "Gain more than knowledge — tackle real-world challenges through practical learning, live projects, and internships that sharpen your strategic thinking and decision-making. Graduate ready to lead, innovate, and succeed in the modern business world.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "AI-Powered Learning",
            description: "Hands-on Experience",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Small Batch Sizes",
            description: "Personalized Learning",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Best-In-Class Placements",
            description: "Up to 55 LPA",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Expert Faculty",
            description: "Top B-School Professors",
          },
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry Visits",
            description: "Corporate Exposure",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Top Recruiters",
            description: "Premium Placements",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "New-Gen IEDC",
            description: "Start-up Incubation",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "JOVAC Sessions",
            description: "Career Enhancement",
          },
        ]}
      />

      {/* MBA Programs Section */}
      <CoreSpecializations />
      <MBAPrograms />

      {/* Program Outcome */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="At GLA University, Greater Noida campus, our MBA program goes beyond traditional business education. Through industry partnerships, experiential learning, and dual specialization options, we ensure you develop both strategic thinking and practical management skills. By the time you graduate, you'll be ready to take on leadership roles and make impactful business decisions."
        outcomes={[
          {
            title: "Leadership",
            description: "Learn to lead and manage business teams effectively.",
            icon: <Users className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Financial Acumen",
            description:
              "Master financial analysis and decision-making for organizational growth.",
            icon: <BookOpen className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Marketing Excellence",
            description:
              "Create and execute innovative marketing strategies in digital age.",
            icon: <GraduationCap className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Operations Management",
            description:
              "Optimize business processes and supply chains for maximum efficiency.",
            icon: <Beaker className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Business Analytics",
            description:
              "Transform data into actionable business insights and strategies.",
            icon: <BookOpen className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Entrepreneurial Mindset",
            description:
              "Develop skills to identify and capitalize on business opportunities.",
            icon: <Users className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Global Business Perspective",
            description:
              "Navigate international markets and cross-cultural business environments effectively.",
            icon: <GraduationCap className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Digital Transformation",
            description:
              "Lead organizational change in the digital business landscape.",
            icon: <Beaker className="h-10 w-10 text-cusAccent" />,
          },
        ]}
      />

      {/* Eligibility */}
      <EligibilitySection
        requirements={[
          "Bachelor's degree (minimum 3 years) in any discipline from a recognized institution",
          "Minimum 50% marks in Bachelor's degree",
          "Strong analytical and problem-solving abilities",
          "Good communication and interpersonal skills",
          "Basic computer proficiency",
          "Proficiency in English (written and verbal)",
          "Prior work experience preferred but not mandatory",
        ]}
        plans={plans}
      />

      {/* Industry Partners */}
      <IndustryPartners
        title="Industry Partners"
        subtitle="Trusted by"
        icons={icons}
      />

      {/* Curriculum */}
      <CurriculumSection
        title="Why Pursue an MBA in Dual Specialization?"
        programDescription="The demand for skilled professionals in managerial roles continues to rise, making an MBA an essential qualification for career advancement. Many engineers, after completing their technical degrees, choose to pursue an MBA to open up new career avenues and boost their professional growth."
      />

      {/* Admission Process */}
      <AdmissionStepper />

      {/* Fees */}
      {/* <FeesSection
        title="Program Fees"
        subtitle="Investment"
        plans={[
          {
            title: "1st Year Fees",
            price: "₹2,35,000/-",
            highlight: true,
            buttonText: "Enroll Now",
          },
          {
            title: "2nd Year Fees",
            price: "₹2,45,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
        ]}
      /> */}
      {/* Brochure */}
      <BrochureSection
        title="Download Program Brochure"
        subtitle="Program Details"
        description="Get detailed information about our program, curriculum, faculty, and more in our comprehensive brochure."
        imageUrl={brochureImg}
        features={[
          {
            title: "Complete Curriculum",
            description: "Detailed overview of all modules and courses",
          },
          {
            title: "Faculty Profiles",
            description: "Learn about our expert instructors and mentors",
          },
          {
            title: "Success Stories",
            description: "Read about our alumni and their achievements",
          },
        ]}
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Career?"
        subtitle="Limited Seats Available"
        description="Join our MBA in Dual Specialization Program and unlock new opportunities in the world of business."
        ctaInfo={[
          {
            icon: <Calendar className="h-8 w-8 text-cusSecondary" />,
            title: "Next Batch",
            description: "Starting June 15, 2025",
          },
          {
            icon: <Users className="h-8 w-8 text-cusSecondary" />,
            title: "Class Size",
            description: "Limited to 30 students",
          },
          {
            icon: <GraduationCap className="h-8 w-8 text-cusSecondary" />,
            title: "Application Deadline",
            description: "May 15, 2025",
          },
        ]}
      />
    </div>
  );
}

export default MBA;
