import { ArrowRight } from "lucide-react";

export default function ExploreMajorsSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Fixed background image with lowest z-index */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SDVdG0wK2Qq2Pk1Xpp1marHKksFBjS.png')`,
          backgroundAttachment: "fixed",
          filter: "brightness(0.8)",
        }}
      />

      {/* Content overlay with higher z-index */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
            <span className="block">Explore Majors &</span>
            <span className="block mt-2 border-b-2 border-white pb-2 inline-block">
              Programs
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white my-6">
            Choose from 16 undergraduate and graduate majors
          </p>

          <button className="bg-[#b71c1c] hover:bg-[#8c0000] text-white py-3 px-6 flex items-center transition-colors duration-300 mt-4">
            <span className="mr-2">View all programs</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
