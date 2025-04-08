"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banner/bannerOne.webp";
import banner2 from "@/assets/banner/bannerTwo.webp";
import banner3 from "@/assets/banner/bannerThree.webp";
import { Heading } from "@/components/ui/heading";

/**
 * BannerSlider Component
 *
 * A responsive, auto-advancing image slider with navigation controls
 * and call-to-action buttons.
 */
export function BannerSlider() {
  const slides = [
    {
      image: banner1,
      title: "Shaping Tomorrow's Leaders Today",
      description:
        "Join our community of scholars, innovators, and leaders dedicated to making a difference in the world.",
      cta: "Explore Programs",
      secondaryCta: "Schedule a Visit",
    },
    {
      image: banner2,
      title: "Discover Your Potential",
      description:
        "Access world-class education and research opportunities that will prepare you for a successful future.",
      cta: "Apply Now",
      secondaryCta: "Learn More",
    },
    {
      image: banner3,
      title: "Pioneering Research Excellence",
      description:
        "Our faculty and students are at the forefront of groundbreaking discoveries and innovations.",
      cta: "Research Initiatives",
      secondaryCta: "Meet Our Faculty",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Add touch handling functions
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-full">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="container mx-auto max-w-7xl px-4 relative h-full flex flex-col justify-center items-start text-white mt-20">
              <Heading
                level={2}
                className="text-white mb-4 max-w-2xl"
                subtext={slide.description}
                subtextClassName="text-white text-lg md:text-xl mb-8 max-w-xl"
              >
                {slide.title}
              </Heading>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group px-6 py-3 rounded-md text-base font-medium flex items-center transition-all"
                  style={{
                    backgroundColor: "var(--color-cusYellow)",
                    color: "var(--color-cusBlue)",
                  }}
                >
                  {slide.cta}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  className="px-6 py-3 rounded-md text-base font-medium border-2 bg-transparent hover:bg-white/10 transition-colors"
                  style={{
                    borderColor: "var(--color-cusYellow)",
                    color: "white",
                  }}
                >
                  {slide.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full hidden md:flex items-center justify-center text-white transition-colors z-10"
        style={{
          backgroundColor: "var(--color-cusBlue)",
          opacity: 0.7,
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full hidden md:flex items-center justify-center text-white transition-colors z-10"
        style={{
          backgroundColor: "var(--color-cusBlue)",
          opacity: 0.7,
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8" : "w-2"
            }`}
            style={{
              backgroundColor:
                currentSlide === index
                  ? "var(--color-cusYellow)"
                  : "rgba(255, 255, 255, 0.5)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
