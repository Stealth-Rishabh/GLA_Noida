import { motion } from "framer-motion";
import { useState } from "react";
import Banner from "@/components/main/Banner";

export default function Awards() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const awards = [
    {
      id: 1,
      name: "Ranked #2 in UP & #6 in INDIA",
      description: "amongst all Private B-Schools Ranking 2018",
      image: "https://www.gla.ac.in/Uploads/banner/1ardach_time-b.png",
    },
    {
      id: 2,
      name: "Best Private University",
      description: "in UP in Engineering by Survey 2018",
      image: "https://www.gla.ac.in/Uploads/banner/2ardach_danik-j.png",
    },
    {
      id: 3,
      name: "Rated 'AAA'",
      description: "amongst India's Best Engineering Colleges 2020",
      image: "https://www.gla.ac.in/Uploads/banner/3ardach_careers360.png",
    },
    {
      id: 4,
      name: "Ranked #1 in INDIA",
      description:
        "amongst the Top Emerging Engineering Institutes in survey 2018 by Times of India",
      image: "https://www.gla.ac.in/Uploads/banner/4ardach_time-of-india.png",
    },
    {
      id: 5,
      name: "Ranked #1 University in UP",
      description:
        "Best Private University in UP and also in North, East & North Eastern India",
      image: "https://www.gla.ac.in/Uploads/banner/7ardach_dilog-india.png",
    },
    {
      id: 6,
      name: "Ranked #3 in UP",
      description: "amongst Top 75 B Schools - BBA Edition survey 2018",
      image: "https://www.gla.ac.in/Uploads/banner/8ardach_time-b.png",
    },
    {
      id: 7,
      name: "National Employability Award",
      description: "among the Top 10% engineering campuses nationally 2019",
      image: "https://www.gla.ac.in/Uploads/banner/9ardach_aspiringminds.png",
    },
    {
      id: 8,
      name: "Ranked #3 in UP",
      description: "Institute of Business Management - BBA",
      image: "https://www.gla.ac.in/Uploads/banner/10ardach_indiatoday.png",
    },
    {
      id: 9,
      name: "Best Private University",
      description: "in UP Survey 2019 & 2020 by Dainik Jagran",
      image: "https://www.gla.ac.in/Uploads/banner/21ardach_dj.png",
    },
    {
      id: 10,
      name: "Awarded Excellence in Placements & Alumni Network",
      description: "amongst best private universities in India",
      image: "https://www.gla.ac.in/Uploads/banner/24ardach_hindustan.png",
    },
    {
      id: 11,
      name: "University Grant Commission (UGC)",
      description:
        "12B Status by UGC Among the top private universities in India to receive this honour.",
      image: "https://www.gla.ac.in/Uploads/banner/25ardach_ugc.jpg",
    },
    {
      id: 12,
      name: "ARIIA Band Excellent Award",
      description:
        "for blending innovation in learning and beyond classroom experiential activities",
      image: "https://www.gla.ac.in/Uploads/banner/26ardach_AriiaLogo.png",
    },
    {
      id: 13,
      name: "NAAC 'A+' Grade",
      description:
        "for high standard Infrastructure, Learning Resources, Research, Innovation, etc.",
      image: "https://www.gla.ac.in/Uploads/banner/30ardach_naac.png",
    },
    {
      id: 14,
      name: "NPTEL ACTIVE Local Chapter",
      description:
        "Ranked among the top 100 institutions with Local Chapter tag by NPTEL",
      image: "https://www.gla.ac.in/Uploads/banner/31ardach_nptel.png",
    },
    {
      id: 15,
      name: "IACBE Accreditation",
      description:
        "Specialized accreditation through the International Accreditation Council for Business Education",
      image: "https://www.gla.ac.in/Uploads/banner/32ardach_iacbe.png",
    },
    {
      id: 16,
      name: "NIRF RANKED Institute of Pharmaceutical Research",
      description:
        "is ranked as the 54th best institute for pharmacy education in India by NIRF.",
      image: "https://www.gla.ac.in/Uploads/banner/33ardach_nirf.png",
    },
    {
      id: 17,
      name: "Times Higher Education Rankings 2024",
      description:
        "All India Rank 44, Worldwide Rank Band 1001-1200, Research Quality (World) Rank 691",
      image:
        "https://www.gla.ac.in/Uploads/banner/35ardach_Times_Higher_Education_.png",
    },
  ];

  const govermentAwards = [
    {
      id: 1,
      name: "Ranked #2 in UP & #6 in INDIA",
      description: "amongst all Private B-Schools Ranking 2018",
      image: "https://www.gla.ac.in/Uploads/banner/1ardach_time-b.png",
    },
    {
      id: 2,
      name: "Best Private University",
      description: "in UP in Engineering by Survey 2018",
      image: "https://www.gla.ac.in/Uploads/banner/2ardach_danik-j.png",
    },
    {
      id: 3,
      name: "Rated 'AAA'",
      description: "amongst India's Best Engineering Colleges 2020",
      image: "https://www.gla.ac.in/Uploads/banner/3ardach_careers360.png",
    },
    {
      id: 4,
      name: "Ranked #1 in INDIA",
      description:
        "amongst the Top Emerging Engineering Institutes in survey 2018 by Times of India",
      image: "https://www.gla.ac.in/Uploads/banner/4ardach_time-of-india.png",
    },
    {
      id: 5,
      name: "Ranked #1 University in UP",
      description:
        "Best Private University in UP and also in North, East & North Eastern India",
      image: "https://www.gla.ac.in/Uploads/banner/7ardach_dilog-india.png",
    },
    {
      id: 6,
      name: "Ranked #3 in UP",
      description: "amongst Top 75 B Schools - BBA Edition survey 2018",
      image: "https://www.gla.ac.in/Uploads/banner/8ardach_time-b.png",
    },
    {
      id: 7,
      name: "National Employability Award",
      description: "among the Top 10% engineering campuses nationally 2019",
      image: "https://www.gla.ac.in/Uploads/banner/9ardach_aspiringminds.png",
    },
    {
      id: 8,
      name: "Ranked #3 in UP",
      description: "Institute of Business Management - BBA",
      image: "https://www.gla.ac.in/Uploads/banner/10ardach_indiatoday.png",
    },
    {
      id: 9,
      name: "Best Private University",
      description: "in UP Survey 2019 & 2020 by Dainik Jagran",
      image: "https://www.gla.ac.in/Uploads/banner/21ardach_dj.png",
    },
    {
      id: 10,
      name: "Awarded Excellence in Placements & Alumni Network",
      description: "amongst best private universities in India",
      image: "https://www.gla.ac.in/Uploads/banner/24ardach_hindustan.png",
    },
    {
      id: 11,
      name: "University Grant Commission (UGC)",
      description:
        "12B Status by UGC Among the top private universities in India to receive this honour.",
      image: "https://www.gla.ac.in/Uploads/banner/25ardach_ugc.jpg",
    },
    {
      id: 12,
      name: "ARIIA Band Excellent Award",
      description:
        "for blending innovation in learning and beyond classroom experiential activities",
      image: "https://www.gla.ac.in/Uploads/banner/26ardach_AriiaLogo.png",
    },
    {
      id: 13,
      name: "NAAC 'A+' Grade",
      description:
        "for high standard Infrastructure, Learning Resources, Research, Innovation, etc.",
      image: "https://www.gla.ac.in/Uploads/banner/30ardach_naac.png",
    },
    {
      id: 14,
      name: "NPTEL ACTIVE Local Chapter",
      description:
        "Ranked among the top 100 institutions with Local Chapter tag by NPTEL",
      image: "https://www.gla.ac.in/Uploads/banner/31ardach_nptel.png",
    },
    {
      id: 15,
      name: "IACBE Accreditation",
      description:
        "Specialized accreditation through the International Accreditation Council for Business Education",
      image: "https://www.gla.ac.in/Uploads/banner/32ardach_iacbe.png",
    },
  ];
  return (
    <>
      <Banner
        title="Awards & Accreditations"
        image={"https://www.gla.ac.in/images/awards-banner.webp"}
      />
      <section className="container mx-auto px-4 py-10 relative sm:py-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.5rem] font-bold text-mainBlue mb-4 tracking-tight">
            Board Of Studies
          </h2>
        </motion.div> */}

        <div className="grid md:grid-cols-2 sm:gap-8 gap-4 max-w-7xl mx-auto mb-12">
          {awards.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center sm:flex-row gap-8 group p-4 rounded-lg background-gradient-yellow-light z-10 shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="relative w-48 h-48 max-w-full bg-white p-2 max-h-full flex-shrink-0 overflow-hidden rounded-lg">
                <motion.img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col text-center sm:text-left justify-center">
                <motion.div
                  initial={false}
                  animate={{ y: hoveredMember === member.id ? -2 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  {/* <p className="text-indigo-600 font-medium">{member.role}</p> */}
                  <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
