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
import AdmissionStepper from "./Stepper";
import herobg from "@/assets/programs/HeroBBA.png";
export function BBA() {
  // Animation classes
  const fadeInUp = "transition-all duration-700 ease-out";
  const fadeInUpVisible = "opacity-100 translate-y-0";
  const fadeInUpHidden = "opacity-0 translate-y-10";

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

  // Sample data for components
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
            "In today's world, businesses are the backbone of every economy, catering to the needs of people across the globe. The BBA in Management Science opens the door to a wide range of career opportunities in industries like finance, marketing, human resources, and operations.",
            "This three-year program is designed to equip students with a strong foundation in key management areas such as finance, marketing, accounting, and organizational behavior. The course not only focuses on core business principles but also helps students enhance their communication, leadership, and problem-solving skills—traits that are essential for success in the business world.",
            "Additionally, this program is a great stepping stone for those aspiring to pursue an MBA. It equips students with the knowledge and preparation needed to succeed in competitive MBA entrance exams like CAT, XAT, MAT, and others.",
          ]}
          imageUrl="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
          features={[
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Hands-On Workshops",
              description: "Industry Tools Training",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Live Projects",
              description: "Real-world Case Studies",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Industry Visits",
              description: "Leading Company Tours",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "Small Batch Size",
              description: "Personalized Attention",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Career Focus",
              description: "Professional Skills",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Networking",
              description: "Industry Connections",
            },
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Innovation Hub",
              description: "Research & Creativity",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "Holistic Growth",
              description: "All-round Development",
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
        <IndustryPartners title="Industry Partners" subtitle="Trusted by" icons={icons} />
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
          description="At GLA University, Greater Noida campus, we believe in learning beyond textbooks. Our hands-on approach to education ensures that students are not only prepared theoretically but also gain practical skills that are highly valued in the industry."
          outcomes={[
            {
              title: "Business Leadership",
              description:
                "Lead teams effectively to drive organizational growth.",
              icon: <Users className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Strategic Management",
              description:
                "Master strategic planning for sustainable business growth.",
              icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Financial Acumen",
              description:
                "Expert in financial analysis and investment management.",
              icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Marketing Excellence",
              description:
                "Drive brand growth with modern marketing strategies.",
              icon: <Beaker className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Operations Management",
              description:
                "Optimize business processes for improved operational efficiency.",
              icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Business Analytics",
              description:
                "Make data-driven decisions using modern analytics tools.",
              icon: <Beaker className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Entrepreneurial Mindset",
              description:
                "Launch and grow successful business ventures effectively.",
              icon: <Users className="h-10 w-10 text-cusGreen" />,
            },
            {
              title: "Global Business Perspective",
              description:
                "Master international business practices and cross-cultural management.",
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
          programTitle="BBA in Management Science"
          programDuration="3 Years"
          programDescription="Gain essential business knowledge and leadership skills with a BBA in Management Science from GLA University, Greater Noida campus. Prepare for a successful career in management and beyond with hands-on learning and industry insights."
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

export default BBA;
