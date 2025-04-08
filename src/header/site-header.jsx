"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "@/assets/logo/gla_logo.png";
import logo from "@/assets/logo/GLA Logo.png";

/**
 * TransparentSiteHeader Component
 *
 * Main navigation header for the GLA University website.
 * Features transparent background initially, becomes white on scroll.
 * Includes responsive design with mobile menu and dropdown navigation.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "background-gradient-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-cusBlue text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-cusYellow transition-colors">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-cusYellow transition-colors">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-cusYellow transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="hover:text-cusYellow transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm hover:text-cusYellow transition-colors"
            >
              STUDENTS
            </a>
            <a
              href="#"
              className="text-sm hover:text-cusYellow transition-colors"
            >
              STAFFS
            </a>
            <a
              href="#"
              className="text-sm hover:text-cusYellow transition-colors"
            >
              ALUMNI
            </a>
            <a
              href="#"
              className="text-sm hover:text-cusYellow transition-colors"
            >
              VISIT
            </a>
            <a
              href="#"
              className="text-sm hover:text-cusYellow transition-colors"
            >
              MEDIA
            </a>
            <button className="text-sm hover:text-cusYellow transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 my-0 md:my-4">
        {/* Grid Container */}
        <div className="grid grid-cols-[auto_1fr] gap-4">
          {/* Logo - spans both rows */}
          <div className="row-span-2 flex items-center md:background-gradient-white p-2 rounded-lg">
            <a href="/" className="flex items-center">
              <img
                src={logo || "/placeholder.svg"}
                alt="GLA logo"
                className="md:h-24 h-20 mt-4 md:mt-0 w-auto"
              />
            </a>
          </div>

          {/* Right side content */}
          <div className="flex flex-col">
            {/* Top Action Buttons */}
            <div className="hidden md:flex justify-end py-2">
              {" "}
              {/* Reduced padding */}
              <div className="flex items-center gap-2">
                <a
                  href="/more-info"
                  className={`rounded-md px-4 py-1.5 text-sm font-medium border-2 transition-colors ${
                    scrolled
                      ? "border-cusBlue text-cusBlue hover:bg-cusBlue hover:text-white"
                      : "border-white text-white hover:background-gradient-white hover:text-cusBlue"
                  }`}
                >
                  More info
                </a>
                <a
                  href="/apply"
                  className="rounded-md px-8 py-1.5 text-sm font-medium bg-cusGreen text-white hover:opacity-90 transition-colors"
                >
                  Apply
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-end">
              <nav className="flex items-center space-x-1">
                <a
                  href="/"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-cusYellow ${
                    scrolled ? "text-cusBlue" : "text-white"
                  }`}
                >
                  Home
                </a>
                <div className="relative group">
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-cusYellow ${
                      scrolled ? "text-cusBlue" : "text-white"
                    }`}
                  >
                    About
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {/* Dropdown content */}
                  <div className="absolute left-0 top-full w-48 mt-2 background-gradient-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="p-2">
                      <a
                        href="/about"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        About GLA
                      </a>
                      <a
                        href="/about/awards"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        Awards & Accreditation
                      </a>
                      <a
                        href="/about/advisory-board"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        Advisory Board
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-cusYellow ${
                      scrolled ? "text-cusBlue" : "text-white"
                    }`}
                  >
                    Programs
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {/* Dropdown content */}
                  <div className="absolute left-0 top-full w-48 mt-2 background-gradient-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="p-2">
                      <a
                        href="/programs/btech"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        B.Tech
                      </a>
                      <a
                        href="/programs/bba"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        BBA
                      </a>
                      <a
                        href="/programs/bca"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        BCA
                      </a>
                      <a
                        href="/programs/mba"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        MBA
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-cusYellow ${
                      scrolled ? "text-cusBlue" : "text-white"
                    }`}
                  >
                    Admissions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {/* Dropdown content */}
                  <div className="absolute left-0 top-full w-48 mt-2 background-gradient-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="p-2">
                      <a
                        href="/admissions/scholarships"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        Scholarships
                      </a>
                      <a
                        href="/admissions/eligibility"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        Eligibility Criteria
                      </a>
                      <a
                        href="/admissions/procedure"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        Admissions Procedure
                      </a>
                      <a
                        href="/admissions/fee-structure"
                        className="block px-4 py-2 text-sm text-cusBlue hover:bg-cusYellow rounded-md"
                      >
                        Fee Structure
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="/research"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-cusYellow ${
                    scrolled ? "text-cusBlue" : "text-white"
                  }`}
                >
                  Student Life
                </a>
                <a
                  href="/contact"
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-cusYellow ${
                    scrolled ? "text-cusBlue" : "text-white"
                  }`}
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden absolute md:relative justify-self-end self-center">
            <MobileNav scrolled={scrolled} />
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * MobileNav Component
 *
 * Mobile navigation menu that appears on smaller screens.
 * Includes a toggle button and dropdown menu with all navigation options.
 */
function MobileNav({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      <button
        className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          scrolled ? "border-cusBlue text-cusBlue" : "border-white text-white"
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span className="sr-only">Toggle menu</span>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Menu Dropdown - removed mt-2 */}
      {open && (
        <div className="absolute right-0 top-[calc(100%+1px)] w-60 origin-top-right rounded-md border background-gradient-white shadow-lg">
          <div className="p-2">
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-sm font-medium text-cusBlue hover:bg-cusYellow"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <MobileNavItem
              title="About"
              items={[
                { title: "About GLA", href: "/about" },
                { title: "Awards & Accreditation", href: "/about/awards" },
                { title: "Advisory Board", href: "/about/advisory-board" },
              ]}
              setOpen={setOpen}
            />
            <MobileNavItem
              title="Programs"
              items={[
                { title: "B.Tech", href: "/programs/btech" },
                { title: "BBA", href: "/programs/bba" },
                { title: "BCA", href: "/programs/bca" },
                { title: "MBA", href: "/programs/mba" },
              ]}
              setOpen={setOpen}
            />
            <MobileNavItem
              title="Admissions"
              items={[
                { title: "Scholarships", href: "/admissions/scholarships" },
                {
                  title: "Eligibility Criteria",
                  href: "/admissions/eligibility",
                },
                {
                  title: "Admissions Procedure",
                  href: "/admissions/procedure",
                },
                { title: "Fee Structure", href: "/admissions/fee-structure" },
              ]}
              setOpen={setOpen}
            />
            <a
              href="/student-life"
              className="block rounded-md px-3 py-2 text-sm font-medium text-cusBlue hover:bg-cusYellow"
              onClick={() => setOpen(false)}
            >
              Student Life
            </a>
            <a
              href="/contact"
              className="block rounded-md px-3 py-2 text-sm font-medium text-cusBlue hover:bg-cusYellow"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * MobileNavItem Component
 *
 * Expandable navigation item for the mobile menu.
 * Displays a dropdown of sub-items when expanded.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the navigation item
 * @param {Array} props.items - Array of sub-items with title and href
 * @param {Function} props.setOpen - Function to control parent menu visibility
 */
function MobileNavItem({ title, items, setOpen }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-cusYellow"
        style={{ color: "var(--color-cusBlue)" }}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
      {expanded && (
        <div className="ml-4 mt-1 space-y-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-cusYellow"
              style={{ color: "var(--color-cusBlue)" }}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
