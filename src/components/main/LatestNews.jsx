"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
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
    studentStory: "bg-pink-100 text-pink-800 border-pink-200",
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

  const newsItems = [
    {
      id: 1,
      image: banner,
      categories: [
        { name: "ALUMNI", variant: "alumni" },
        { name: "RESEARCH", variant: "research" },
      ],
      title:
        "Autism rates have increased and show significant regional variation",
      author: "Owen Christ",
      date: "Mar 17, 2021",
    },
    {
      id: 2,
      image: bannerTwo,
      categories: [
        { name: "STUDENT LIFE", variant: "studentLife" },
        { name: "STUDENT STORY", variant: "studentStory" },
      ],
      title: "Most students say their mental health suffered in pandemic",
      author: "Owen Christ",
      date: "Jan 25, 2021",
    },
    {
      id: 3,
      image: bannerThree,
      categories: [
        { name: "CAREER", variant: "career" },
        { name: "RESEARCH", variant: "research" },
      ],
      title: "Most students pleased with their digital learning experience",
      author: "Owen Christ",
      date: "Jan 23, 2021",
    },
    {
      id: 4,
      image: sports,
      categories: [
        { name: "FACILITIES", variant: "facilities" },
        { name: "CAMPUS", variant: "campus" },
      ],
      title: "New library extension opens with expanded study spaces",
      author: "Emma Johnson",
      date: "Feb 12, 2021",
    },
    {
      id: 5,
      image: generalTwo,
      categories: [
        { name: "EVENTS", variant: "events" },
        { name: "ALUMNI", variant: "alumni" },
      ],
      title: "Class of 2021 celebrates graduation with hybrid ceremony",
      author: "Michael Chen",
      date: "Jun 5, 2021",
    },
    {
      id: 6,
      image: general,
      categories: [
        { name: "RESEARCH", variant: "research" },
        { name: "SCIENCE", variant: "science" },
      ],
      title: "University secures $4.2M grant for climate research initiative",
      author: "Sarah Williams",
      date: "Apr 8, 2021",
    },
  ];

  const events = [
    {
      id: 1,
      day: "19",
      month: "APR",
      title: "Roadmap to the Sustainable Development Goals",
      timeRange: "2:30 PM - 3:30 PM",
      location: "Main Campus, Room 302",
    },
    {
      id: 2,
      day: "28",
      month: "DEC",
      title: "Research in Distance Education (RIDE) conference 2021",
      timeRange: "3:30 PM - 4:30 PM",
      location: "Virtual Event",
    },
    {
      id: 3,
      day: "20",
      month: "AUG",
      title: "The Role of Conflict in a Political Account of Common Good",
      timeRange: "10:30 AM - 11:30 AM",
      location: "Politics Building, Auditorium",
    },
    {
      id: 4,
      day: "05",
      month: "MAY",
      title: "Annual Faculty Research Symposium",
      timeRange: "9:00 AM - 5:00 PM",
      location: "Science Center, Multiple Rooms",
    },
    {
      id: 5,
      day: "12",
      month: "JUN",
      title: "International Student Welcome Week",
      timeRange: "All Day",
      location: "Student Union Building",
    },
    {
      id: 6,
      day: "03",
      month: "SEP",
      title: "Career Fair: Technology and Engineering Focus",
      timeRange: "11:00 AM - 4:00 PM",
      location: "Engineering Building, Main Hall",
    },
  ];

  // Display only 3 news items at a time
  const visibleNewsItems = newsItems.slice(
    activeNewsIndex,
    activeNewsIndex + 3
  );
  // If we don't have enough items, add from the beginning
  if (visibleNewsItems.length < 3) {
    visibleNewsItems.push(...newsItems.slice(0, 3 - visibleNewsItems.length));
  }

  // Display only 3 events at a time
  const visibleEvents = events.slice(activeEventIndex, activeEventIndex + 3);
  // If we don't have enough items, add from the beginning
  if (visibleEvents.length < 3) {
    visibleEvents.push(...events.slice(0, 3 - visibleEvents.length));
  }

  const handleNewsNavigation = (direction) => {
    setActiveNewsIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? newsItems.length - 1 : prev - 1;
      } else {
        return (prev + 1) % newsItems.length;
      }
    });
  };

  const handleEventNavigation = (direction) => {
    setActiveEventIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? events.length - 1 : prev - 1;
      } else {
        return (prev + 1) % events.length;
      }
    });
  };

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
  }, []);

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
                idx >= activeNewsIndex && idx < activeNewsIndex + 3
                  ? "bg-purple-600"
                  : "bg-gray-200 hover:bg-gray-300"
              )}
              onClick={() => setActiveNewsIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Events Section - Right side */}
      <div className="bg-gray-50 p-8 relative">
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

        <div ref={eventsContainerRef} className="space-y-4">
          {visibleEvents.map((event) => (
            <div
              key={event.id}
              className="group flex items-start p-4 rounded-xl bg-white border border-gray-100 transition-all duration-300 shadow-lg hover:border-purple-100 cursor-pointer"
            >
              <div className="flex-shrink-0 mr-5 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 text-center group-hover:from-purple-100 group-hover:to-pink-100 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {event.day}
                </div>
                <div className="text-gray-500 uppercase text-xs font-medium tracking-wider">
                  {event.month}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                  {event.title}
                </h3>
              </div>

              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-purple-500" />
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
                idx >= activeEventIndex && idx < activeEventIndex + 3
                  ? "bg-purple-600"
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
