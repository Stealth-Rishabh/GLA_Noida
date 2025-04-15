import { useEffect, useRef, useState } from "react";
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
import { useElementOnScreen } from "./components/use-element-on-screen";
import { AnimationStyles } from "./components/animation-styles";
import AdmissionStepper from "./Stepper";

export function BCA() {
  // Animation hooks
  const [isVisible, setIsVisible] = useState({});
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

  // Function to check if element is in viewport
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, [containerRef, options]);

    return [containerRef, isVisible];
  };

  // Animation classes
  const fadeInUp = "transition-all duration-700 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const fadeInUpHidden = "opacity-0 translate-y-10";

  // Add keyframe animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scrollDown {
        0% { transform: translateY(0); opacity: 0; }
        30% { opacity: 1; }
        60% { opacity: 1; }
        100% { transform: translateY(20px); opacity: 0; }
      }
      .animate-scrollDown {
        animation: scrollDown 2s infinite;
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      @keyframes pulse-ring {
        0% { transform: scale(0.8); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 0.3; }
        100% { transform: scale(0.8); opacity: 0.5; }
      }
      .animate-pulse-ring {
        animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .animate-shimmer {
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
        background-size: 200% 100%;
        animation: shimmer 3s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Refs for sections
  const [heroRef, heroVisible] = useElementOnScreen({ threshold: 0.1 });
  const [descRef, descVisible] = useElementOnScreen({ threshold: 0.1 });
  const [outcomesRef, outcomesVisible] = useElementOnScreen({ threshold: 0.1 });
  const [eligibilityRef, eligibilityVisible] = useElementOnScreen({
    threshold: 0.1,
  });
  const [curriculumRef, curriculumVisible] = useElementOnScreen({
    threshold: 0.1,
  });
  const [admissionProcessRef, admissionProcessVisible] = useElementOnScreen({
    threshold: 0.1,
  });
  const [feesRef, feesVisible] = useElementOnScreen({ threshold: 0.1 });
  const [labsRef, labsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [brochureRef, brochureVisible] = useElementOnScreen({ threshold: 0.1 });
  const [eventsRef, eventsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimationStyles />

      {/* Hero Banner */}
      <div
        ref={heroRef}
        className={`${fadeInUp} ${
          heroVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
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
      </div>

      {/* Program Description */}
      <div
        ref={descRef}
        className={`${fadeInUp} ${
          descVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
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
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Industry-Focused Learning",
              description: "Latest Data Science Tools",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Hands-on Experience",
              description: "Labs & Assignments",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Small Batch Sizes",
              description: "Personalized Attention",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "Career-Driven Approach",
              description: "Professional Success",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Networking Opportunities",
              description: "Industry Connections",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Start-up Incubation",
              description: "New-Gen IEDC Support",
            },
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Top Placements",
              description: "Up to 55 LPA Package",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "Holistic Development",
              description: "Well-Rounded Growth",
            },
          ]}
        />
      </div>

      {/* Program Outcomes */}
      <div
        ref={outcomesRef}
        className={`${fadeInUp} ${
          outcomesVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
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
      </div>

      {/* Eligibility */}
      <div
        ref={eligibilityRef}
        className={`${fadeInUp} ${
          eligibilityVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <EligibilitySection
          title="Why BCA in Data Science is the Right Choice"
          subtitle="Who Can Apply"
          description="A BCA degree gives you a strong foundation in computer applications, and when combined with a Data Science specialization, it sets you up for long-term career success. Data Science is the future, and its applications are expanding across sectors like healthcare, finance, retail, and technology. This degree helps ensure a rewarding and future-proof career."
          requirements={[
            "10+2 examination with Mathematics as one of the subjects",
            "Minimum 60% marks in 10+2 examination (any stream)",
            "Strong analytical and problem-solving skills",
            "Basic computer proficiency",
            "Proficiency in English (written and verbal)",
            "Passion for data analysis and statistics",
            "Interest in programming and technology",
          ]}
        />
      </div>

      {/* Curriculum */}
      <div
        ref={curriculumRef}
        className={`${fadeInUp} ${
          curriculumVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <CurriculumSection
          title="Curriculum"
          subtitle="What You'll Learn"
          programTitle="BCA in Data Science"
          programDuration="3 Years"
          programDescription="Choose BCA in Data Science at GLA University, Greater Noida campus to start your journey towards a career in one of the most exciting and in-demand fields of today's tech world!"
        />
      </div>

      {/* Admission Process */}
      <div
        ref={admissionProcessRef}
        className={`${fadeInUp} ${
          admissionProcessVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <AdmissionStepper />
      </div>
      {/* Fees */}
      <div
        ref={feesRef}
        className={`${fadeInUp} ${
          feesVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <FeesSection
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
        />
      </div>

      {/* Labs */}
      {/* <div
        ref={labsRef}
        className={`${fadeInUp} ${
          labsVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <LabsSection
          title="State-of-the-Art Labs"
          subtitle="Facilities"
          labs={[
            {
              title: "Data Analysis Lab",
              description:
                "Equipped with high-performance workstations and the latest data analysis software",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Machine Learning Lab",
              description:
                "GPU-accelerated computing environment for training complex machine learning models",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Visualization Studio",
              description:
                "Interactive displays and VR equipment for advanced data visualization projects",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Cloud Computing Lab",
              description:
                "Access to major cloud platforms for distributed computing and big data processing",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Collaboration Space",
              description:
                "Modern workspace designed for team projects and interdisciplinary collaboration",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Research Center",
              description:
                "Resources and tools for conducting cutting-edge data science research",
              image: "/placeholder.svg?height=400&width=600",
            },
          ]}
        />
      </div> */}

      {/* Brochure */}
      <div
        ref={brochureRef}
        className={`${fadeInUp} ${
          brochureVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
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
      </div>

      {/* Events */}
      {/* <div
        ref={eventsRef}
        className={`${fadeInUp} ${
          eventsVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <EventsSection
          title="Recent Events & Activities"
          subtitle="Stay Connected"
          events={[
            {
              title: "Data Science Summit 2025",
              date: "March 15, 2025",
              description:
                "Annual conference featuring industry experts and the latest trends in data science",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "AI Workshop Series",
              date: "February 10-12, 2025",
              description:
                "Hands-on workshops exploring practical applications of artificial intelligence",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Career Fair",
              date: "January 25, 2025",
              description:
                "Connect with top employers looking for data science talent",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Hackathon: Data for Good",
              date: "December 5-7, 2024",
              description:
                "48-hour challenge to develop data-driven solutions for social impact",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Guest Lecture: Ethics in AI",
              date: "November 18, 2024",
              description:
                "Distinguished speaker series on responsible AI development",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Alumni Networking Night",
              date: "October 30, 2024",
              description:
                "Evening of networking with program graduates and industry professionals",
              image: "/placeholder.svg?height=400&width=600",
            },
          ]}
        />
      </div> */}

      {/* CTA Section */}
      <div
        ref={ctaRef}
        className={`${fadeInUp} ${
          ctaVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <CTASection
          title="Ready to Transform Your Career?"
          subtitle="Limited Seats Available"
          description="Join our Advanced Data Science Program and unlock new opportunities in the world of data."
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
    </div>
  );
}

export default BCA;
