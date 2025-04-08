import { ArrowRight } from "lucide-react";
import SetUsApartImage from "@/assets/general/SetUsApart.webp";
import { Heading } from "@/components/ui/heading";

export default function SetUsApart() {
  return (
    <div className="relative w-full max-w-7xl mx-auto my-12 px-0 md:px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Content Card */}
        <div className="lg:col-span-5 bg-white p-8 sm:p-12 shadow-sm rounded-sm z-10">
          <Heading
            level={2}
            className="text-cusBlue mb-4"
            subtext="Experience excellence at GLA University, where cutting-edge technology meets traditional values. Our state-of-the-art facilities, industry-aligned curriculum, and focus on practical learning set us apart in higher education."
            subtextClassName="text-gray-600 text-lg mb-8 leading-relaxed"
          >
            What Set Us
            <span className=" border-b-4 border-cusYellow "> Apart?</span>
          </Heading>

          <button className="bg-cusGreen text-white px-6 py-3 flex items-center gap-2 hover:bg-cusGreenLight transition-colors">
            Explore More <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-7 lg:-ml-24 h-[400px] sm:h-[500px] lg:h-[600px] relative">
          <img
            src={SetUsApartImage}
            alt="GLA University campus showcasing modern architecture and vibrant student life"
            className="object-cover rounded-sm w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
