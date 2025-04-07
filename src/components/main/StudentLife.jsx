"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CampusLifeSection() {
  const [activeCard, setActiveCard] = useState(null);

  const campusLifeCards = [
    {
      id: "arts",
      title: "Arts and Culture",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxg2Wsp0GVXyhTpRaFdBUm0F5vDcyH.png", // Replace with actual image
      description:
        "GLA University nurtures creativity in all its forms — be it art, music, drama, or dance. It's an opportunity to meet like-minded people and express yourself through various cultural activities and events throughout the year.",
      features: [
        "Art Exhibitions",
        "Music Festivals",
        "Theater Productions",
        "Cultural Workshops",
      ],
      link: "/campus-life/arts-culture",
    },
    {
      id: "student",
      title: "Student Life",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxg2Wsp0GVXyhTpRaFdBUm0F5vDcyH.png", // Replace with actual image
      description:
        "The extraordinary range of opportunities to discover something new and allows you to determine your student life at GLA University. From clubs and societies to leadership programs, there's something for everyone.",
      features: [
        "Student Clubs",
        "Campus Events",
        "Leadership Programs",
        "Community Service",
      ],
      link: "/campus-life/student-life",
    },
    {
      id: "sports",
      title: "Sports and Fitness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxg2Wsp0GVXyhTpRaFdBUm0F5vDcyH.png", // Replace with actual image
      description:
        "GLA University offers a diverse range of competitive sporting opportunities to help you lead a healthy and active lifestyle. Our state-of-the-art facilities and expert coaching staff ensure you can excel in your chosen sport.",
      features: [
        "Competitive Teams",
        "Fitness Centers",
        "Intramural Sports",
        "Wellness Programs",
      ],
      link: "/campus-life/sports-fitness",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Campus Life
          </h2>
          <div className="w-24 h-1 bg-[#b71c1c] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A thriving community of creativity and innovation where students
            discover their passions and build lifelong connections
          </p>
        </div>

        {/* Campus Life Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {campusLifeCards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cusBlue/90 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <div
                    className={`h-1 w-12 bg-cusYellow transition-all duration-300 ${
                      activeCard === card.id ? "w-24" : "w-12"
                    }`}
                  ></div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <p className="text-gray-700 mb-4">{card.description}</p>

                <ul className="mb-6 space-y-2">
                  {card.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-cusYellow rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={card.link}
                  className="inline-flex items-center text-cusBlue font-medium hover:text-cusBlueLight transition-colors group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cusBlue to-cusBlueLight rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Experience Campus Life Firsthand
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Schedule a campus tour to see our facilities, meet current students,
            and get a feel for life at GLA University.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/campus-tour"
              className="px-6 py-3 bg-cusYellow text-cusBlue font-medium rounded-md hover:bg-cusYellowLight transition-colors inline-flex items-center justify-center"
            >
              Schedule a Tour
            </a>
            <a
              href="/virtual-tour"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Take a Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
