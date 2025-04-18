import { useEffect, useState } from "react";
import {
  Download,
  Calendar,
  GraduationCap,
  Users,
  BookOpen,
  Beaker,
  CreditCard,
  ChevronRight,
  ArrowRight,
  Check,
  Mail,
  Phone,
  User,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Section from "@/layout.jsx/section";
import { Heading } from "@/components/ui/heading";
import herobg from "@/assets/programs/HeroBCA.png";
import { HeroSection } from "./components/hero-section";
import { ProgramDescription } from "./components/program-description";
import { ProgramOutcomes } from "./components/program-outcomes";
import { EligibilitySection } from "./components/eligibility-section";
import { CurriculumSection } from "./components/curriculum-section";
import { FeesSection } from "./components/fees-section";
import { LabsSection } from "./components/labs-section";
import { BrochureSection } from "./components/brochure-section";
import { EventsSection } from "./components/events-section";
import { CTASection } from "./components/cta-section";
import AdmissionStepper from "./Stepper";
import { IndustryPartners } from "./components/industry-partners";
import googleWebp from "@/assets/programs/recruiters/Google.webp";
import microsoftImg from "@/assets/programs/recruiters/microsoft.png";
import ibmWebp from "@/assets/programs/recruiters/IBM.webp";
import deloitteWebp from "@/assets/programs/recruiters/Deloitte.webp";
import infosysWebp from "@/assets/programs/recruiters/Infosys.webp";
import cognizantWebp from "@/assets/programs/recruiters/cognizant.webp";
import tcsWebp from "@/assets/programs/recruiters/TCS.webp";
import hclWebp from "@/assets/programs/recruiters/HCL.webp";
import brochureImg from "@/assets/programs/brochure3.webp";

export function BCA() {
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
      src: ibmWebp,
      alt: "IBM",
    },
    {
      src: deloitteWebp,
      alt: "Deloitte",
    },
    {
      src: infosysWebp,
      alt: "Infosys",
    },
    {
      src: cognizantWebp,
      alt: "Cognizant",
    },
    {
      src: tcsWebp,
      alt: "TCS",
    },
    {
      src: hclWebp,
      alt: "HCL",
    },
  ];
  // State management
  const [activeField, setActiveField] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form focus
  const handleFocus = (field) => {
    setFormFocus((prev) => ({
      ...prev,
      [field]: true,
    }));
    setActiveField(field);
  };

  // Handle form blur
  const handleBlur = (field) => {
    setFormFocus((prev) => ({
      ...prev,
      [field]: false,
    }));
    setActiveField(null);
  };

  const plans = [
    {
      title: "1st Year Fees",
      price: "₹1,40,000/-",
      highlight: true,
      buttonText: "Enroll Now",
    },
    {
      title: "2nd Year Fees",
      price: "₹1,45,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
    {
      title: "3rd Year Fees",
      price: "₹1,50,000/-",
      highlight: false,
      buttonText: "Enroll Now",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={herobg}
        title="BCA in"
        subtitle="Data Science"
        para="Transform your career with our comprehensive bca in data science program designed for the modern industry. Learn from experts and build real-world projects."
        features={[
          "6-Semester Program",
          "Expert Faculty",
          "Industry-Ready Skills",
          "Latest Technology",
        ]}
        stats={[
          { value: "55 LPA", label: "Highest CTC" },
          { value: "4.8/5", label: "Student Rating" },
          { value: "400+", label: "Top Recruiters" },
        ]}
      />

      {/* Industry Partners */}
      <IndustryPartners
        title="Industry Partners"
        subtitle="Trusted by"
        icons={icons}
      />

      {/* Program Description */}
      <ProgramDescription
        title="About the Program"
        description={[
          "In today's tech-driven world, data is everything. The field of data science is growing rapidly, and its influence is expanding across industries. The BCA in Data Science at GLA University is a three-year undergraduate program that combines the essentials of computer science with specialized knowledge in data science.",
          "This course provides a strong foundation in programming, software development, and data analysis. It covers crucial areas such as Machine Learning, Big Data Analytics, Database Management Systems, and Statistics, giving students a comprehensive understanding of how data can drive decision-making in businesses and industries.",
          "By the end of the program, students are equipped with the skills and expertise needed to pursue exciting careers as Data Scientists, Machine Learning Engineers, Business Analysts, and more.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Industry-Focused Learning",
            description: "Latest Data Science Tools",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Hands-on Experience",
            description: "Labs & Assignments",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Small Batch Sizes",
            description: "Personalized Attention",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Career-Driven Approach",
            description: "Professional Success",
          },
          {
            icon: (
              <Users className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Networking Opportunities",
            description: "Industry Connections",
          },
          {
            icon: (
              <BookOpen className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Start-up Incubation",
            description: "New-Gen IEDC Support",
          },
          {
            icon: (
              <Beaker className="h-6 w-6 text-cusPrimary group-hover:text-white transition-all duration-300" />
            ),
            title: "Top Placements",
            description: "Up to 55 LPA Package",
          },
          {
            icon: (
              <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
            ),
            title: "Holistic Development",
            description: "Well-Rounded Growth",
          },
        ]}
      />

      {/* Eligibility */}
      <EligibilitySection
        requirements={[
          "10+2 examination with Mathematics as one of the subjects",
          "Minimum 60% marks in 10+2 examination (any stream)",
          "Strong analytical and problem-solving skills",
          "Basic computer proficiency",
          "Proficiency in English (written and verbal)",
          "Passion for data analysis and statistics",
          "Interest in programming and technology",
        ]}
        plans={plans}
      />

      {/* Program Outcomes */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="At GLA University, Greater Noida campus, we don't just teach; we prepare students for the real world. Our approach includes project-based learning, allowing students to get hands-on experience and develop practical skills."
        outcomes={[
          {
            title: "Data Analysis Mastery",
            description:
              "Master data analysis using industry tools and techniques.",
            icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Programming Proficiency",
            description: "Develop programming skills in Python, R and SQL.",
            icon: <Beaker className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Machine Learning Expert",
            description:
              "Build and deploy machine learning models for analytics.",
            icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Statistical Analysis Skills",
            description: "Apply statistics to extract insights from data.",
            icon: <Users className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Big Data Technologies",
            description: "Work with Hadoop and Spark for data processing.",
            icon: <Beaker className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Business Intelligence",
            description:
              "Transform data insights into actionable business strategies.",
            icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Data Ethics & Privacy",
            description:
              "Implement ethical practices ensuring data security and privacy.",
            icon: <Users className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Industry Applications",
            description:
              "Apply data science concepts to solve industry problems.",
            icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
          },
        ]}
      />

      {/* Admission Process */}
      <AdmissionStepper />

      {/* Curriculum */}
      <CurriculumSection
        title="Why BCA in Data Science is the Right Choice"
        programDescription="A BCA degree gives you a strong foundation in computer applications, and when combined with a Data Science specialization, it sets you up for long-term career success. Data Science is the future, and its applications are expanding across sectors like healthcare, finance, retail, and technology. This degree helps ensure a rewarding and future-proof career."
      />

      {/* Fees */}
      {/* <FeesSection
        title="Program Fees"
        subtitle="Investment"
        plans={[
          {
            title: "1st Year Fees",
            price: "₹1,40,000/-",
            highlight: true,
            buttonText: "Enroll Now",
          },
          {
            title: "2nd Year Fees",
            price: "₹1,45,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
          {
            title: "3rd Year Fees",
            price: "₹1,50,000/-",
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
        description="Join our Advanced Data Science Program and unlock new opportunities in the world of data."
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

export default BCA;
