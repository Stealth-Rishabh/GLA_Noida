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
import { AnimationStyles } from "./components/animation-styles";
import { GradientBackground } from "@/components/ui/gradient-background";
import AdmissionStepper from "./Stepper";
import herobg from "@/assets/programs/HeroBBA.png";

export function BBA() {
  // Sample data for components
  const icons = [
    {
      src: "/src/assets/programs/recruiters/Google.webp",
      alt: "Google",
    },
    {
      src: "/src/assets/programs/recruiters/microsoft.png",
      alt: "Microsoft",
    },
    {
      src: "/src/assets/programs/recruiters/IBM.webp",
      alt: "IBM",
    },
    {
      src: "/src/assets/programs/recruiters/Deloitte.webp",
      alt: "Deloitte",
    },
    {
      src: "/src/assets/programs/recruiters/Axis_Bank.webp",
      alt: "Axis Bank",
    },
    {
      src: "/src/assets/programs/recruiters/bankOfAmerica.webp",
      alt: "The Bank of America",
    },
    {
      src: "/src/assets/programs/recruiters/TCS.webp",
      alt: "TCS",
    },
    {
      src: "/src/assets/programs/recruiters/berger.webp",
      alt: "Berger Paints",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimationStyles />

      {/* Hero Banner */}
      <HeroSection
        backgroundImage={herobg}
        title="BBA in"
        subtitle="Management Science"
        para="Transform your career with our comprehensive bba in management science program designed for the modern industry. Learn from experts and build real-world projects."
        features={[
          "6-Semester Program",
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
      <GradientBackground className="gradientOne py-20">
        <ProgramDescription
          title="About the Program"
          description={[
            "In today's world, businesses are the backbone of every economy, catering to the needs of people across the globe. The BBA in Management Science opens the door to a wide range of career opportunities in industries like finance, marketing, human resources, and operations.",
            "This three-year program is designed to equip students with a strong foundation in key management areas such as finance, marketing, accounting, and organizational behavior. The course not only focuses on core business principles but also helps students enhance their communication, leadership, and problem-solving skills—traits that are essential for success in the business world.",
            "Additionally, this program is a great stepping stone for those aspiring to pursue an MBA. It equips students with the knowledge and preparation needed to succeed in competitive MBA entrance exams like CAT, XAT, MAT, and others.",
          ]}
          imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
          features={[
            {
              icon: (
                <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Hands-On Workshops",
              description: "Industry Tools Training",
            },
            {
              icon: (
                <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Live Projects",
              description: "Real-world Case Studies",
            },
            {
              icon: (
                <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Industry Visits",
              description: "Leading Company Tours",
            },
            {
              icon: (
                <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Small Batch Size",
              description: "Personalized Attention",
            },
            {
              icon: (
                <BookOpen className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Career Focus",
              description: "Professional Skills",
            },
            {
              icon: (
                <Users className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Networking",
              description: "Industry Connections",
            },
            {
              icon: (
                <Beaker className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Innovation Hub",
              description: "Research & Creativity",
            },
            {
              icon: (
                <GraduationCap className="h-6 w-6 text-cusAccent group-hover:text-white transition-all duration-300" />
              ),
              title: "Holistic Growth",
              description: "All-round Development",
            },
          ]}
        />
      </GradientBackground>

      <EligibilitySection
        title="Why Choose BBA in Management Science?"
        subtitle="Who Can Apply"
        description="With businesses growing and evolving, the demand for skilled professionals in management roles is higher than ever. A BBA in Management Science equips you with the knowledge and skills to succeed in the competitive world of business. Whether you want to climb the corporate ladder or start your own business, this program is the perfect foundation for your future."
        requirements={[
          "10+2 examination with minimum 60% marks in any stream (Science/Commerce/Arts)",
          "Strong analytical and problem-solving skills",
          "Basic computer proficiency",
          "Good communication skills in English (written and verbal)",
          "Leadership qualities and team spirit",
          "Interest in business and management concepts",
          "Ability to think critically and strategically",
        ]}
      />

      {/* Program Outcome */}
      <ProgramOutcomes
        title="Program Outcomes"
        subtitle="What You'll Achieve"
        description="At GLA University, Greater Noida campus, we believe in learning beyond textbooks. Our hands-on approach to education ensures that students are not only prepared theoretically but also gain practical skills that are highly valued in the industry."
        outcomes={[
          {
            title: "Business Leadership",
            description:
              "Lead teams effectively to drive organizational growth.",
            icon: <Users className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Strategic Management",
            description:
              "Master strategic planning for sustainable business growth.",
            icon: <BookOpen className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Financial Acumen",
            description:
              "Expert in financial analysis and investment management.",
            icon: <GraduationCap className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Marketing Excellence",
            description: "Drive brand growth with modern marketing strategies.",
            icon: <Beaker className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Operations Management",
            description:
              "Optimize business processes for improved operational efficiency.",
            icon: <BookOpen className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Business Analytics",
            description:
              "Make data-driven decisions using modern analytics tools.",
            icon: <Beaker className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Entrepreneurial Mindset",
            description:
              "Launch and grow successful business ventures effectively.",
            icon: <Users className="h-10 w-10 text-cusAccent" />,
          },
          {
            title: "Global Business Perspective",
            description:
              "Master international business practices and cross-cultural management.",
            icon: <GraduationCap className="h-10 w-10 text-cusAccent" />,
          },
        ]}
      />

      {/* Eligibility */}

      {/* Admission Process */}
      <AdmissionStepper className="checkBackground" />

      {/* Curriculum */}
      <CurriculumSection
        title="Curriculum"
        subtitle="What You'll Learn"
        programTitle="BBA in Management Science"
        programDuration="3 Years"
        programDescription="Gain essential business knowledge and leadership skills with a BBA in Management Science from GLA University, Greater Noida campus. Prepare for a successful career in management and beyond with hands-on learning and industry insights."
      />

      {/* Fees */}
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

export default BBA;
