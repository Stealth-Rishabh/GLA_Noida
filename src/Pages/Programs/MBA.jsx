import { Calendar, GraduationCap, Users, Beaker, BookOpen } from "lucide-react";
import { HeroSection } from "./components/hero-section";
import { ProgramDescription } from "./components/program-description";
import { IndustryPartners } from "./components/industry-partners";
import { ProgramOutcomes } from "./components/program-outcomes";
import { EligibilitySection } from "./components/eligibility-section";
import { CurriculumSection } from "./components/curriculum-section";
import { FeesSection } from "./components/fees-section";
import { LabsSection } from "./components/labs-section";
import { BrochureSection } from "./components/brochure-section";
import { EventsSection } from "./components/events-section";
import { CTASection } from "./components/cta-section";
import herobg from "@/assets/programs/HeroMBA.png";
import AdmissionStepper from "./Stepper";

export function MBA() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={herobg}
        title="MBA in"
        subtitle="Dual Specialization"
        para="Transform your career with our comprehensive MBA in Dual Specialization program designed for the modern industry. Learn from experts and build real-world projects."
        features={[
          "4-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "Latest Technology",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "500+", label: "Top Recruiters" },
        ]}
      />

      {/* Program Description */}
      <ProgramDescription
        title="About the Program"
        description={[
          "Are you ready to take your career to the next level and step into the world of business leadership? The MBA (Dual) programme at GLA University offers you a unique opportunity to do just that. This isn't just any MBA, it's designed to prepare you for the ever-evolving global business landscape by giving you the knowledge, skills, and strategic mindset needed to thrive in today's fast-paced, competitive environment.",
          "So, what does 'MBA (Dual)' mean? Well, it means you get the best of both worlds! The Dual aspect of this programme allows you to specialize in two distinct areas of business, helping you build a broader, more versatile skill set. Not only will you gain in-depth knowledge of core business functions like marketing, finance, human resources, operations, and strategy, but you'll also have the flexibility to customize your education by choosing a second specialization that aligns with your career aspirations.",
          "Our MBA programme is designed with a perfect mix of theoretical and practical experience. You won't just be sitting in classrooms absorbing knowledge, you'll actively engage in real-world business challenges through case studies, live projects, and internships. These hands-on opportunities give you a chance to apply what you've learned in real business situations, helping you develop critical thinking, problem-solving, and decision-making skills that are essential in today's business world.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: <Beaker className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "Industry-Integrated Learning",
            description: "Hands-on Experience",
          },
          {
            icon: <BookOpen className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "Small Batch Sizes",
            description: "Personalized Learning",
          },
          {
            icon: <Users className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "Best-In-Class Placements",
            description: "Up to 55 LPA",
          },
          {
            icon: <GraduationCap className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "Project-Based Education",
            description: "Real-world Cases",
          },
          {
            icon: <Beaker className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "Industry Visits",
            description: "Corporate Exposure",
          },
          {
            icon: <BookOpen className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "Top Recruiters",
            description: "Premium Placements",
          },
          {
            icon: <Users className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "New-Gen IEDC",
            description: "Start-up Incubation",
          },
          {
            icon: <GraduationCap className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />,
            title: "JOVAC Sessions",
            description: "Career Enhancement",
          },
        ]}
      />

      {/* Program Outcome */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="At GLA University, Greater Noida campus, our MBA program goes beyond traditional business education. Through industry partnerships, experiential learning, and dual specialization options, we ensure you develop both strategic thinking and practical management skills. By the time you graduate, you'll be ready to take on leadership roles and make impactful business decisions."
        outcomes={[
          {
            title: "Leadership",
            description:
              "Learn to lead and manage business teams effectively.",
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
        title="Why Pursue an MBA in Dual Specialization?"
        subtitle="Who Can Apply"
        description="The demand for skilled professionals in managerial roles continues to rise, making an MBA an essential qualification for career advancement. Many engineers, after completing their technical degrees, choose to pursue an MBA to open up new career avenues and boost their professional growth."
        requirements={[
          "Bachelor's degree (minimum 3 years) in any discipline from a recognized institution",
          "Minimum 50% marks in Bachelor's degree",
          "Strong analytical and problem-solving abilities",
          "Good communication and interpersonal skills",
          "Basic computer proficiency",
          "Proficiency in English (written and verbal)",
          "Prior work experience preferred but not mandatory",
        ]}
      />

      {/* Curriculum */}
      <CurriculumSection
        title="Curriculum"
        subtitle="What You'll Learn"
        programTitle="MBA in Dual Specialization"
        programDuration="2 Years"
        programDescription="Enroll in the MBA in Dual Specialization program at GLA University and gain the skills, knowledge, and experience needed to lead in today's competitive business world. Join us and start your transformative journey towards a successful and fulfilling career."
      />

      {/* Admission Process */}
      <AdmissionStepper />

      {/* Fees */}
      <FeesSection
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
      />

      {/* Brochure */}
      <BrochureSection
        title="Download Program Brochure"
        subtitle="Program Details"
        description="Get detailed information about our program, curriculum, faculty, and more in our comprehensive brochure."
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
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
            icon: <Calendar className="h-8 w-8 text-cusGreen" />,
            title: "Next Batch",
            description: "Starting June 15, 2025",
          },
          {
            icon: <Users className="h-8 w-8 text-cusGreen" />,
            title: "Class Size",
            description: "Limited to 30 students",
          },
          {
            icon: <GraduationCap className="h-8 w-8 text-cusGreen" />,
            title: "Application Deadline",
            description: "May 15, 2025",
          },
        ]}
      />
    </div>
  );
}

export default MBA;
