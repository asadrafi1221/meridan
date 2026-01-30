/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  Sparkles,
  GripHorizontal,
} from "lucide-react";
import { HERO_REVIEWS } from "@/constant"; // Ensure this imports your data

// --- DEMO DATA ---
const REVIEWS = [
  ...HERO_REVIEWS,
  {
    text: "We've worked with five different agencies over the last decade. GMBOPTIMIZATION is the only one that actually moved the needle on revenue.",
    name: "David K.",
    role: "Founder, Apex Logistics",
  },
  {
    text: "The ROI was clear within the first 30 days. Their dashboard is transparent, and the team is always one step ahead of the algorithm.",
    name: "Elena R.",
    role: "CMO, BrightWave",
  },
];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1 === REVIEWS.length ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev - 1 < 0 ? REVIEWS.length - 1 : prev - 1));
    }
  };

  // --- ANIMATION VARIANTS ---
  const variants: any = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 10 : -10,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 10 : -10,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  // --- DRAG LOGIC ---
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Moving Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-6 backdrop-blur-sm"
          >
            <Sparkles size={12} />
            <span>Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Customers Say
            </span>
          </h2>
        </div>

        {/* --- CAROUSEL CONTAINER (Fixed Height) --- */}
        <div className="relative h-[500px] md:h-[450px] w-full max-w-4xl mx-auto flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              // DRAG PROPERTIES
              drag="x"
              dragConstraints={{ left: 0, right: 0 }} // Snap back logic
              dragElastic={1} // Feeling of resistance
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing"
            >
              {/* GLASS CARD */}
              <div className="w-full h-full relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center justify-center p-8 md:p-16">
                {/* Decorative Noise/Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                {/* Top Reflection */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />

                {/* --- CONTENT --- */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
                  {/* Glowing Icon */}
                  <div className="mb-8 relative group">
                    <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <Quote
                      size={48}
                      className="text-white/80 relative z-10 fill-white/5"
                    />
                  </div>

                  {/* Review Text */}
                  <p className="text-2xl md:text-3xl font-light text-gray-100 leading-snug mb-10 tracking-wide">
                    &quot;{REVIEWS[currentIndex].text}&quot;
                  </p>

                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                  {/* Author Details */}
                  <div className="flex flex-col items-center gap-2">
                    {/* Stars */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="#EAB308"
                          className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
                        />
                      ))}
                    </div>

                    <h4 className="text-white font-bold text-lg tracking-wide">
                      {REVIEWS[currentIndex].name}
                    </h4>
                    <p className="text-sm text-purple-300/80 font-medium uppercase tracking-widest">
                      {REVIEWS[currentIndex].role}
                    </p>
                  </div>
                </div>

                {/* Drag Hint (Mobile/Desktop Visual Cue) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/20 text-xs font-medium uppercase tracking-widest pointer-events-none">
                  <GripHorizontal size={16} />
                  <span>Drag to Navigate</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* SIDE BUTTONS (Desktop - Outside the card area) */}
          <button
            onClick={() => paginate(-1)}
            className="hidden md:flex absolute -left-16 z-20 w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="hidden md:flex absolute -right-16 z-20 w-12 h-12 rounded-full border border-white/10 bg-white/5 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* PROGRESS INDICATORS */}
        <div className="flex justify-center gap-3 mt-12">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const dir = i > currentIndex ? 1 : -1;
                paginate(dir); // Note: Simple jump logic for dots isn't perfect with `paginate` direction, but sufficient here
                setCurrentIndex(i); // Force set for dots
              }}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-white/10 hover:bg-white/20"
              style={{ width: i === currentIndex ? "40px" : "12px" }}
            >
              {i === currentIndex && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
