/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TrendingUp, ArrowUpRight, Quote, Plus, Play } from "lucide-react";
import { Button } from "../components/Button";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { TiltCard } from "../components/TiltCard";
import { BentoGrid } from "../components/BentoGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BRAND_GRADIENT,
  CAPABILITIES,
  FAQ_DATA,
  METHODOLOGY_STEPS,
  ROTATING_WORDS,
  SUCCESS_STORIES,
  WHO_WE_SERVE_DATA,
} from "@/constant";
import { Reviews } from "@/components/Reviews";
import CTA from "@/components/CTA";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation Variants
const fastFadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const snappyStagger: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const TRUSTED_BRANDS = [
  "Semrush",
  "Shopify",
  "Google",
  "Meta",
  "HubSpot",
  "Wordpress",
  "Ahrefs",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Refs for GSAP
  const methodologyRef = useRef<HTMLDivElement>(null);
  const serveRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Rotate Hero Words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // --- GSAP ANIMATIONS ---

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: methodologyRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(
        ".method-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power3.inOut" },
      );
      tl.fromTo(
        ".method-circle",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=1.0",
      );
      tl.fromTo(
        ".method-content",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" },
        "-=0.8",
      );
    },
    { scope: methodologyRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".serve-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serveRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: serveRef },
  );

  useGSAP(
    () => {
      ScrollTrigger.refresh();
      gsap.fromTo(
        ".story-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storiesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: storiesRef },
  );

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: faqRef },
  );

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="overflow-x-hidden w-full bg-[#030303] text-white selection:bg-purple-500/30">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        {/* Ambient Spotlights */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <motion.div
            variants={snappyStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Announcement Pill */}
            <motion.div variants={fastFadeUp} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] md:text-[11px] font-medium tracking-wide uppercase text-gray-300">
                  Accepting New Clients for 2026
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display font-medium tracking-tight text-white mb-6 relative z-20">
              <motion.span
                variants={fastFadeUp}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white/90"
              >
                Digital Marketing
              </motion.span>
              <motion.span
                variants={fastFadeUp}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white/90"
              >
                Engineered for
              </motion.span>

              {/* Rotating Word - Fixed for responsiveness */}
              <div className="h-28 sm:h-[17vh] relative mt-2 md:mt-4 overflow-hidden w-full flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={ROTATING_WORDS[index]}
                    initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex justify-center items-center"
                  >
                    <span
                      className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text pb-2 px-1 text-center"
                      style={{ backgroundImage: BRAND_GRADIENT }}
                    >
                      {ROTATING_WORDS[index]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            {/* Subtext */}
            <motion.p
              variants={fastFadeUp}
              className="text-base sm:text-lg text-[#888] max-w-[90%] md:max-w-xl mx-auto mb-10 font-light leading-relaxed px-2"
            >
              We don&apos;t just run ads. We build{" "}
              <span className="text-white font-medium">
                dominant digital ecosystems
              </span>{" "}
              that scale revenue and automate growth for serious brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fastFadeUp}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  style={{ background: BRAND_GRADIENT }}
                  className="w-full sm:w-auto min-w-[160px] shadow-[0_0_30px_rgba(120,50,255,0.25)] text-white border-0 font-semibold h-12 rounded-xl text-sm transition-transform hover:scale-105"
                >
                  Get Proposal
                </Button>
              </Link>

              <Link href="/work" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[160px] h-12 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all group backdrop-blur-sm">
                  <Play
                    size={14}
                    className="fill-white text-white group-hover:scale-110 transition-transform"
                  />
                  <span>View Our Work</span>
                </button>
              </Link>
            </motion.div>

            {/* Marquee Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-20 w-full max-w-5xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

              <div className="flex flex-col items-center gap-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                  Trusted By Market Leaders
                </p>

                {/* INFINITE MARQUEE */}
                <div
                  className="w-full relative overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  }}
                >
                  <div className="flex items-center gap-16 md:gap-24 animate-marquee w-max py-2">
                    {/* Double the list to create seamless loop */}
                    {[
                      ...TRUSTED_BRANDS,
                      ...TRUSTED_BRANDS,
                      ...TRUSTED_BRANDS,
                    ].map((brand, i) => (
                      <span
                        key={`${brand}-${i}`}
                        className="text-2xl md:text-3xl font-display font-bold text-white/30 whitespace-nowrap"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
            >
              Why
              <span
                className="text-transparent text-xl  lg:text-2xl 2xl:text-3xl 2xl:pl-3 relative bg-clip-text"
                style={{ backgroundImage: BRAND_GRADIENT }}
              >
                GBP OPTIMIZATION?
              </span>
            </motion.h2>
            <p className="text-lg md:text-xl text-[#a1a1aa] font-light">
              Everything starts with a search. GBP OPTIMIZATION ensures you are
              always visible at the top to drive traffic directly to your
              business.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <BentoGrid />
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative mx-2 md:mx-6">
        <div className="absolute inset-0 bg-[#080808] rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl -z-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white">
              Services
            </h2>
            <Link
              href="/services"
              className="group flex items-center gap-2 text-[#888] hover:text-white transition-colors mt-8 md:mt-0"
            >
              <span className="border-b border-[#333] group-hover:border-white transition-colors pb-1">
                View all services
              </span>
              <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <TiltCard intensity={10} className="h-full">
                  <div className="group h-full p-8 rounded-2xl bg-[#0F0F0F] hover:bg-[#141414] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-colors duration-500" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-8 border border-white/5">
                        <service.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 font-display text-gray-100">
                        {service.title}
                      </h3>
                      <p className="text-[#888] text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-400 mt-8 relative z-10">
                      <TrendingUp size={14} />
                      <span>{service.outcome}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section
        ref={methodologyRef}
        className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-20">
            <h3 className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase mb-3">
              How We Work
            </h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              OUR METHODOLOGY
              <span className="block w-16 h-1.5 bg-pink-600 mx-auto mt-4 rounded-full" />
            </h2>
            <p className="text-[#a1a1aa] max-w-2xl mx-auto text-lg font-light">
              A systematic approach designed to take your business from where it
              is now to where you want it to be.
            </p>
          </div>

          <div className="relative mt-16 lg:mt-24">
            <div className="absolute top-[3.5rem] left-0 w-full h-[2px] bg-white/10 hidden lg:block rounded-full">
              <div
                className="method-line h-full w-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {METHODOLOGY_STEPS.map((step, i) => (
                <div key={step.id} className="flex flex-col items-center group">
                  <div className="method-circle relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 z-10 relative">
                      <step.icon
                        size={32}
                        className="text-white group-hover:text-pink-400 transition-colors duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-[#050505] rounded-full -z-10 scale-110" />
                  </div>
                  <div className="method-content text-center px-2">
                    <span className="block text-sm font-bold text-pink-500 mb-2">
                      {i + 1}. {step.title}
                    </span>
                    <p className="text-xs text-[#888] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE SERVE SECTION --- */}
      <section
        ref={serveRef}
        className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4">
                Who We Serve
              </h2>
              <p className="text-[#a1a1aa] text-lg font-light max-w-xl">
                Tailored strategies for every stage of growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SERVE_DATA.map((item) => (
              <div
                key={item.id}
                className="serve-card opacity-0 group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-[#111] overflow-hidden min-h-[280px] flex flex-col justify-between"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${item.color}`}
                  >
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-white/5 mt-6 relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Reviews />
      </section>

      {/* --- SUCCESS STORIES SECTION --- */}
      <section
        ref={storiesRef}
        className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-[#a1a1aa] text-lg font-light max-w-xl">
                Real results from businesses that switched to our data-driven
                growth ecosystem.
              </p>
            </div>
            <Link
              href="/work"
              className="text-white border-b border-white pb-1 hover:text-gray-300 transition-colors"
            >
              View all case studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="story-card opacity-0 relative group rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col min-h-[500px]"
              >
                <div className="relative h-[240px] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      background:
                        "linear-gradient(to top, #0A0A0A 5%, transparent 100%)",
                    }}
                  />
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.5] group-hover:grayscale-0"
                  />
                </div>
                <div className="relative z-20 p-8 flex flex-col flex-1 justify-between -mt-12">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-[#0A0A0A]/80 backdrop-blur-md p-3 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {story.company}
                        </h3>
                        <p className="text-xs text-[#888] uppercase tracking-wider font-semibold">
                          {story.category}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/5">
                        <Quote size={16} className="text-white" />
                      </div>
                    </div>
                    <blockquote className="text-base text-gray-300 font-light leading-relaxed mb-8">
                      {story.quote}
                    </blockquote>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-[9px] text-[#555] font-bold uppercase tracking-widest mb-4">
                      Results from GMBOPTIMIZATION
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {story.stats.map((stat, i) => (
                        <div key={i}>
                          <div className={`text-xl font-bold mb-1 `}>
                            {stat.value}
                          </div>
                          <div className="text-[9px] text-gray-500 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        ref={faqRef}
        className="py-24 md:py-32 px-6 bg-[#050505] relative border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Frequently Asked{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: BRAND_GRADIENT }}
              >
                Questions
              </span>
            </h2>
            <p className="text-gray-400">
              Answers to common questions about our services and process.
            </p>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                className="faq-item opacity-0 border-b border-white/10 last:border-0"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full py-6 flex items-center justify-between group text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors pr-8">
                    {item.question}
                  </span>
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: openFaq === i ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus
                        size={20}
                        className={`transition-colors ${openFaq === i ? "text-purple-400" : "text-gray-500"}`}
                      />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <CTA />

      {/* GLOBAL STYLES FOR MARQUEE */}
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
