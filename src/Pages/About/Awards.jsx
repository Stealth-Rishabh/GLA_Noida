import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Banner from "@/components/main/Banner";
import { cn } from "@/lib/utils";
import Seo from '@/components/SEO/Seo';

import ranked2 from "@/assets/about/awards/1ardach_time-b.png";
import danikJ from "@/assets/about/awards/2ardach_danik-j.png";
import careers360 from "@/assets/about/awards/3ardach_careers360.png";
import timeOfIndia from "@/assets/about/awards/4ardach_time-of-india.png";
import dlogIndia from "@/assets/about/awards/7ardach_dilog-india.png";
import timeB from "@/assets/about/awards/8ardach_time-b.png";
import aspiringMinds from "@/assets/about/awards/9ardach_aspiringminds.png";
import indiaToday from "@/assets/about/awards/10ardach_indiatoday.png";
import dj from "@/assets/about/awards/21ardach_dj.png";
import hindustan from "@/assets/about/awards/24ardach_hindustan.png";
import ugc from "@/assets/about/awards/25ardach_ugc.jpg";
import ariaLogo from "@/assets/about/awards/26ardach_AriiaLogo.png";
import naac from "@/assets/about/awards/30ardach_naac.png";
import nptel from "@/assets/about/awards/31ardach_nptel.png";
import iacbe from "@/assets/about/awards/32ardach_iacbe.png";
import nirf from "@/assets/about/awards/33ardach_nirf.png";
import timesHigherEducation from "@/assets/about/awards/35ardach_Times_Higher_Education_.png";

import govtRecog1 from "@/assets/about/awards/governmentAwards/5ardach_5ardach_govt-recog1.png";
import govtRecog2 from "@/assets/about/awards/governmentAwards/6ardach_govt-recog2.png";
import govtRecog3 from "@/assets/about/awards/governmentAwards/11ardach_govt-recog3.png";
import govtRecog4 from "@/assets/about/awards/governmentAwards/12ardach_govt-recog4.png";
import govtRecog5 from "@/assets/about/awards/governmentAwards/13ardach_govt-recog5.png";
import govtRecog6 from "@/assets/about/awards/governmentAwards/14ardach_govt-recog6.png";
import pci from "@/assets/about/awards/governmentAwards/16ardach_pci.png";
import naacGovt from "@/assets/about/awards/governmentAwards/17ardach_naac.png";
import iacbeGovt from "@/assets/about/awards/governmentAwards/18ardach_IACBE.png";
import iso from "@/assets/about/awards/governmentAwards/27ardach_iso.jpg";
import nirfGovt from "@/assets/about/awards/governmentAwards/29ardach_NIRF.png";
import ariiaLogo from "@/assets/about/awards/governmentAwards/34ardach_AriiaLogo.png";
import ugcOffCampus from "@/assets/about/awards/governmentAwards/36ardach_6ardach_govt-recog2.png";
import icar from "@/assets/about/awards/governmentAwards/37ardach_aicr.png";
import awardBanner from "@/assets/about/awards/awards-banner.webp";
import GridBackground from "@/components/ui/GridBackground";

