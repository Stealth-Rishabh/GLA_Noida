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
import { useElementOnScreen } from "./components/use-element-on-screen";
import { AnimationStyles } from "./components/animation-styles";
import { IndustryPartners } from "./components/industry-partners";
import AdmissionStepper from "./Stepper";
export function AIML() {
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
  const [industryPartnersRef, industryPartnersVisible] = useElementOnScreen({ threshold: 0.1 });
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

  const icons = [
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
    {
      src: "https://img.icons8.com/?size=96&id=AzLSbCDHPY0k&format=png",
      alt: "Acute Rating",
    },
    {
      src: "https://img.icons8.com/?size=100&id=WdvNU85TbUGt&format=png",
      alt: "Airtel",
    },
    {
      src: "https://img.icons8.com/?size=96&id=7bKLognUSdDj&format=png",
      alt: "Anand Rathi",
    },
  ];

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
            "Have you ever wondered how your smartphone recognizes your face, or how your personal assistant, like Siri or Alexa, responds to your voice? That's the magic of Artificial Intelligence (AI) and Machine Learning (ML). From helping us navigate through traffic with GPS to predicting your next movie based on your preferences, AI and ML are all around us, changing the way we live and work. These technologies are rapidly advancing, and as they evolve, they're making an even bigger impact on industries worldwide",
            "A B. Tech in Computer Science & Engineering with a focus on Artificial Intelligence and Machine Learning (AI/ML) at GLA University, in partnership with Microsoft, offers you a chance to dive into the heart of this revolution. This program covers everything from the basics of programming languages like Python and R, and Tableau, to exploring the depths of machine learning algorithms, data analysis, and intelligent systems. With a curriculum backed by industry giants, you'll not only learn cutting-edge skills but also get hands-on experience with Microsoft tools, preparing you to be a leader in AI and ML technologies.",
          ]}
          imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
          features={[
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Practical Learning",
              description: "Industry Professionals",
            },
            {
              icon: <Building2 className="h-6 w-6 text-cusGreen" />,
              title: "Industry Visits",
              description: "Leading Companies",
            },
            {
              icon: <UserPlus className="h-6 w-6 text-cusGreen" />,
              title: "Small Class Sizes",
              description: "Personalized Attention",
            },
            {
              icon: <UsersRound className="h-6 w-6 text-cusGreen" />,
              title: "Collaborative Learning",
              description: "Team Environment",
            },
            {
              icon: <Code2 className="h-6 w-6 text-cusGreen" />,
              title: "Real-World Projects",
              description: "Hackathons & Bootcamps",
            },
            {
              icon: <Wrench className="h-6 w-6 text-cusGreen" />,
              title: "Skill Building",
              description: "Interactive Workshops",
            },
            {
              icon: <Lightbulb className="h-6 w-6 text-cusGreen" />,
              title: "Innovation Culture",
              description: "Research Focused",
            },
            {
              icon: <UserCircle className="h-6 w-6 text-cusGreen" />,
              title: "Holistic Growth",
              description: "Beyond Academics",
            },
          ]}
        />
      </div>

      {/* Industry Partners */}
      <div
        ref={industryPartnersRef}
        className={`${fadeInUp} ${
          industryPartnersVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <IndustryPartners
          title="Industry Partners"
          subtitle="Trusted by"
          icons={icons}
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
      </div>

      {/* Eligibility */}
      <div
        ref={eligibilityRef}
        className={`${fadeInUp} ${
          eligibilityVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
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
          programTitle="B.Tech in Computer Science & Engineering with AI/ML"
          programDuration="4 Years"
          programDescription="Kickstart your journey in the world of Artificial Intelligence and Machine Learning with a B.Tech from GLA University, Greater Noida campus. Gain the skills and hands-on experience needed to lead in this fast-growing field. Join us and shape the future of technology!"
        />
      </div>

      {/* Admission Process  */}
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
      </div>

      {/* Labs */}
      {/* <div ref={labsRef} className={`${fadeInUp} ${labsVisible ? fadeInUpVisible : fadeInUpHidden}`}>
        <LabsSection
          title="State-of-the-Art Labs"
          subtitle="Facilities"
          labs={[
            {
              title: "Data Analysis Lab",
              description: "Equipped with high-performance workstations and the latest data analysis software",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Machine Learning Lab",
              description: "GPU-accelerated computing environment for training complex machine learning models",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Visualization Studio",
              description: "Interactive displays and VR equipment for advanced data visualization projects",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Cloud Computing Lab",
              description: "Access to major cloud platforms for distributed computing and big data processing",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Collaboration Space",
              description: "Modern workspace designed for team projects and interdisciplinary collaboration",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Research Center",
              description: "Resources and tools for conducting cutting-edge data science research",
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
      {/* <div ref={eventsRef} className={`${fadeInUp} ${eventsVisible ? fadeInUpVisible : fadeInUpHidden}`}>
        <EventsSection
          title="Recent Events & Activities"
          subtitle="Stay Connected"
          events={[
            {
              title: "Data Science Summit 2025",
              date: "March 15, 2025",
              description: "Annual conference featuring industry experts and the latest trends in data science",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "AI Workshop Series",
              date: "February 10-12, 2025",
              description: "Hands-on workshops exploring practical applications of artificial intelligence",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Career Fair",
              date: "January 25, 2025",
              description: "Connect with top employers looking for data science talent",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Hackathon: Data for Good",
              date: "December 5-7, 2024",
              description: "48-hour challenge to develop data-driven solutions for social impact",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Guest Lecture: Ethics in AI",
              date: "November 18, 2024",
              description: "Distinguished speaker series on responsible AI development",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Alumni Networking Night",
              date: "October 30, 2024",
              description: "Evening of networking with program graduates and industry professionals",
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

export default AIML;
