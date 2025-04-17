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
import herobg from "@/assets/programs/HeroAIML.png";
import { Building2 } from "lucide-react";
import { UserPlus } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Code2 } from "lucide-react";
import { Wrench } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { UserCircle } from "lucide-react";
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
import { IndustryPartners } from "./components/industry-partners";
import AdmissionStepper from "./Stepper";

// Import recruiter images
import accentureImg from "@/assets/programs/recruiters/accenture.webp";
import amazonImg from "@/assets/programs/recruiters/amazon.webp";
import facebookImg from "@/assets/programs/recruiters/facebook.webp";
import ibmImg from "@/assets/programs/recruiters/IBM.webp";
import intelImg from "@/assets/programs/recruiters/Intel.webp";
import microsoftImg from "@/assets/programs/recruiters/microsoft.png";
import nvidiaImg from "@/assets/programs/recruiters/nvidia.webp";
import samsungImg from "@/assets/programs/recruiters/samsung.webp";

export function AIML() {
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

  const icons = [
    {
      src: accentureImg,
      alt: "Accenture",
    },
    {
      src: amazonImg,
      alt: "Amazon", 
    },
    {
      src: facebookImg,
      alt: "Facebook",
    },
    {
      src: ibmImg,
      alt: "IBM",
    },
    {
      src: intelImg,
      alt: "Intel",
    },
    {
      src: microsoftImg,
      alt: "Microsoft",
    },
    {
      src: nvidiaImg,
      alt: "NVIDIA",
    },
    {
      src: samsungImg,
      alt: "Samsung",
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Banner */}
      <HeroSection
        backgroundImage={herobg}
        title="B.Tech in"
        subtitle="Computer Science & Engineering with AI/ML"
        para="Transform your career with our comprehensive b.tech in computer science & engineering with AI/ML program designed for the modern industry. Learn from experts and build real-world projects."
        features={[
          "8-Semester Program",
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
          "Have you ever wondered how your smartphone recognizes your face, or how your personal assistant, like Siri or Alexa, responds to your voice? That's the magic of Artificial Intelligence (AI) and Machine Learning (ML). From helping us navigate through traffic with GPS to predicting your next movie based on your preferences, AI and ML are all around us, changing the way we live and work. These technologies are rapidly advancing, and as they evolve, they're making an even bigger impact on industries worldwide",
          "A B. Tech in Computer Science & Engineering with a focus on Artificial Intelligence and Machine Learning (AI/ML) at GLA University, in partnership with Microsoft, offers you a chance to dive into the heart of this revolution. This program covers everything from the basics of programming languages like Python and R, and Tableau, to exploring the depths of machine learning algorithms, data analysis, and intelligent systems. With a curriculum backed by industry giants, you'll not only learn cutting-edge skills but also get hands-on experience with Microsoft tools, preparing you to be a leader in AI and ML technologies.",
        ]}
        imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
        features={[
          {
            icon: <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Practical Learning",
            description: "Industry Professionals",
          },
          {
            icon: <Building2 className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Industry Visits",
            description: "Leading Companies",
          },
          {
            icon: <UserPlus className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Small Class Sizes",
            description: "Personalized Attention",
          },
          {
            icon: <UsersRound className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Collaborative Learning",
            description: "Team Environment",
          },
          {
            icon: <Code2 className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Real-World Projects",
            description: "Hackathons & Bootcamps",
          },
          {
            icon: <Wrench className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Skill Building",
            description: "Interactive Workshops",
          },
          {
            icon: <Lightbulb className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Innovation Culture",
            description: "Research Focused",
          },
          {
            icon: <UserCircle className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />,
            title: "Holistic Growth",
            description: "Beyond Academics",
          },
        ]}
      />

      {/* Program Outcomes */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="At GLA University, Greater Noida campus, we believe in learning by doing. Our approach is centered around real-world projects, industry collaborations, and skill-building workshops. This ensures that our students not only understand theoretical concepts but are also ready to apply them in the professional world."
        outcomes={[
          {
            title: "AI/ML Expert",
            description: "Build advanced AI algorithms and ML models.",
            icon: <Code2 className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Data Science Specialist",
            description:
              "Analyze data and extract actionable business insights.",
            icon: <Beaker className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Deep Learning Professional",
            description: "Create neural networks for AI applications.",
            icon: <Wrench className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "AI Solution Architect",
            description:
              "Design enterprise-level AI solutions and implementations.",
            icon: <Building2 className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Research Innovator",
            description: "Develop cutting-edge AI research and solutions.",
            icon: <Lightbulb className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "MLOps Engineer",
            description: "Deploy ML models in production environments.",
            icon: <UserPlus className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "AI Ethics Leader",
            description: "Ensure responsible and ethical AI development.",
            icon: <UserCircle className="h-10 w-10 text-cusGreen" />,
          },
          {
            title: "Industry Collaborator",
            description: "Deliver AI solutions with cross-functional teams.",
            icon: <UsersRound className="h-10 w-10 text-cusGreen" />,
          },
        ]}
      />

      {/* Eligibility */}
      <EligibilitySection
        title="Why Choose B.Tech CSE with AI/ML?"
        subtitle="Who Can Apply"
        description="AI and ML are the future, and every sector is eager to adopt these technologies to improve efficiency and productivity. From healthcare to finance, to entertainment, industries are relying more and more on AIML to create smarter solutions. By choosing this specialized program, you're not just learning about today's technology, you're preparing for the technology of tomorrow, ensuring a bright and successful career in this booming field."
        requirements={[
          "10+2 examination with Physics and Mathematics as mandatory subjects",
          "Chemistry or Computer Science as optional subject",
          "Minimum 50% marks in Physics, Mathematics and Chemistry/Computer Science combined",
          "Minimum 50% marks overall in 10+2 examination",
          "Strong analytical and problem-solving skills",
          "Basic computer proficiency",
          "Proficiency in English (written and verbal)",
        ]}
      />

      {/* Curriculum */}
      <CurriculumSection
        title="Curriculum"
        subtitle="What You'll Learn"
        programTitle="B.Tech in Computer Science & Engineering with AI/ML"
        programDuration="4 Years"
        programDescription="Kickstart your journey in the world of Artificial Intelligence and Machine Learning with a B.Tech from GLA University, Greater Noida campus. Gain the skills and hands-on experience needed to lead in this fast-growing field. Join us and shape the future of technology!"
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
            price: "₹2,43,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
          {
            title: "3rd Year Fees",
            price: "₹2,51,000/-",
            highlight: false,
            buttonText: "Enroll Now",
          },
          {
            title: "4th Year Fees",
            price: "₹2,59,000/-",
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

export default AIML;