export default function Awards() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const awards = [
    {
      id: 1,
      name: "Ranked #2 in UP & #6 in INDIA",
      description: "amongst all Private B-Schools Ranking 2018",
      image: ranked2,
    },
    {
      id: 2,
      name: "Best Private University",
      description: "in UP in Engineering by Survey 2018",
      image: danikJ,
    },
    {
      id: 3,
      name: "Rated 'AAA'",
      description: "amongst India's Best Engineering Colleges 2020",
      image: careers360,
    },
    {
      id: 4,
      name: "Ranked #1 in INDIA",
      description:
        "amongst the Top Emerging Engineering Institutes in survey 2018 by Times of India",
      image: timeOfIndia,
    },
    {
      id: 5,
      name: "Ranked #1 University in UP",
      description:
        "Best Private University in UP and also in North, East & North Eastern India",
      image: dlogIndia,
    },
    {
      id: 6,
      name: "Ranked #3 in UP",
      description: "amongst Top 75 B Schools - BBA Edition survey 2018",
      image: timeB,
    },
    {
      id: 7,
      name: "National Employability Award",
      description: "among the Top 10% engineering campuses nationally 2019",
      image: aspiringMinds,
    },
    {
      id: 8,
      name: "Ranked #3 in UP",
      description: "Institute of Business Management - BBA",
      image: indiaToday,
    },
    {
      id: 9,
      name: "Best Private University",
      description: "in UP Survey 2019 & 2020 by Dainik Jagran",
      image: dj,
    },
    {
      id: 10,
      name: "Awarded Excellence in Placements & Alumni Network",
      description: "amongst best private universities in India",
      image: hindustan,
    },
    {
      id: 11,
      name: "University Grant Commission (UGC)",
      description:
        "12B Status by UGC Among the top private universities in India to receive this honour.",
      image: ugc,
    },
    {
      id: 12,
      name: "ARIIA Band Excellent Award",
      description:
        "for blending innovation in learning and beyond classroom experiential activities",
      image: ariaLogo,
    },
    {
      id: 13,
      name: "NAAC 'A+' Grade",
      description:
        "for high standard Infrastructure, Learning Resources, Research, Innovation, etc.",
      image: naac,
    },
    {
      id: 14,
      name: "NPTEL ACTIVE Local Chapter",
      description:
        "Ranked among the top 100 institutions with Local Chapter tag by NPTEL",
      image: nptel,
    },
    {
      id: 15,
      name: "IACBE Accreditation",
      description:
        "Specialized accreditation through the International Accreditation Council for Business Education",
      image: iacbe,
    },
    {
      id: 16,
      name: "NIRF RANKED Institute of Pharmaceutical Research",
      description:
        "is ranked as the 54th best institute for pharmacy education in India by NIRF.",
      image: nirf,
    },
    {
      id: 17,
      name: "Times Higher Education Rankings 2024",
      description:
        "All India Rank 44, Worldwide Rank Band 1001-1200, Research Quality (World) Rank 691",
      image: timesHigherEducation,
    },
  ];

  const govermentAwards = [
    {
      id: 1,
      name: "Government of Uttar Pradesh",
      image: govtRecog1,
      links: [
        {
          text: "Letter of Authorization",
          url: "https://www.gla.ac.in/pdf/Letter%20of%20Authorization.pdf",
        },
        {
          text: "Umbrella Act English / Hindi",
          url: "https://www.gla.ac.in/pdf/232-rotated.pdf",
        },
      ],
    },
    {
      id: 2,
      name: "University Grant Commission (UGC)",
      image: govtRecog2,
      links: [
        { text: "UGC Letter", url: "https://www.gla.ac.in/pdf/UGC-Letter.pdf" },
        { text: "Link of Universities on UGC Website", url: "#" },
        {
          text: "12- B Status by UGC",
          url: "https://www.gla.ac.in/Uploads/image/382imguf_12-BSTATUSBYUGC.pdf",
        },
        {
          text: "2(f) Status by UGC",
          url: "https://www.gla.ac.in/Uploads/image/741imguf_2f.pdf",
        },
      ],
    },
    {
      id: 3,
      name: "All India Council for Technical Education (AICTE)",
      image: govtRecog3,
      links: [
        {
          text: "AICTE Letter",
          url: "https://www.gla.ac.in/pdf/AICTE%20Letter.pdf",
        },
        {
          text: " Supreme Court Judgement Regarding Non-Requirement of AICTE Approval for Private Universities",
          url: "http://gla.ac.in/pdf/Supreme%20Court%20Judgement%20Regarding%20Non-Requirement%20of%20AICTE%20Approval%20for%20Private%20Universities.pdf",
        },
      ],
    },
    {
      id: 4,
      name: "Association of Indian Universities",
      image: govtRecog4,
      links: [{ text: "Members Listing", url: "https://aiu.ac.in/member.php" }],
    },
    {
      id: 5,
      name: "National Council for Teacher Education (NCTE)",
      image: govtRecog5,
      links: [
        {
          text: "Recognition Letter of NCTE for B. Ed. Programme",
          url: "https://www.gla.ac.in/Uploads/image/1377imguf_NCTELetter.pdf",
        },
      ],
    },
    {
      id: 6,
      name: "BAR Council of INDIA",
      image: govtRecog6,
      links: [
        {
          text: "Approval Letter of BAR Council of India for B.A.L.L.B. & B. Com L.L.B. Programme",
          url: "https://www.gla.ac.in/Uploads/image/1586imguf_bcid10432023GLAUniversity,Chaumuhan,UP_0001_230731_213649.pdf",
        },
      ],
    },
    {
      id: 7,
      name: "Pharmacy Council of India (PCI)",
      image: pci,
      links: [
        {
          text: "Approval Letter of PCI for D. Pharm, B. Pharm & M. Pharm Programme",
          url: "https://www.gla.ac.in/Uploads/image/1593imguf_pciapprvalletter2024-25.pdf",
        },
      ],
    },
    {
      id: 8,
      name: "The National Assessment and Accreditation Council (NAAC)",
      image: naacGovt,
      links: [
        {
          text: "A+ Grade Accredited by NAAC",
          url: "https://www.gla.ac.in/Uploads/image/954imguf_NAACCertificate.pdf",
        },
        {
          text: "NAAC Certificate",
          url: "https://www.gla.ac.in/Uploads/image/747imguf_NAACCertificate.pdf",
        },
      ],
    },
    {
      id: 9,
      name: "IACBE Accreditation",
      image: iacbeGovt,
      links: [
        {
          text: "Accreditation Certificate of International Accreditation Council for Business Education",
          url: "https://www.gla.ac.in/Uploads/image/1594imguf_IACBECertificate.pdf",
        },
      ],
    },
    {
      id: 10,
      name: "ISO Certificate",
      image: iso,
      links: [
        {
          text: "ISO Certificate",
          url: "https://www.gla.ac.in/Uploads/image/825imguf_GLAUNIVERSITY,MATHURADBSIAS9001Q-205022060810.pdf",
        },
      ],
    },
    {
      id: 11,
      name: "Ranked 54th in Pharmacy Category",
      image: nirfGovt,
      links: [{ text: "NIRF Certificate", url: "#" }],
    },
    {
      id: 12,
      name: "Awarded 11-50 Band Score by",
      image: ariiaLogo,
      links: [
        {
          text: "Innovation Ranking 2023",
          url: "https://www.gla.ac.in/Uploads/image/983imguf_ARI-U-0513_NIRF_Innovation_GLAU(1).pdf",
        },
      ],
    },
    {
      id: 13,
      name: "University Grant Commission (UGC) - Greater Noida Off-Campus",
      image: ugcOffCampus,
      links: [
        {
          text: "Letter of Authorization",
          url: "https://www.gla.ac.in/Uploads/image/1596imguf_LOAOffCampusLetter_0001-1.pdf",
        },
      ],
    },
    {
      id: 14,
      name: "Indian Council Of Agricultural Research",
      image: icar,
      links: [
        {
          text: "ICAR Letter",
          url: "https://www.gla.ac.in/Uploads/image/1715imguf_GLAUniversityAccreditationLetter(1).pdf",
        },
      ],
    },
  ];

  const AwardGrid = ({ items, isGovernment = false }) => (
    <div className="grid md:grid-cols-2 sm:gap-8  gap-4 max-w-7xl mx-auto mb-12">
      {items.map((member) => (
        <div
          key={member.id}
          className="flex flex-col items-center sm:flex-row gap-8 group p-4 rounded-lg background-gradient-yellow-light z-10 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative w-48 h-48 max-w-full bg-white p-2 max-h-full flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col text-center sm:text-left justify-center">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900">
                {member.name}
              </h3>
              {isGovernment ? (
                <ul className="mt-2 mb-4 space-y-2">
                  {member.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                      >
                        {link.text}
                        <svg
                          className="min-w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
                  {member.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { label: "Awards & Accreditations" },
  ];

  return (
    <>
      <Seo
        title="GLA Greater Noida - Awards & Accreditations | Ranked Institute"
        description="Discover the prestigious awards, accreditations, and rankings earned by GLA Greater Noida, recognized among the top engineering and management colleges in India."
        // keywords={['GLA University awards', 'GLA accreditations', 'GLA rankings', 'university recognition', 'NAAC A+', 'IACBE Accreditation', 'ISO Certificate', 'UGC', 'AICTE', 'NIRF', 'ARIIA', 'NAAC', 'IACBE', 'ISO', 'UGC', 'AICTE', 'NIRF', 'ARIIA']}
        // ogTitle="Awards and Accreditations - GLA University"
        // ogDescription="GLA University is proud of its recognitions and achievements. See our list of awards and accreditations."
        // ogImage="https://www.example.com/images/gla-awards-og.jpg" // Replace with actual image URL
        canonicalUrl="/awards-accreditations" // Replace with actual URL
      />
      <Banner
        title="Awards & Accreditations"
        image={awardBanner}
        imageAlt="Award Banner Image"
        breadcrumbItems={breadcrumbItems}
      />

      <GridBackground>
        <section className="container mx-auto px-4 pb-20 pt-32">
          <Tabs defaultValue="university" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="relative z-10 w-full max-w-[320px] sm:max-w-3xl flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-gray-200">
                <TabsTrigger
                  value="university"
                  className={cn(
                    "flex-1 px-4 sm:px-8 py-2.5 text-xs sm:text-base font-medium rounded-sm transition-all duration-300",
                    "data-[state=active]:bg-cusSecondary data-[state=active]:text-black data-[state=active]:shadow-md",
                    "data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100/50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cusSecondary",
                    "whitespace-nowrap"
                  )}
                >
                  University Awards
                </TabsTrigger>
                <TabsTrigger
                  value="government"
                  className={cn(
                    "flex-1 px-4 sm:px-8 py-2.5 text-xs sm:text-base font-medium rounded-sm transition-all duration-300",
                    "data-[state=active]:bg-cusSecondary data-[state=active]:text-black data-[state=active]:shadow-md",
                    "data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100/50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cusSecondary",
                    "whitespace-nowrap"
                  )}
                >
                  Government Awards
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="university"
              className="mt-6 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-5 duration-500"
            >
              <AwardGrid items={awards} isGovernment={false} />
            </TabsContent>

            <TabsContent
              value="government"
              className="mt-6 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-5 duration-500"
            >
              <AwardGrid items={govermentAwards} isGovernment={true} />
            </TabsContent>
          </Tabs>
        </section>
      </GridBackground>
    </>
  );
}
