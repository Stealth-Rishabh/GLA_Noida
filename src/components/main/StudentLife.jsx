import { ArrowRight } from "lucide-react";
import banner1 from "@/assets/banner/bannerOne.webp";
import banner2 from "@/assets/banner/bannerTwo.webp";
import sports from "@/assets/sports/sports.webp";

const studentLifeData = [
  {
    title: "Arts and Culture",
    image: {
      src: banner1,
      alt: "Arts and Culture - Gallery exhibition with people viewing displays",
    },
    description:
      "UniCamp nurtures creativity in all its forms — be it art, music, drama, or dance. It's an opportunity to meet like-minded people.",
    className: "",
  },
  {
    title: "Student Life",
    image: {
      src: banner2,
      alt: "Student Life - Students studying in a library area with bookshelves",
    },
    description:
      "The extraordinary range of opportunities to discover something new and allows you to determine your student life at UniCamp.",
    className: "md:mt-16",
  },
  {
    title: "Sports and Fitness",
    image: {
      src: sports,
      alt: "Sports and Fitness - Students in sports uniforms playing a team sport",
    },
    description:
      "UniCamp offers a diverse range of competitive sporting opportunities to help you lead a healthy and active lifestyle.",
    className: "",
  },
];

export default function StudentLife() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <p className="text-gray-600">
          A thriving community of creativity and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {studentLifeData.map((item, index) => (
          <div key={index} className={`flex flex-col ${item.className}`}>
            <div className="mb-4">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-cusBlue">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a
              href="#"
              className="text-cusGreen font-medium flex items-center group"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
