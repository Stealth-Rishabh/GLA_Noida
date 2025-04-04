import { ArrowRight } from "lucide-react";
import SetUsApartImage from "@/assets/general/setUsApart.webp";
export default function SetUsApart() {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Content Card */}
        <div className="lg:col-span-5 bg-white p-8 sm:p-12 shadow-sm rounded-sm z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-cusBlue mb-4">
            UniCamp Open Day
          </h2>
          <div className="w-24 h-1 bg-cusYellow mb-6"></div>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover what studying at UniCamp is really like. Explore our
            campuses and find out more about our admission process and get to
            know our community.
          </p>
          <button className="bg-cusGreen text-white px-6 py-3 flex items-center gap-2 hover:bg-cusGreenLight transition-colors">
            Learn more <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-7 lg:-ml-24 h-[400px] sm:h-[500px] lg:h-[600px] relative">
          <img
            src={SetUsApartImage}
            alt="Modern university campus with students walking on stairs with red railings"
            className="object-cover rounded-sm w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
