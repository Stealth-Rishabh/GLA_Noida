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
import herobg from "@/assets/programs/HeroBtechCse.png";

export function BtechCS() {
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
  const [feesRef, feesVisible] = useElementOnScreen({ threshold: 0.1 });
  const [labsRef, labsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [brochureRef, brochureVisible] = useElementOnScreen({ threshold: 0.1 });
  const [eventsRef, eventsVisible] = useElementOnScreen({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className={`relative min-h-[700px] overflow-hidden flex items-center ${fadeInUp} ${
          heroVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        {/* <Section> */}
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700"></div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        ></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6 max-w-xl">
                {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-cusGreen text-white border border-primary/20 text-sm">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  New Program 2025
                </div> */}

                <Heading
                  level={1}
                  className="text-4xl md:!text-5xl font-bold text-white leading-tight"
                >
                  B.Tech in{" "}
                  <span className="text-cusBlueLighter relative">
                    Computer Science Engineering
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-cusBlue/30 rounded-full"></span>
                  </span>{" "}
                  (CSE)
                </Heading>

                <p className="text-xl text-white leading-relaxed">
                  Transform your career with our comprehensive b.tech in
                  computer science engineering program designed for the modern
                  industry. Learn from experts and build real-world projects.
                </p>
              </div>

              {/* <div className="flex flex-wrap gap-6 items-center"> */}
              <div className="grid grid-cols-2 sm:flex items-center gap-6 text-white text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cusBlueLighter"></div>
                  <span>8-Semester Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cusBlueLighter"></div>
                  <span>Expert Faculty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cusBlueLighter"></div>
                  <span>Industry-Ready Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cusBlueLighter"></div>
                  <span>Latest Technology</span>
                </div>
              </div>
              {/* </div> */}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cusBlueLighter mb-1">
                    55 LPA
                  </div>
                  <div className="text-sm text-white">Highest CTC</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cusBlueLighter mb-1">
                    4.8/5
                  </div>
                  <div className="text-sm text-white">Student Rating</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cusBlueLighter mb-1">
                    500+
                  </div>
                  <div className="text-sm text-white">Top Recruiters</div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-6 max-w-md relative ml-auto">
              {/* Form Card with Animation */}
              <div
                className="relative animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>

                {/* Decorative rings */}
                <div className="absolute -inset-4 border border-white/10 rounded-2xl animate-pulse-ring"></div>
                <div
                  className="absolute -inset-8 border border-white/5 rounded-3xl animate-pulse-ring"
                  style={{ animationDelay: "0.5s" }}
                ></div>

                {/* Form container */}
                <div className="relative bg-white/10 backdrop-blur-md border scale-90 border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>

                  {/* Form header */}
                  <div className="mb-8 text-center relative">
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"></div>
                    <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/50 rounded-br-lg"></div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Apply Now
                    </h3>
                    <p className="text-white/80">
                      Start your data science journey today
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-6">
                    {/* Name field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-white/90 flex items-center gap-1.5"
                        >
                          <User className="h-3.5 w-3.5" />
                          Full Name
                        </label>
                        {formState.name && (
                          <span className="text-xs text-primary/80 flex items-center">
                            <Check className="h-3 w-3 mr-1" /> Valid
                          </span>
                        )}
                      </div>
                      <div
                        className={`relative transition-all duration-300 ${
                          formFocus.name ? "scale-[1.02]" : ""
                        }`}
                      >
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={() => handleBlur("name")}
                          className={`w-full px-4 py-3 pl-10 bg-white/10 border rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            formFocus.name
                              ? "border-primary/50 focus:ring-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                              : "border-white/20"
                          }`}
                          placeholder="Enter your full name"
                        />
                        <User
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                            formFocus.name ? "text-primary" : "text-white/50"
                          }`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                            formFocus.name ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-white/90 flex items-center gap-1.5"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          Email Address
                        </label>
                        {formState.email && (
                          <span className="text-xs text-primary/80 flex items-center">
                            <Check className="h-3 w-3 mr-1" /> Valid
                          </span>
                        )}
                      </div>
                      <div
                        className={`relative transition-all duration-300 ${
                          formFocus.email ? "scale-[1.02]" : ""
                        }`}
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlur("email")}
                          className={`w-full px-4 py-3 pl-10 bg-white/10 border rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            formFocus.email
                              ? "border-primary/50 focus:ring-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                              : "border-white/20"
                          }`}
                          placeholder="Enter your email address"
                        />
                        <Mail
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                            formFocus.email ? "text-primary" : "text-white/50"
                          }`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                            formFocus.email ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Phone field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-white/90 flex items-center gap-1.5"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Phone Number
                        </label>
                        {formState.phone && (
                          <span className="text-xs text-primary/80 flex items-center">
                            <Check className="h-3 w-3 mr-1" /> Valid
                          </span>
                        )}
                      </div>
                      <div
                        className={`relative transition-all duration-300 ${
                          formFocus.phone ? "scale-[1.02]" : ""
                        }`}
                      >
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus("phone")}
                          onBlur={() => handleBlur("phone")}
                          className={`w-full px-4 py-3 pl-10 bg-white/10 border rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            formFocus.phone
                              ? "border-primary/50 focus:ring-primary/30 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                              : "border-white/20"
                          }`}
                          placeholder="Enter your phone number"
                        />
                        <Phone
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                            formFocus.phone ? "text-primary" : "text-white/50"
                          }`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                            formFocus.phone ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full relative overflow-hidden group bg-cusYellow hover:bg-cusYellow/90 text-cusBlue font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/20"
                      >
                        <span className="relative z-10 flex items-center justify-center text-lg">
                          Submit Application
                          <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      </button>
                    </div>

                    {/* Form footer */}
                    <div className="text-center text-white/60 text-xs flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      <span>
                        By submitting, you agree to our{" "}
                        <a
                          href="#"
                          className="text-primary hover:underline transition-colors duration-300"
                        >
                          Terms
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-primary hover:underline transition-colors duration-300"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute top-5 -right-6 animate-float"
                style={{ animationDuration: "4s" }}
              >
                <div className="bg-white rounded-full shadow-lg p-2">
                  <Badge className="bg-primary hover:bg-primary">
                    Limited Seats
                  </Badge>
                </div>
              </div>

              <div
                className="absolute bottom-5 -left-6 animate-float"
                style={{ animationDuration: "5s", animationDelay: "1s" }}
              >
                <div className="bg-white rounded-full shadow-lg p-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Starts June 2025
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-1 bg-white rounded-full animate-scrollDown"></div>
            </div>
          </div>
        </div>
        {/* </Section> */}
      </section>

      {/* Program Description */}
      <section
        ref={descRef}
        className={`py-24 container mx-auto max-w-7xl px-4 relative ${fadeInUp} ${
          descVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto text-center mb-16">
          {/* <Badge className="mb-4 bg-cusGreen text-white">
            About the Program
          </Badge> */}
          <Heading level={2} className="text-center text-cusBlue">
            About the Program
          </Heading>
          {/* <h2 className="text-4xl font-bold mb-6">Program Description</h2> */}
          <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                The B.Tech in Computer Science & Engineering (CSE) is a
                comprehensive 8-semester program that prepares you for an
                exciting career in the world of computing. If you have a passion
                for technology, this program will help you understand the core
                concepts of computer science and engineering. You'll learn how
                to design, develop, and test software and algorithms, as well as
                explore the latest advancements in the field.
              </p>
              <p className="text-lg text-muted-foreground">
                After completing the course, you'll be a skilled professional in
                computing systems and their operation. The knowledge you gain
                will help not only in computer science but also in other areas
                of engineering, like IT, electronics, and software engineering.
                Get ready to dive into the fast-changing world of technology
                with a B. Tech in CSE from GLA University
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 background-gradient-blue rounded-2xl shadow-xl p-6 border border-slate-100">
              <img
                src="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
                alt="Program Overview"
                className="w-full h-auto rounded-xl"
              />
              {/* <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Program Highlights
                </h3>
                <ul className="space-y-3 text-white">
                  {[
                    "Industry-Linked Curriculum: Learn the latest industry trends and technologies",
                    "Opportunities for Global Exposure: Study abroad options, industry visits, and boot camps",
                    "Expert Faculty: Lectures by professors from IITs, NITs, and top industry experts",
                    "Focus on Innovation: Develop skills in entrepreneurship and industry-focused work",
                    "Semester-Long Study @ IITs: Get hands-on experience through academic programs at IITs",
                    "Project-Based Learning: Work on track-specific projects to gain practical skills",
                    "Placement-Ready: AI-based mock interviews to help you prepare for placements",
                    "Codeathons and Assessments: Participate in VIVA assessments and codeathons for real-world experience",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cusBlueLight group-hover:bg-cusBlueLight/80 transition-colors duration-300">
                        <ArrowRight className="h-3.5 min-w-3.5 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-12 mt-16">
          {[
            {
              icon: <BookOpen className="h-6 min-w-6 text-cusGreen" />,
              title: "Industry-Linked Curriculum",
              description: "Latest Industry Trends",
            },
            {
              icon: <GraduationCap className="h-6 min-w-6 text-cusGreen" />,
              title: "Global Exposure",
              description: "Study Abroad Options",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Expert Faculty",
              description: "IITs & NITs Professors",
            },
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Innovation Focus",
              description: "Entrepreneurship Skills",
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-cusGreen" />,
              title: "IIT Experience",
              description: "Semester-Long Study",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-cusGreen" />,
              title: "Project-Based",
              description: "Practical Skills",
            },
            {
              icon: <Users className="h-6 w-6 text-cusGreen" />,
              title: "Placement-Ready",
              description: "AI Mock Interviews",
            },
            {
              icon: <Beaker className="h-6 w-6 text-cusGreen" />,
              title: "Codeathons",
              description: "Real-world Experience",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center hover:scale-105 transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer gap-3 group"
            >
              <div className="min-w-12 h-12 rounded-full bg-cusGreen/10 flex items-center justify-center group-hover:bg-cusGreen/20 transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="font-medium text-base text-cusBlue sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Outcome */}
      <section
        ref={outcomesRef}
        className={`py-24 background-gradient ${fadeInUp} ${
          outcomesVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cusYellow rounded-full blur-3xl"></div>
        </div> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-cusGreen text-white">
              What You'll Achieve
            </Badge>
            <Heading level={2} className="text-center text-cusBlue">
              Program Outcomes
            </Heading>
            <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
            <p className="text-black mt-5 text-lg max-w-4xl mx-auto">
              At GLA University, Greater Noida campus, we go beyond just
              teaching theory. Our hands-on approach and project-based learning
              ensure that you’re equipped with the skills the industry is
              looking for. By the time you graduate, you’ll be ready to make an
              impact in the tech world.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Advanced Technical Expertise",
                description:
                  "Master programming languages and development methods for success.",
                icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Research & Innovation Skills",
                description:
                  "Develop innovative solutions through advanced research approaches.",
                icon: <Beaker className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Industry-Ready Professional",
                description:
                  "Transform into skilled professional for tech companies.",
                icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Global Tech Leader",
                description:
                  "Lead international teams and drive innovation projects.",
                icon: <Users className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Strategic Problem Solver",
                description:
                  "Create efficient solutions for technical business challenges.",
                icon: <Beaker className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Tech Entrepreneur Ready",
                description:
                  "Launch and scale innovative tech ventures globally.",
                icon: <BookOpen className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Ethical Tech Champion",
                description:
                  "Drive innovation ensuring data privacy and security.",
                icon: <Users className="h-10 w-10 text-cusGreen" />,
              },
              {
                title: "Continuous Tech Innovator",
                description:
                  "Stay ahead with emerging tech and industry practices.",
                icon: <GraduationCap className="h-10 w-10 text-cusGreen" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gap-2"
              >
                <CardHeader className="flex flex-row gap-5">
                  <div className="mb-2 min-w-16 h-16 rounded-2xl bg-cusGreenLighter flex items-center justify-center group-hover:bg-cusGreenLighter/80 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <CardTitle className="text-cusBlueLight text-2xl font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="h-auto bg-cusGreen group-hover:text-white text-white hover:text-white hover:bg-cusGreen transition-colors duration-300">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section
        ref={eligibilityRef}
        className={`py-24 container mx-auto max-w-7xl px-4 ${fadeInUp} ${
          eligibilityVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-3xl"></div>
            <div className="relative background-gradient-blue shadow-xl rounded-2xl overflow-hidden border border-slate-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <div className="p-8">
                <Heading level={3} className="text-white mb-8">
                  Eligibility Requirements
                </Heading>
                <ul className="space-y-6 text-white">
                  {[
                    "10+2 examination with Physics and Mathematics as mandatory subjects",
                    "Chemistry or Computer Science as third subject",
                    "Minimum 50% marks in Physics, Mathematics and Chemistry/Computer Science combined",
                    "Minimum 50% marks overall in 10+2 examination",
                    "Strong analytical and problem-solving skills",
                    "Basic computer proficiency",
                    "Proficiency in English (written and verbal)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cusBlueLight group-hover:bg-cusBlueLight/80 transition-colors duration-300">
                        <ArrowRight className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    size="lg"
                    className="group gap-2 transition-all bg-cusYellow text-cusBlue hover:bg-cusYellow/80 duration-300 hover:pl-6 hover:pr-7"
                  >
                    Check Your Eligibility
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-cusGreen text-white">
                Who Can Apply
              </Badge>
              <Heading level={2} className="text-left text-cusBlue">
                Why Choose Computer Science Engineering?
              </Heading>
              <div className="h-1 w-20 bg-cusYellow rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground">
              Computer Science is one of the most popular and rapidly growing
              fields in engineering. Students often choose this path because of
              its vast potential and career opportunities. As new technologies
              emerge, the scope of CSE continues to expand.
            </p>

            <p className="text-lg text-muted-foreground">
              From the Internet of Things (IoT) to gesture-controlled home
              automation, innovations are changing how we live. With the arrival
              of 6G, faster processing will become a priority, leading to the
              development of more powerful processors. Artificial Intelligence
              (AI), Virtual Reality (VR), and Robotics are also set to
              revolutionize our daily lives, with developments like Butler bots
              helping us in everyday tasks. These advancements ensure that a
              career in Computer Science is not only exciting but future-proof,
              with endless growth opportunities.
            </p>

            {/* <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4">
                Not sure if you qualify?
              </h3>
              <p className="text-muted-foreground mb-4">
                Schedule a free consultation with our admissions team to discuss
                your academic background and career aspirations in computer
                science.
              </p>
              <Button variant="outline" className="gap-2">
                Book a Consultation <Calendar className="h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section
        ref={curriculumRef}
        className={`py-24 background-gradient relative ${fadeInUp} ${
          curriculumVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center mb-16">
            <Badge className="mb-4 bg-cusGreen text-white">
              What You'll Learn
            </Badge>
            <Heading level={2} className="text-center text-cusBlue">
              Curriculum
            </Heading>
            <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-min">
              <Heading level={3} className="text-2xl font-bold mb-2">
                B.Tech in Computer Science Engineering
              </Heading>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="text-sm">
                  <Calendar className="h-3 w-3 mr-1" />4 Years
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6">
                Step into the world of technology with a B.Tech in Computer
                Science Engineering from GLA University, Greater Noida campus.
                Develop a strong foundation in programming, software
                development, and system design, while gaining hands-on
                experience to tackle real-world challenges. Join us and pave the
                way for a successful career in the tech industry!
              </p>
              <div className="mt-auto pt-4 border-t">
                <Button className="w-full bg-cusGreen text-white hover:bg-cusGreen/80 gap-2">
                  Apply Now <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* <Tabs defaultValue="module1" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 w-full mb-12 p-1 h-full bg-yellow-200 rounded-full">
              <TabsTrigger
                value="module1"
                className="rounded-full py-[7px] px-5 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
              >
                Module 1
              </TabsTrigger>
              <TabsTrigger
                value="module2"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
              >
                Module 2
              </TabsTrigger>
              <TabsTrigger
                value="module3"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
              >
                Module 3
              </TabsTrigger>
              <TabsTrigger
                value="module4"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
              >
                Module 4
              </TabsTrigger>
            </TabsList>

            {["module1", "module2", "module3", "module4"].map(
              (module, moduleIndex) => {
                const moduleData = {
                  module1: {
                    title: "Foundations of Data Science",
                    duration: "3 months",
                    description:
                      "Build a solid foundation in programming, statistics, and data manipulation",
                    topics: [
                      {
                        title: "Introduction to Python Programming",
                        content:
                          "Python basics, data structures, functions, and object-oriented programming",
                      },
                      {
                        title: "Statistics for Data Science",
                        content:
                          "Descriptive statistics, probability distributions, hypothesis testing, and confidence intervals",
                      },
                      {
                        title: "Data Manipulation and Analysis",
                        content:
                          "Working with Pandas, NumPy, and data cleaning techniques",
                      },
                      {
                        title: "Data Visualization",
                        content:
                          "Creating effective visualizations with Matplotlib, Seaborn, and Plotly",
                      },
                    ],
                  },
                  module2: {
                    title: "Machine Learning Fundamentals",
                    duration: "3 months",
                    description:
                      "Master the core concepts and algorithms of machine learning",
                    topics: [
                      {
                        title: "Supervised Learning",
                        content:
                          "Regression, classification, decision trees, and ensemble methods",
                      },
                      {
                        title: "Unsupervised Learning",
                        content:
                          "Clustering, dimensionality reduction, and anomaly detection",
                      },
                      {
                        title: "Model Evaluation and Validation",
                        content:
                          "Cross-validation, metrics, and hyperparameter tuning",
                      },
                      {
                        title: "Feature Engineering",
                        content:
                          "Feature selection, extraction, and transformation techniques",
                      },
                    ],
                  },
                  module3: {
                    title: "Advanced Machine Learning",
                    duration: "3 months",
                    description:
                      "Explore cutting-edge techniques in deep learning and specialized domains",
                    topics: [
                      {
                        title: "Deep Learning",
                        content:
                          "Neural networks, CNNs, RNNs, and transfer learning",
                      },
                      {
                        title: "Natural Language Processing",
                        content:
                          "Text preprocessing, sentiment analysis, and language models",
                      },
                      {
                        title: "Computer Vision",
                        content:
                          "Image processing, object detection, and image classification",
                      },
                      {
                        title: "Time Series Analysis",
                        content:
                          "Forecasting, ARIMA models, and sequence modeling",
                      },
                    ],
                  },
                  module4: {
                    title: "Applied Data Science",
                    duration: "3 months",
                    description:
                      "Apply your skills to real-world problems and prepare for industry",
                    topics: [
                      {
                        title: "Big Data Technologies",
                        content: "Hadoop, Spark, and distributed computing",
                      },
                      {
                        title: "MLOps and Deployment",
                        content:
                          "Model deployment, monitoring, and maintenance",
                      },
                      {
                        title: "Data Ethics and Privacy",
                        content:
                          "Ethical considerations, bias, and responsible AI",
                      },
                      {
                        title: "Capstone Project",
                        content:
                          "End-to-end data science project with real-world applications",
                      },
                    ],
                  },
                };

                const data = moduleData[module];

                return (
                  <TabsContent
                    key={moduleIndex}
                    value={module}
                    className="transition-all duration-500 ease-in-out"
                  >
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-min">
                        <h3 className="text-2xl font-bold mb-2">
                          {data.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            {data.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          {data.description}
                        </p>
                        <div className="mt-auto pt-4 border-t">
                          <Button className="w-full bg-cusGreen text-white hover:bg-cusGreen/80 gap-2">
                            Download Syllabus <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <Accordion type="single" collapsible className="w-full">
                          {data.topics.map((topic, index) => (
                            <AccordionItem
                              key={index}
                              value={`item-${index}`}
                              className="bg-white mb-4 rounded-xl border border-slate-100 overflow-hidden group data-[state=open]:shadow-md transition-all duration-300"
                            >
                              <AccordionTrigger className="px-6 py-4 hover:no-underline group-data-[state=open]:bg-slate-50 transition-colors duration-300">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-cusGreenLighter flex items-center justify-center flex-shrink-0">
                                    <span className="font-bold text-lg text-cusGreen">
                                      {index + 1}
                                    </span>
                                  </div>
                                  <span className="text-lg font-medium">
                                    {topic.title}
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-4 pt-2">
                                <div className="pl-14">
                                  <p className="text-muted-foreground mb-4">
                                    {topic.content}
                                  </p>
                                  <div className="grid grid-cols-2 gap-3 mt-4">
                                    {[
                                      "Lectures",
                                      "Assignments",
                                      "Projects",
                                      "Quizzes",
                                    ].map((item, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-2"
                                      >
                                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                                          <ChevronRight className="h-2.5 w-2.5 text-primary" />
                                        </div>
                                        <span className="text-sm">{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </TabsContent>
                );
              }
            )}
          </Tabs> */}
        </div>
      </section>

      {/* Fees */}
      <section
        ref={feesRef}
        className={`py-24 container mx-auto px-4 ${fadeInUp} ${
          feesVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <div className="max-w-md mx-auto text-center mb-20">
          <Badge className="mb-4 bg-cusGreen text-white">Investment</Badge>
          <Heading level={2} className="text-center text-cusBlue">
            Program Fees
          </Heading>
          <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "1st Year Fees",
              price: "₹2,00,000/-",
              highlight: true,
              buttonText: "Enroll Now",
            },
            {
              title: "2nd Year Fees",
              price: "₹2,08,000/-",
              highlight: false,
              buttonText: "Enroll Now",
            },
            {
              title: "3rd Year Fees",
              price: "₹2,16,000/-",
              highlight: false,
              buttonText: "Enroll Now",
            },
            {
              title: "4th Year Fees",
              price: "₹2,24,000/-",
              highlight: false,
              buttonText: "Enroll Now",
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:-translate-y-2 transition-all duration-300 ${
                plan.highlight
                  ? "border-primary shadow-lg z-10 pt-0"
                  : "hover:border-primary/50 hover:shadow-md"
              }`}
            >
              {/* {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-cusGreen hover:bg-cusGreen animate-pulse">
                    Most Popular
                  </Badge>
                </div>
              )} */}
              <CardHeader
                className={`${
                  plan.highlight ? "bg-cusBlue p-5 text-slate-100" : ""
                } rounded-t-lg transition-colors duration-300`}
              >
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {/* <span className="text-muted-foreground ml-1">
                    {index + 1} Year
                  </span> */}
                </div>
              </CardHeader>
              {/* <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center group">
                      <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-cusGreenLighter group-hover:bg-cusGreenLighter/80 transition-colors duration-300">
                        <ArrowRight className="h-3 w-3 text-cusGreen" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent> */}
              <CardFooter>
                <Button
                  className={`w-full group ${
                    plan.highlight
                      ? "bg-cusYellow hover:bg-cusYellow/80 text-cusBlue"
                      : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-primary/50"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 text-center max-w-2xl mx-auto bg-slate-50 p-8 rounded-xl border border-slate-100">
          <h3 className="text-xl font-bold mb-4">Flexible Payment Options</h3>
          <p className="text-muted-foreground mb-6">
            We offer installment plans and scholarship opportunities for
            eligible candidates. Contact our admissions team to learn more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="gap-2">
              Payment Plans <CreditCard className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-2">
              Scholarship Information <GraduationCap className="h-4 w-4" />
            </Button>
          </div>
        </div> */}
      </section>

      {/* Labs */}
      <section
        ref={labsRef}
        className={`py-20 background-gradient relative ${fadeInUp} ${
          labsVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto text-center mb-16">
            <Badge className="mb-4 bg-cusGreen text-white">Facilities</Badge>
            <Heading level={2} className="text-center text-cusBlue">
              State-of-the-Art Labs
            </Heading>
            <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((lab, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={lab.image || "/placeholder.svg"}
                    alt={lab.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-cusBlue mb-2">
                    {lab.title}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {lab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="gap-2 bg-cusGreen text-white hover:bg-cusGreen/80 group"
            >
              Schedule a Lab Tour
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brochure */}
      <section
        ref={brochureRef}
        className={`py-24 container mx-auto px-4 ${fadeInUp} ${
          brochureVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center background-gradient-blue p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <div>
              <Badge className="mb-4 bg-cusGreen text-white">
                Program Details
              </Badge>
              <Heading
                level={3}
                className="text-center sm:text-left text-white"
              >
                Download Program Brochure
              </Heading>
              <p className="text-white/80 mb-8">
                Get detailed information about our program, curriculum, faculty,
                and more in our comprehensive brochure.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cusBlueLighter flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      Complete Curriculum
                    </h4>
                    <p className="text-sm text-white/80">
                      Detailed overview of all modules and courses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cusBlueLighter flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Faculty Profiles</h4>
                    <p className="text-sm text-white/80">
                      Learn about our expert instructors and mentors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cusBlueLighter flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Success Stories</h4>
                    <p className="text-sm text-white/80">
                      Read about our alumni and their achievements
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="gap-2 group bg-cusYellow text-cusBlue hover:bg-cusYellow/80 transition-all duration-300 hover:pl-6 hover:pr-10"
                >
                  Download Now
                  <Download className="h-4 w-4 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>

              <div className="relative bg-white p-4 rounded-xl shadow-lg border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://gla-noida.vercel.app/assets/sports-UcTaf5m6.webp"
                  alt="Program Brochure"
                  className="w-full h-auto aspect-square object-cover rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-cusYellow text-cusBlue p-3 rounded-full shadow-lg">
                  <Download className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events and Activities */}
      <section
        ref={eventsRef}
        className={`py-24 background-gradient relative ${fadeInUp} ${
          eventsVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto text-center mb-16">
            <Badge className="mb-4 bg-cusGreen text-white">
              Stay Connected
            </Badge>
            <Heading level={2} className="text-center text-cusBlue">
              Recent Events & Activities
            </Heading>
            <div className="h-1 w-20 bg-cusYellow mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary hover:bg-primary">
                      <Calendar className="h-3 w-3 mr-1" />
                      {event.date}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-cusGreen text-white hover:bg-cusGreen/80 group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="gap-2 bg-transparent hover:bg-transparent text-cusBlueLight border-cusGreen border-2 group"
            >
              View All Events
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-24 background-gradient-white relative overflow-hidden ${fadeInUp} ${
          ctaVisible ? fadeInUpVisible : fadeInUpHidden
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cusGreen/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cusGreen/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mx-auto">
            <Badge className="mb-6 bg-cusGreen text-white hover:bg-cusGreen/80">
              Limited Seats Available
            </Badge>
            <Heading level={2} className="text-center mb-6 text-cusBlue">
              Ready to Transform Your Career?
            </Heading>
            <p className="text-xl opacity-90 mb-12 text-black max-w-2xl mx-auto">
              Join our Advanced Data Science Program and unlock new
              opportunities in the world of data.
            </p>
            <div className="flex flex-wrap max-w-3xl mx-auto justify-center gap-6">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 group bg-cusYellow text-cusBlue hover:bg-cusYellow/80 transition-all duration-300 hover:pl-6 hover:pr-10"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-cusBlue border-cusYellow hover:bg-cusYellow/10 gap-2 group"
              >
                Request Information
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="mt-16 pt-16 border-t border-cusBlue max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cusGreenLighter flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-cusGreen" />
                </div>
                <h3 className="text-xl font-bold mb-2">Next Batch</h3>
                <p className="opacity-80">Starting June 15, 2025</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cusGreenLighter flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-cusGreen" />
                </div>
                <h3 className="text-xl font-bold mb-2">Class Size</h3>
                <p className="opacity-80">Limited to 30 students</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-cusGreenLighter flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-cusGreen" />
                </div>
                <h3 className="text-xl font-bold mb-2">Application Deadline</h3>
                <p className="opacity-80">May 15, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BtechCS;
