"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
} from "lucide-react";
import logo from "@/assets/logo/gla-logo.png";

/**
 * SiteFooter Component
 *
 * Footer for the GLA University website based on the provided design.
 * Includes logo, social media links, useful links sections, and newsletter subscription.
 */
const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      label: "Useful Links",
      items: [
        { name: "About Us", path: "/about/vision-mission" },
        { name: "Rankings & Awards", path: "/about/accreditations-rankings" },
        { name: "Accreditations", path: "/accreditations" },
        { name: "Events", path: "/students-life/life-at-gla" },
        { name: "Media", path: "/students-life/news-announcements" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        {
          name: "AICTE Feedback",
          path: "https://www.aicte-india.org/feedback/",
        },
      ],
    },
    {
      label: "Programs Offered",
      items: [
        { name: "B.Tech", path: "/programs/btech" },
        { name: "BBA", path: "/programs/bba" },
        { name: "BCA", path: "/programs/bca" },
        { name: "MBA", path: "/programs/mba" },
        { name: "M.Tech", path: "/programs/mtech" },
        { name: "Ph.D", path: "/programs/phd" },
      ],
    },
    {
      label: "Committees",
      items: [
        { name: "Grievance Redressal Mechanism", path: "/grievance" },
        { name: "Internal Complaints Committee", path: "/complaints" },
        { name: "Anti-Ragging Committee", path: "/anti-ragging" },
        { name: "Research Committee", path: "/research-committee" },
      ],
    },
    {
      label: "Quick Links",
      items: [
        { name: "Academic Calendar", path: "/academic-calendar" },
        { name: "Examinations", path: "/examinations" },
        { name: "Student Login", path: "/student-login" },
        { name: "Staff Login", path: "/staff-login" },
        { name: "NIRF", path: "/nirf" },
        { name: "IQAC", path: "/iqac" },
      ],
    },
  ];

  return (
    <footer
      className="relative pt-16 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200"
      //   style={{
      //     background: "linear-gradient(to right, #e9f2fa, #f5f9fd, #e9f2fa)",
      //   }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* logo and Social Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <a
                href="/"
                className="flex items-center gap-3 group"
                onClick={scrollToTop}
              >
                <img
                  src={logo}
                  alt="GLA University logo"
                  className="h-24 cursor-pointer w-auto transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col"></div>
              </a>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    label: "Facebook",
                    href: "https://www.facebook.com/glauniversity/",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/gla_university/",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    href: "https://twitter.com/gla_university",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/school/gla-university/",
                  },
                  {
                    icon: Youtube,
                    label: "YouTube",
                    href: "https://www.youtube.com/channel/UCIIKKSQjCqFiXxCe9HQhxbw",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                        style={{ backgroundColor: "var(--color-cusBlue)" }}
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </button>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="space-y-3">
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "var(--color-cusBlue)" }}
              >
                24/7 Student Helpline Number
              </p>
              <a href="tel:+919027068068">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "var(--color-cusGreen)" }}
                >
                  <Phone className="h-4 w-4" />
                  9027068068
                </button>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.label} className="space-y-6">
                <h3
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: "var(--color-cusBlue)" }}
                >
                  {section.label}
                </h3>
                <ul className="space-y-3 text-base">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      {item.path.startsWith("https:") ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 transition-colors duration-200"
                          style={{ color: "var(--color-cusBlue)" }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusYellow)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusBlue)")
                          }
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a
                          href={item.path}
                          onClick={scrollToTop}
                          className="group inline-flex items-center gap-1 transition-colors duration-200"
                          style={{ color: "var(--color-cusBlue)" }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusYellow)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-cusBlue)")
                          }
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div
          className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl border shadow-sm"
          style={{ borderColor: "var(--color-cusBlue)", opacity: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--color-cusBlue)" }}
              >
                Stay Updated with GLA University
              </h3>
              <p style={{ color: "var(--color-cusBlue)", opacity: 0.8 }}>
                Stay updated with our latest news, events, and academic
                announcements
              </p>
            </div>
            <div className="lg:col-span-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
                  style={{ borderColor: "var(--color-cusBlue)" }}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-white font-medium hover:opacity-90"
                  style={{ backgroundColor: "var(--color-cusGreen)" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}

        <div
          className="h-px w-full my-12"
          style={{ backgroundColor: "var(--color-cusBlue)" }}
        ></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-base">
          <p style={{ color: "var(--color-cusBlue)" }}>
            Copyright © GLA University {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="transition-colors"
              style={{ color: "var(--color-cusBlue)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-cusYellow)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-cusBlue)")
              }
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="transition-colors"
              style={{ color: "var(--color-cusBlue)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-cusYellow)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-cusBlue)")
              }
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
