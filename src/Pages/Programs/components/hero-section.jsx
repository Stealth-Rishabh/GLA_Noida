import { useState } from "react";
import { ArrowUpRight, Check, Lock, Mail, Phone, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { BoxReveal } from "@/components/magicui/box-reveal";
export function HeroSection({
  backgroundImage,
  title,
  subtitle,
  features,
  stats,
  para,
}) {
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
  const [activeField, setActiveField] = useState(null);

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

  return (
    <section className="relative min-h-[700px] overflow-hidden flex items-center">
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
          backgroundImage: `url(${backgroundImage})`,
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

      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6 max-w-xl">
              <BoxReveal boxColor={"#fdd600"} duration={0.5}>
                <Heading
                  level={1}
                  className="text-4xl md:!text-5xl font-bold text-white leading-tight"
                >
                  {title}{" "}
                  <span className="text-cusSecondary relative">
                    {subtitle}
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-cusBlue/30 rounded-full"></span>
                  </span>
                  {/* <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-cusSecondary/70 to-cusSecondary-light/70 rounded-full"></span> */}
                </Heading>
              </BoxReveal>
              <BoxReveal boxColor={"#fdd600"} duration={0.5}>
                <p className="text-xl text-white leading-relaxed">{para}</p>
              </BoxReveal>
            </div>

            <div className="grid grid-cols-2 sm:flex items-center gap-6 text-white text-sm">
              {features.map((feature, index) => (
                <BoxReveal boxColor={"#fdd600"} duration={0.5}>
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cusSecondary"></div>
                    <span>{feature}</span>
                  </div>
                </BoxReveal>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <BoxReveal boxColor={"#fdd600"} width={"100%"} duration={0.5}>
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-cusSecondary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </div>
                </BoxReveal>
              ))}
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
                      className="w-full relative overflow-hidden group bg-cusAccent hover:bg-cusAccent/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/20"
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
                  {/* <Calendar className="h-3.5 w-3.5" /> */}
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
    </section>
  );
}
