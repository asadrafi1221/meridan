/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { HERO_REVIEWS } from "@/constant"; // Ensure this imports your data correctly

// --- EXTEND DATA FOR DEMO VOLUME ---
const REVIEWS = [
  ...HERO_REVIEWS,
  {
    text: "We've worked with five different agencies over the last decade. GMBOPTIMIZATION is the only one that actually moved the needle on revenue.",
    name: "David K.",
    role: "Founder, Apex Logistics",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  },
  {
    text: "The ROI was clear within the first 30 days. Their dashboard is transparent, and the team is always one step ahead of the algorithm.",
    name: "Elena R.",
    role: "CMO, BrightWave",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100",
  },
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Logic to handle looping
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === REVIEWS.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? REVIEWS.length - 1 : prev - 1));
  };

  // Variants for the springy card animation
  const cardVariants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25, // The "Springy" bounce factor
        mass: 1,
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Feedback
              </span>
            </motion.h2>
            <p className="text-[#a1a1aa] text-lg font-light">
              We build partnerships, not just campaigns. See what happens when
              ambition meets execution.
            </p>
          </div>

          {/* CONTROLS (Desktop) */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* CAROUSEL AREA */}
        <div className="relative h-[450px] md:h-[400px] flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full max-w-[800px] bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden"
            >
              {/* Card Glow Background */}
              <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center h-full">
                {/* Left: Author Info */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:min-w-[180px] md:border-r border-white/10 md:pr-8 md:h-full md:justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-pink-500">
                      <img
                        src={REVIEWS[currentIndex].img}
                        alt={REVIEWS[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-2 border-black"
                      />
                    </div>
                  </div>

                  <div className="text-left md:text-left">
                    <h4 className="text-white font-bold text-lg md:text-xl leading-tight mb-1">
                      {REVIEWS[currentIndex].name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">
                      {REVIEWS[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#EAB308"
                        className="text-yellow-500"
                      />
                    ))}
                  </div>

                  <Quote
                    size={40}
                    className="text-white/10 mb-4 absolute top-8 right-8"
                  />

                  <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                    &quot;{REVIEWS[currentIndex].text}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white active:bg-white active:text-black transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white active:bg-white active:text-black transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "w-8 bg-purple-500"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
