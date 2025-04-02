"use client";

// src/components/site-header.jsx
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo/gla_logo.png";

/**
 * SiteHeader Component
 *
 * Main navigation header for the GLA University website.
 * Features responsive design with mobile menu and dropdown navigation.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm h-32">
      <div className="container mx-auto px-4 flex h-full items-center justify-between">
        {/* logo and University Name */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="GLA logo" className="h-24 w-auto" />
            <div className="flex flex-col"></div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-1">
            {/* Home Link */}
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[var(--color-cusYellow)]"
              style={{ color: "var(--color-cusBlue)" }}
            >
              Home
            </a>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none hover:bg-[var(--color-cusYellow)]"
                style={{ color: "var(--color-cusBlue)" }}
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full w-[200px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-md shadow-lg border p-2">
                  <a
                    href="/about"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    About GLA
                  </a>
                  <a
                    href="/about/awards"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    Awards & Accreditation
                  </a>
                  <a
                    href="/about/advisory-board"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    Advisory Board
                  </a>
                </div>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none hover:bg-[var(--color-cusYellow)]"
                style={{ color: "var(--color-cusBlue)" }}
              >
                Programs
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full w-[200px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-md shadow-lg border p-2">
                  <a
                    href="/programs/btech"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    B.Tech
                  </a>
                  <a
                    href="/programs/bba"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    BBA
                  </a>
                  <a
                    href="/programs/bca"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    BCA
                  </a>
                  <a
                    href="/programs/mba"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    MBA
                  </a>
                </div>
              </div>
            </div>

            {/* Admissions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none hover:bg-[var(--color-cusYellow)]"
                style={{ color: "var(--color-cusBlue)" }}
              >
                Admissions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full w-[250px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-md shadow-lg border p-2">
                  <a
                    href="/admissions/scholarships"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    Scholarships
                  </a>
                  <a
                    href="/admissions/eligibility"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    Eligibility Criteria
                  </a>
                  <a
                    href="/admissions/procedure"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    Admissions Procedure
                  </a>
                  <a
                    href="/admissions/fee-structure"
                    className="block px-3 py-2 text-sm rounded-md hover:bg-[var(--color-cusYellow)]"
                    style={{ color: "var(--color-cusBlue)" }}
                  >
                    Fee Structure
                  </a>
                </div>
              </div>
            </div>

            {/* Student Life Link */}
            <a
              href="/student-life"
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[var(--color-cusYellow)]"
              style={{ color: "var(--color-cusBlue)" }}
            >
              Student Life
            </a>

            <a
              href="/contact-us"
              className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[var(--color-cusYellow)]"
              style={{ color: "var(--color-cusBlue)" }}
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden">
          <MobileNav />
        </div>

        {/* Apply Now Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/apply"
            className="rounded-md px-5 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "var(--color-cusGreen)" }}
          >
            Apply Now
          </a>
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
function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{ color: "var(--color-cusBlue)" }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span className="sr-only">Toggle menu</span>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-60 origin-top-right rounded-md border bg-white shadow-lg">
          <div className="p-2">
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--color-cusYellow)]"
              style={{ color: "var(--color-cusBlue)" }}
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
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--color-cusYellow)]"
              style={{ color: "var(--color-cusBlue)" }}
              onClick={() => setOpen(false)}
            >
              Student Life
            </a>
            <div className="mt-2 pt-2 border-t">
              <a
                href="/apply"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white text-center hover:opacity-90"
                style={{ backgroundColor: "var(--color-cusGreen)" }}
                onClick={() => setOpen(false)}
              >
                Apply Now
              </a>
            </div>
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
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--color-cusYellow)]"
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
              className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--color-cusYellow)]"
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
