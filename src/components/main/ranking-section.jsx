"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Trophy,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import trophy from "@/assets/general/trophy.gif";

// Sample ranking data
const rankingsData = [
  {
    id: 1,
    name: "Team Alpha",
    score: 95,
    previousRank: 2,
    path: "/rankings/team-alpha",
  },
  {
    id: 2,
    name: "Golden Eagles",
    score: 92,
    previousRank: 1,
    path: "/rankings/golden-eagles",
  },
  {
    id: 3,
    name: "Victory Squad",
    score: 88,
    previousRank: 4,
    path: "/rankings/victory-squad",
  },
  {
    id: 4,
    name: "Champions United",
    score: 85,
    previousRank: 3,
    path: "/rankings/champions-united",
  },
  {
    id: 5,
    name: "Elite Performers",
    score: 82,
    previousRank: 6,
    path: "/rankings/elite-performers",
  },
  {
    id: 6,
    name: "Star Players",
    score: 78,
    previousRank: 5,
    path: "/rankings/star-players",
  },
  {
    id: 7,
    name: "Triumph Team",
    score: 75,
    previousRank: 8,
    path: "/rankings/triumph-team",
  },
  {
    id: 8,
    name: "Glory Seekers",
    score: 72,
    previousRank: 7,
    path: "/rankings/glory-seekers",
  },
  {
    id: 9,
    name: "Power Group",
    score: 68,
    previousRank: 9,
    path: "/rankings/power-group",
  },
  {
    id: 10,
    name: "Rising Stars",
    score: 65,
    previousRank: 10,
    path: "/rankings/rising-stars",
  },
];

export default function RankingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedRank, setHighlightedRank] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Calculate visible rankings (2 at a time)
  const visibleRankings = rankingsData.slice(currentIndex, currentIndex + 2);
  const hasNext = currentIndex + 2 < rankingsData.length;
  const hasPrev = currentIndex > 0;

  // Navigation functions
  const goNext = () => {
    if (hasNext) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const goPrev = () => {
    if (hasPrev) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  // Highlight a rank when clicked
  const highlightRank = (id) => {
    setHighlightedRank(id === highlightedRank ? null : id);
  };

  // Drag handlers for mobile
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStart;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (dragOffset > 100 && hasPrev) {
      goPrev();
    } else if (dragOffset < -100 && hasNext) {
      goNext();
    }
    setDragOffset(0);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Rankings Slider */}
        <div className="w-full lg:w-1/2 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#333] flex items-center gap-2">
              <Trophy className="h-6 w-6" /> Top Rankings
            </h2>
            <div className="text-sm text-[#666]">
              {currentIndex + 1}-
              {Math.min(currentIndex + 2, rankingsData.length)} of{" "}
              {rankingsData.length}
            </div>
          </div>

          {/* Slider container */}
          <div
            className="relative overflow-hidden bg-[#333]/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#333]/30 h-[280px]"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="transition-transform duration-300 ease-out flex flex-col gap-4"
              style={{ transform: `translateX(${dragOffset}px)` }}
            >
              <AnimatePresence mode="wait">
                {visibleRankings.map((rank, idx) => (
                  <Link key={rank.id} to={rank.path} className="block">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      onClick={() => highlightRank(rank.id)}
                      className={`relative flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        highlightedRank === rank.id
                          ? "bg-[#333]/90 border border-yellow-400 shadow-[0_0_15px_rgba(244,210,78,0.3)]"
                          : "bg-[#333]/70 hover:bg-[#333]/80 border border-[#333]/50"
                      }`}
                    >
                      <div
                        className={`absolute -left-2 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          rank.id <= 3
                            ? rank.id === 1
                              ? "bg-yellow-400 text-[#333]"
                              : rank.id === 2
                              ? "bg-[#f4d24e] text-[#333]"
                              : "bg-[#e38330] text-[#333]"
                            : "bg-[#333] text-[#4dd965]"
                        }`}
                      >
                        {rank.id}
                      </div>
                      <div className="ml-8 flex-1">
                        <div className="font-semibold text-lg text-white">
                          {rank.name}
                        </div>
                        <div className="text-sm text-white/80">
                          Score: {rank.score}
                        </div>
                      </div>
                      <div className="flex items-center">
                        {rank.previousRank > rank.id ? (
                          <div className="flex items-center text-[#4dd965]">
                            <ChevronUp className="h-4 w-4" />
                            <span className="text-xs">
                              {rank.previousRank - rank.id}
                            </span>
                          </div>
                        ) : rank.previousRank < rank.id ? (
                          <div className="flex items-center text-[#e38330]">
                            <ChevronDown className="h-4 w-4" />
                            <span className="text-xs">
                              {rank.id - rank.previousRank}
                            </span>
                          </div>
                        ) : (
                          <div className="text-white/60 text-xs">-</div>
                        )}
                      </div>
                      {rank.id <= 3 && (
                        <div className="absolute -top-2 -right-2">
                          <Star
                            className={`h-5 w-5 ${
                              rank.id === 1
                                ? "text-yellow-400 fill-yellow-400"
                                : rank.id === 2
                                ? "text-[#f4d24e] fill-[#f4d24e]"
                                : "text-[#e38330] fill-[#e38330]"
                            }`}
                          />
                        </div>
                      )}
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
              <button
                onClick={goPrev}
                disabled={!hasPrev}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  hasPrev
                    ? "bg-[#333] text-[#4dd965] hover:bg-[#f4d24e] hover:text-[#333]"
                    : "bg-[#333]/50 text-gray-400 cursor-not-allowed"
                } transition-colors duration-200`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Pagination indicators */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.ceil(rankingsData.length / 2) }).map(
                  (_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentIndex / 2 ? "bg-[#333]" : "bg-[#333]/40"
                      }`}
                    />
                  )
                )}
              </div>

              <button
                onClick={goNext}
                disabled={!hasNext}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  hasNext
                    ? "bg-[#333] text-[#e38330] hover:bg-[#f4d24e] hover:text-[#333]"
                    : "bg-[#333]/50 text-gray-400 cursor-not-allowed"
                } transition-colors duration-200`}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slider progress bar */}
          <div className="mt-4 h-1 bg-[#333]/20 rounded-full overflow-hidden">
            <div
              className="h-full"
              style={{
                width: `${
                  (currentIndex / 2 + 1) *
                  (100 / Math.ceil(rankingsData.length / 2))
                }%`,
              }}
            />
          </div>
        </div>

        {/* Right side - Trophy */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src={trophy}
                alt="Trophy"
                className="w-full h-2/3 object-contain"
              />
            </div>

            {/* Highlight for selected rank */}
            {highlightedRank !== null && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                <Link
                  to={
                    rankingsData.find((r) => r.id === highlightedRank)?.path ||
                    "#"
                  }
                  className="hover:underline"
                >
                  Rank #{highlightedRank}:{" "}
                  {rankingsData.find((r) => r.id === highlightedRank)?.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
