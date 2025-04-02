// src/components/site-footer.jsx
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/**
 * SiteFooter Component
 *
 * Footer for the GLA University website.
 * Contains university information, quick links, programs, contact details,
 * social media links, and copyright information.
 */
export function SiteFooter() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-cusBlue)" }}
      className="text-white"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* University Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="GLA University Logo"
                className="h-12 w-auto bg-white p-1 rounded"
              />
              <div className="flex flex-col">
                <span
                  className="font-bold text-xl"
                  style={{ color: "var(--color-cusYellow)" }}
                >
                  GLA University
                </span>
                <span className="text-xs">Excellence in Education</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-xs">
              GLA University is committed to providing quality education and
              fostering innovation through academic excellence. Our mission is
              to empower students with knowledge and skills for a successful
              future.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-cusYellow)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  About GLA
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  Academic Programs
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="/student-life"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  Student Life
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-cusYellow)" }}
            >
              Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/programs/btech"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  B.Tech
                </a>
              </li>
              <li>
                <a
                  href="/programs/bba"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  BBA
                </a>
              </li>
              <li>
                <a
                  href="/programs/bca"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  BCA
                </a>
              </li>
              <li>
                <a
                  href="/programs/mba"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  MBA
                </a>
              </li>
              <li>
                <a
                  href="/programs/mtech"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  M.Tech
                </a>
              </li>
              <li>
                <a
                  href="/programs/phd"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  Ph.D
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-cusYellow)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin
                  className="h-5 w-5 mr-2 flex-shrink-0"
                  style={{ color: "var(--color-cusYellow)" }}
                />
                <span className="text-gray-300">
                  17km Stone, NH-2, Mathura-Delhi Highway, Mathura, Uttar
                  Pradesh 281406
                </span>
              </li>
              <li className="flex">
                <Phone
                  className="h-5 w-5 mr-2 flex-shrink-0"
                  style={{ color: "var(--color-cusYellow)" }}
                />
                <a
                  href="tel:+911234567890"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex">
                <Mail
                  className="h-5 w-5 mr-2 flex-shrink-0"
                  style={{ color: "var(--color-cusYellow)" }}
                />
                <a
                  href="mailto:info@gla.ac.in"
                  className="text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
                >
                  info@gla.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div
        className="border-t py-6"
        style={{
          borderColor: "var(--color-cusGreen)",
          backgroundColor: "var(--color-cusBlue)",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} GLA University. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-sm text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="text-sm text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="/sitemap"
              className="text-sm text-gray-300 hover:text-[var(--color-cusYellow)] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
