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
import { useElementOnScreen } from "./components/use-element-on-screen";
import { AnimationStyles } from "./components/animation-styles";
import herobg from "@/assets/programs/HeroMBA.png";
import AdmissionStepper from "./Stepper";
export function MBA() {
  // Animation classes
  const fadeInUp = "transition-all duration-700 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const fadeInUpHidden = "opacity-0 translate-y-10";

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
  const [feesRef, feesVisible] = useElementOnScreen({ threshold: 0.1 });
  const [labsRef, labsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [brochureRef, brochureVisible] = useElementOnScreen({ threshold: 0.1 });
  const [eventsRef, eventsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useElementOnScreen({ threshold: 0.1 });
  const [admissionProcessRef, admissionProcessVisible] = useElementOnScreen({
    threshold: 0.1,
  });

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
            "Are you ready to take your career to the next level and step into the world of business leadership? The MBA (Dual) programme at GLA University offers you a unique opportunity to do just that. This isn't just any MBA, it's designed to prepare you for the ever-evolving global business landscape by giving you the knowledge, skills, and strategic mindset needed to thrive in today's fast-paced, competitive environment.",
            "So, what does 'MBA (Dual)' mean? Well, it means you get the best of both worlds! The Dual aspect of this programme allows you to specialize in two distinct areas of business, helping you build a broader, more versatile skill set. Not only will you gain in-depth knowledge of core business functions like marketing, finance, human resources, operations, and strategy, but you'll also have the flexibility to customize your education by choosing a second specialization that aligns with your career aspirations.",
            "Our MBA programme is designed with a perfect mix of theoretical and practical experience. You won't just be sitting in classrooms absorbing knowledge, you'll actively engage in real-world business challenges through case studies, live projects, and internships. These hands-on opportunities give you a chance to apply what you've learned in real business situations, helping you develop critical thinking, problem-solving, and decision-making skills that are essential in today's business world.",
          ]}
          imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
          features={[
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Industry-Integrated Learning",
              description: "Hands-on Experience",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Small Batch Sizes",
              description: "Personalized Learning",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Best-In-Class Placements",
              description: "Up to 55 LPA",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "Project-Based Education",
              description: "Real-world Cases",
            },
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Industry Visits",
              description: "Corporate Exposure",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Top Recruiters",
              description: "Premium Placements",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "New-Gen IEDC",
              description: "Start-up Incubation",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "JOVAC Sessions",
              description: "Career Enhancement",
            },
          ]}
        />
      </div>

      {/* Program Outcome */}
      <div
        ref={outcomesRef}
        className={`${fadeInUp} ${
          outcomesVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <ProgramOutcomes
          title="Program Outcomes"
          subtitle="What You'll Achieve"
          description="At GLA University, Greater Noida campus, our MBA program goes beyond traditional business education. Through industry partnerships, experiential learning, and dual specialization options, we ensure you develop both strategic thinking and practical management skills. By the time you graduate, you'll be ready to take on leadership roles and make impactful business decisions."
          outcomes={[
            {
              title: "Leadership",
              description:
                "Learn to lead and manage business teams effectively.",
              icon: <Users className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Financial Acumen",
              description:
                "Master financial analysis and decision-making for organizational growth.",
              icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Marketing Excellence",
              description:
                "Create and execute innovative marketing strategies in digital age.",
              icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Operations Management",
              description:
                "Optimize business processes and supply chains for maximum efficiency.",
              icon: <Beaker className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Business Analytics",
              description:
                "Transform data into actionable business insights and strategies.",
              icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Entrepreneurial Mindset",
              description:
                "Develop skills to identify and capitalize on business opportunities.",
              icon: <Users className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Global Business Perspective",
              description:
                "Navigate international markets and cross-cultural business environments effectively.",
              icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Digital Transformation",
              description:
                "Lead organizational change in the digital business landscape.",
              icon: <Beaker className="h-10 w-10 text-cusGreen" />,
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
          programTitle="MBA in Dual Specialization"
          programDuration="2 Years"
          programDescription="Enroll in the MBA in Dual Specialization program at GLA University and gain the skills, knowledge, and experience needed to lead in today's competitive business world. Join us and start your transformative journey towards a successful and fulfilling career."
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

      {/* Recent Events and Activities */}
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
    </div>
  );
}

export default MBA;
