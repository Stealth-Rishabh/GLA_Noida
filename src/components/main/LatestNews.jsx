"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/heading";
import banner from "@/assets/banner/bannerOne.webp";
import bannerTwo from "@/assets/banner/bannerTwo.webp";
import bannerThree from "@/assets/banner/bannerThree.webp";
import sports from "@/assets/sports/sports.webp";
import general from "@/assets/general/SetUsApart.webp";
import generalTwo from "@/assets/general/fixedBackground.webp";

// Custom Badge component
const Badge = ({ variant = "default", className, children, ...props }) => {
  const variantClasses = {
    alumni: "bg-purple-100 text-purple-800 border-purple-200",
    research: "bg-emerald-100 text-emerald-800 border-emerald-200",
    studentLife: "bg-sky-100 text-sky-800 border-sky-200",

    career: "bg-purple-100 text-purple-800 border-purple-200",
    facilities: "bg-amber-100 text-amber-800 border-amber-200",
    campus: "bg-blue-100 text-blue-800 border-blue-200",
    events: "bg-rose-100 text-rose-800 border-rose-200",
    science: "bg-indigo-100 text-indigo-800 border-indigo-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center background-gradient px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantClasses[variant] || " text-gray-800 border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const LatestNews = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const newsContainerRef = useRef(null);
  const eventsContainerRef = useRef(null);

  // Add these new states for touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = (isNews = true) => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      isNews ? handleNewsNavigation("next") : handleEventNavigation("next");
    }
    if (isRightSwipe) {
      isNews ? handleNewsNavigation("prev") : handleEventNavigation("prev");
    }
  };

  const newsItems = [
    {
      id: 1,
      image: banner,
      categories: [
        { name: "RESEARCH", variant: "research" },
        { name: "SCIENCE", variant: "science" },
      ],
      title: "GLA University Researchers Make Breakthrough in AI Technology",
      author: "Dr. Sharma",
      date: "Mar 15, 2024",
    },
    {
      id: 2,
      image: bannerTwo,
      categories: [{ name: "STUDENT LIFE", variant: "studentLife" }],
      title: "GLA Students Win National Innovation Challenge",
      author: "Prof. Kumar",
      date: "Mar 10, 2024",
    },
    {
      id: 3,
      image: bannerThree,
      categories: [
        { name: "CAREER", variant: "career" },
        { name: "CAMPUS", variant: "campus" },
      ],
      title: "Top Companies Recruit GLA Graduates in Record Numbers",
      author: "Placement Cell",
      date: "Mar 5, 2024",
    },
    {
      id: 4,
      image: sports,
      categories: [
        { name: "FACILITIES", variant: "facilities" },
        { name: "CAMPUS", variant: "campus" },
      ],
      title: "New Engineering Block Inaugurated at GLA University",
      author: "Campus News",
      date: "Feb 28, 2024",
    },
    {
      id: 5,
      image: generalTwo,
      categories: [
        { name: "EVENTS", variant: "events" },
        { name: "ALUMNI", variant: "alumni" },
      ],
      title: "GLA Alumni Meet 2024: Connecting Past and Present",
      author: "Alumni Association",
      date: "Feb 20, 2024",
    },
    {
      id: 6,
      image: general,
      categories: [
        { name: "RESEARCH", variant: "research" },
        { name: "SCIENCE", variant: "science" },
      ],
      title:
        "GLA University Receives Major Research Grant for Sustainable Energy",
      author: "Research Department",
      date: "Feb 15, 2024",
    },
  ];

  const events = [
    {
      id: 1,
      day: "25",
      month: "MAR",
      title: "GLA Tech Fest 2024: Innovation Summit",
      timeRange: "9:30 AM - 5:30 PM",
      location: "Main Auditorium, GLA University",
    },
    {
      id: 2,
      day: "28",
      month: "MAR",
      title: "Annual Cultural Festival - Yuva Tarang",
      timeRange: "10:00 AM - 8:00 PM",
      location: "University Ground",
    },
    {
      id: 3,
      day: "02",
      month: "APR",
      title: "Industry Expert Talk: Future of AI and Machine Learning",
      timeRange: "2:30 PM - 4:30 PM",
      location: "CS Block Seminar Hall",
    },
    {
      id: 4,
      day: "05",
      month: "APR",
      title: "National Conference on Emerging Technologies",
      timeRange: "9:00 AM - 6:00 PM",
      location: "Convention Center",
    },
    {
      id: 5,
      day: "10",
      month: "APR",
      title: "Campus Placement Drive - IT Companies",
      timeRange: "All Day",
      location: "Placement Cell",
    },
    {
      id: 6,
      day: "15",
      month: "APR",
      title: "Sports Meet 2024: Inter-Department Championship",
      timeRange: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
    },
  ];

  // Get the number of items to show based on screen size
  const getVisibleItemCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItemCount());

  // Update visible items count on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItemCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display items based on screen size
  const visibleNewsItems = newsItems.slice(
    activeNewsIndex,
    activeNewsIndex + visibleItems
  );
  // If we don't have enough items, add from the beginning
  if (visibleNewsItems.length < visibleItems) {
    visibleNewsItems.push(
      ...newsItems.slice(0, visibleItems - visibleNewsItems.length)
    );
  }

  // Display events based on screen size
  const visibleEvents = events.slice(
    activeEventIndex,
    activeEventIndex + visibleItems
  );
  // If we don't have enough items, add from the beginning
  if (visibleEvents.length < visibleItems) {
    visibleEvents.push(...events.slice(0, visibleItems - visibleEvents.length));
  }

  const handleNewsNavigation = useCallback(
    (direction) => {
      if (direction === "prev") {
        setActiveNewsIndex((prev) => {
          const newIndex = prev - 1;
          return newIndex < 0 ? newsItems.length - visibleItems : newIndex;
        });
      } else {
        setActiveNewsIndex((prev) => {
          const newIndex = prev + 1;
          return newIndex > newsItems.length - visibleItems ? 0 : newIndex;
        });
      }
    },
    [newsItems.length, visibleItems]
  );

  const handleEventNavigation = useCallback(
    (direction) => {
      if (direction === "prev") {
        setActiveEventIndex((prev) => {
          const newIndex = prev - 1;
          return newIndex < 0 ? events.length - visibleItems : newIndex;
        });
      } else {
        setActiveEventIndex((prev) => {
          const newIndex = prev + 1;
          return newIndex > events.length - visibleItems ? 0 : newIndex;
        });
      }
    },
    [events.length, visibleItems]
  );

  // Auto-slide functionality
  useEffect(() => {
    const newsInterval = setInterval(() => {
      handleNewsNavigation("next");
    }, 5000);

    const eventsInterval = setInterval(() => {
      handleEventNavigation("next");
    }, 7000);

    return () => {
      clearInterval(newsInterval);
      clearInterval(eventsInterval);
    };
  }, [handleNewsNavigation, handleEventNavigation]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 overflow-hidden">
      {/* News Section - Left side */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <Heading level={2}>
            <span className="border-b-4 border-cusYellow">Latest News</span>
          </Heading>
          <button
            className="group flex items-center text-sm font-medium text-gray-600 hover:text-cusBlue transition-colors"
            onClick={() => handleNewsNavigation("next")}
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div
          ref={newsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={() => onTouchEnd(true)}
        >
          {visibleNewsItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-white transition-all duration-300 shadow-xl"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={item.image || "/placeholder.svg?height=200&width=300"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex-1 p-5 border border-t-0 border-gray-100 rounded-b-xl transition-all duration-300 group-hover:border-purple-100">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.categories.map((category, idx) => (
                    <Badge key={idx} variant={category.variant}>
                      {category.name}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-4 text-gray-900 line-clamp-2 group-hover:text-cusBlue transition-colors">
                  {item.title}
                </h3>

                <div className="mt-auto pt-4 text-gray-500 text-sm border-t border-gray-100 flex items-center justify-between">
                  <span className="font-medium">{item.author}</span>
                  <span>{item.date}</span>
                </div>

                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-cusGreen hover:bg-cusGreenDark text-white p-2 rounded-full shadow-lg">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {newsItems.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                idx >= activeNewsIndex && idx < activeNewsIndex + 1
                  ? "bg-cusYellow"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
              onClick={() => setActiveNewsIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Events Section - Right side */}
      <div className=" p-2 relative">
        <div className="flex justify-between items-center mb-6">
          <Heading level={2}>
            <span className="border-b-4 border-cusYellow">Ev</span>ents
          </Heading>
          <button
            className="group flex items-center text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            onClick={() => handleEventNavigation("next")}
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div
          ref={eventsContainerRef}
          className="space-y-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={() => onTouchEnd(false)}
        >
          {visibleEvents.map((event) => (
            <div
              key={event.id}
              className="group flex items-start p-4 rounded-xl bg-white border border-gray-100 transition-all duration-300 shadow-lg hover:border-purple-100 cursor-pointer"
            >
              <div className="flex-shrink-0 mr-5 p-3 shadow-lg rounded-lg transition-colors">
                <div className="text-3xl font-bold bg-cusBlue bg-clip-text text-transparent">
                  {event.day}
                </div>
                <div className="text-gray-500 uppercase text-xs font-medium tracking-wider">
                  {event.month}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-900 mt-2 group-hover:text-cusBlue transition-colors line-clamp-2">
                  {event.title}
                </h3>
              </div>

              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-cusBlue" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {events.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                idx >= activeEventIndex && idx < activeEventIndex + 1
                  ? "bg-cusYellow"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
              onClick={() => setActiveEventIndex(idx)}
              aria-label={`Go to events slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
