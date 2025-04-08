import { ArrowRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
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
      "GLA University fosters creativity in all its forms — be it art, music, drama, or dance. Our vibrant cultural scene provides endless opportunities to explore and express yourself.",
    className: "",
  },
  {
    title: "Campus Life",
    image: {
      src: banner2,
      alt: "Campus Life - Students studying in a library area with bookshelves",
    },
    description:
      "Experience the dynamic campus life at GLA University with countless opportunities for personal growth, leadership development, and memorable experiences.",
    className: "md:mt-16",
  },
  {
    title: "Sports and Athletics",
    image: {
      src: sports,
      alt: "Sports and Athletics - Students in sports uniforms playing a team sport",
    },
    description:
      "GLA University provides excellent sporting facilities and programs, encouraging students to maintain an active lifestyle while competing at various levels.",
    className: "",
  },
];

export default function StudentLife() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <Heading
          level={2}
          align="center"
          subtext="A vibrant ecosystem of learning and growth"
          className="text-cusBlue"
        >
          Student Life at GLA
        </Heading>
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
            <Heading level={3} className="text-cusBlue mb-3">
              {item.title}
            </Heading>
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
