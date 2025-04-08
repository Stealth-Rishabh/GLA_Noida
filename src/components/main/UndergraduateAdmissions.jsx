import { useMemo } from "react";
import sports1 from "@/assets/sports/sports.webp";
import btech from "@/assets/general/Btech_home.webp";
// import bca from "@/assets/sports/Bca_home.webp";
import bba from "@/assets/general/Bba_home.webp";
import mba from "@/assets/general/Mba_home.webp";

export default function UndergraduateAdmissions() {
  const admissionsCards = useMemo(
    () => [
      {
        id: 1,
        image: btech,
        alt: "Students walking in university hallway",
        href: "/undergraduate/programs",
        caption: "B.Tech",
      },
      {
        id: 2,
        image: sports1,
        alt: "Student studying at desk",
        href: "/undergraduate/admission",
        caption: "BCA",
      },
      {
        id: 3,
        image: bba,
        alt: "Students in common area",
        href: "/undergraduate/campus-life",
        caption: "BBA",
      },
      {
        id: 4,
        image: mba,
        alt: "Students collaborating around computer",
        href: "/undergraduate/research",
        caption: "MBA",
      },
    ],
    []
  ); // Empty dependency array since sports1 is a static import

  return (
    <div className="w-full background-gradient-white">
      <div className=" container mx-auto p-0 md:p-4">
        <div className="flex flex-wrap mx-0 md:mx-2 gap-6 md:gap-0">
          {admissionsCards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-0 md:px-2 mb-4 group"
            >
              <a href={card.href} className="block relative">
                <div className="relative">
                  <figure className="relative overflow-hidden cursor-pointer">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </figure>
                  <div className="absolute bottom-[-20px] left-[-10px] right-[-10px] max-w-[75%] mx-auto bg-cusBlue py-3 px-4 transition-all duration-300 group-hover:bg-cusBlueDark group-hover:pb-8 z-10">
                    <div className="relative flex items-center justify-center">
                      <h3 className="text-white text-center font-serif font-medium text-lg">
                        {card.caption}
                      </h3>
                      <span className="absolute top-full left-1/2 -translate-x-1/2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 text-sm">
                        Learn →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
