import { useMemo } from "react";
import sports1 from "@/assets/sports/sports.webp";

export default function UndergraduateAdmissions() {
  const admissionsCards = useMemo(
    () => [
      {
        id: 1,
        image: sports1,
        alt: "Students walking in university hallway",
        href: "/undergraduate/programs",
      },
      {
        id: 2,
        image: sports1,
        alt: "Student studying at desk",
        href: "/undergraduate/admission",
      },
      {
        id: 3,
        image: sports1,
        alt: "Students in common area",
        href: "/undergraduate/campus-life",
      },
      {
        id: 4,
        image: sports1,
        alt: "Students collaborating around computer",
        href: "/undergraduate/research",
      },
    ],
    []
  ); // Empty dependency array since sports1 is a static import

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mx-2">
          {admissionsCards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 group"
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
                        Undergraduate
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
