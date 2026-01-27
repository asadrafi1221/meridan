/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowUpRight,
  Code,
  Globe,
  MapPin,
  Bot,
  Layout,
  Search,
  Database,
  Target,
  PenTool,
  RefreshCw,
  Rocket,
  Quote,
  Plus,
  Minus,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/Button";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { TiltCard } from "../components/TiltCard";
import { Cube } from "../components/Shapes3D";
import { BentoGrid } from "../components/BentoGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

export const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const ROTATING_WORDS = [
  "For Serious Businesses",
  "For Scalable Growth",
  "For Global Reach",
  "For Increased Leads",
  "For Brand Building",
  "For Product Awareness",
  "For Business Visibility",
];

// --- HERO REVIEWS ---
const HERO_REVIEWS = [
  {
    text: "GMBOPTIMIZATION completely transformed our online presence. Our comprehensive SEO strategy led to a 200% increase in leads within 3 months.",
    name: "Sarah Jenkins",
    role: "CEO, Hudson Retail",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    text: "The team is professional, responsive, and incredibly talented. Our new website is lightning fast and looks amazing.",
    name: "Michael Rodriguez",
    role: "Founder, TechStream",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    text: "Finally an agency that delivers on their promises. The ROI we've seen from the Google Business Profile optimization is unmatched.",
    name: "Emily Chen",
    role: "Director, Chen Dental",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

// --- FAQ DATA ---
const FAQ_DATA = [
  {
    question: "Which company is best for digital marketing?",
    answer:
      "GMB OPTIMIZATION is a trusted partner for all your digital marketing needs. We offer Content, SEO, PPC, SMM, Email marketing and many other services to help you assist and take the first step in your growth journey.",
  },
  {
    question:
      "What key factors should be considered when choosing a digital marketing company?",
    answer:
      "When choosing a digital marketing company, check its customer reviews, case studies, experience in the industry, and the services it offers. Also, communicate with them to see how transparent and client-focused they are.",
  },
  {
    question: "How much does it cost to hire an Internet marketing agency?",
    answer:
      "The cost of hiring internet marketing agencies and digital marketing companies varies depending on the project and the service you want to buy. Thus, to know the specific cost of a particular service, you can schedule a consultation call with the company.",
  },
];

// --- SUCCESS STORIES DATA ---
const SUCCESS_STORIES = [
  {
    id: 1,
    company: "Fine Paint Works",
    category: "House Painter • Wantirna South",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    quote:
      "We were invisible on Maps before. Now we're the #1 result for 'House Painter near me'. Our phone hasn't stopped ringing.",
    stats: [
      { label: "Local Ranking", value: "#1 Spot" },
      { label: "Monthly Calls", value: "300+" },
      { label: "Avg Review", value: "4.9/5" },
    ],
    highlight: "text-blue-400",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    id: 2,
    company: "Metro HVAC Services",
    category: "Home Services • Sydney",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    quote:
      "We were struggling to get calls in the off-season. GMBOPTIMIZATION completely revamped our Google Ads and now we're booked out 3 weeks in advance.",
    stats: [
      { label: "Lead Increase", value: "240%" },
      { label: "Lower CPC", value: "35%" },
      { label: "Map Ranking", value: "Top 3" },
    ],
    highlight: "text-orange-400",
    gradient: "from-orange-500/10 to-transparent",
  },
  {
    id: 3,
    company: "Elite Law Firm",
    category: "Legal • Brisbane",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    quote:
      "Our previous website was slow and outdated. The new site isn't just beautiful—it actually converts visitors into clients. Best investment we've made.",
    stats: [
      { label: "Load Speed", value: "< 1.5s" },
      { label: "Organic Growth", value: "150%" },
      { label: "New Inquiries", value: "50+" },
    ],
    highlight: "text-purple-400",
    gradient: "from-purple-500/10 to-transparent",
  },
];

const METHODOLOGY_STEPS = [
  {
    id: 1,
    title: "ANALYSIS",
    desc: "Deep dive into your market, competitors, and current digital footprint.",
    icon: Search,
  },
  {
    id: 2,
    title: "STRATEGY",
    desc: "Custom roadmap designed to hit your specific KPIs and revenue goals.",
    icon: Target,
  },
  {
    id: 3,
    title: "EXECUTION",
    desc: "Building high-converting assets and launching targeted campaigns.",
    icon: PenTool,
  },
  {
    id: 4,
    title: "OPTIMIZE",
    desc: "Continuous A/B testing and data refinement to lower costs and boost leads.",
    icon: RefreshCw,
  },
  {
    id: 5,
    title: "GROWTH",
    desc: "Scaling what works to dominate your local or national market.",
    icon: Rocket,
  },
];

const CAPABILITIES = [
  {
    id: "gbp",
    title: "Google Business Profile",
    description:
      'Dominate Competitors. Get Ranked in the "Local 3-Pack" and drive traffic directly from your Google Business Profile.',
    icon: MapPin,
    outcome: "Local Dominance",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "High performance web design tailored to your unique business model and optimized to meet user intent for industry leading conversion rates.",
    icon: Layout,
    outcome: "High Conversion",
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "We align your website with user intent to improve search visibility to eliminate high bounce rates and engage high-intent traffic.",
    icon: Search,
    outcome: "Max Visibility",
  },
  {
    id: "ai",
    title: "AI Receptionist",
    description:
      "Deploy intelligent voice and chat agents that handle inquiries, qualify leads, and book appointments 24/7 without a single missed call.",
    icon: Bot,
    outcome: "24/7 Automation",
  },
];

const fastFadeUp: any = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const snappyStagger: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  // Unused transform kept for compatibility if you add parallax later
  // const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero Review State
  const [heroReviewIndex, setHeroReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Refs for GSAP
  const methodologyRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Rotate Hero Words
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Rotate Hero Reviews (5 Seconds, Pausable)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setHeroReviewIndex((prev) => (prev + 1) % HERO_REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handlers for Review Controls
  const handleNextReview = () => {
    setHeroReviewIndex((prev) => (prev + 1) % HERO_REVIEWS.length);
  };

  const handlePrevReview = () => {
    setHeroReviewIndex(
      (prev) => (prev - 1 + HERO_REVIEWS.length) % HERO_REVIEWS.length,
    );
  };

  // GSAP: Methodology
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
        { scaleX: 0, transformOrigin: "left center" },
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
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.8",
      );
    },
    { scope: methodologyRef },
  );

  // GSAP: Success Stories
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

  // GSAP: FAQ
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
    <div className="overflow-x-hidden w-full bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Background Gradient / Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(60,60,80,0.15),rgba(255,255,255,0))]" />

      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] bg-[#4f46e5] rounded-full blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] bg-[#9333ea] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full z-10">
          <motion.div
            variants={snappyStagger}
            initial="hidden"
            animate="visible"
            className="text-left w-full order-1 lg:order-1"
          >
            <motion.div
              variants={fastFadeUp}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-300">
                Waitlist: October 2024
              </span>
            </motion.div>

            {/* HERO TYPOGRAPHY */}
            <motion.h1
              variants={fastFadeUp}
              className="font-display font-extrabold text-white tracking-tighter mb-8 leading-[1.1]"
            >
              {/* Line 1 */}
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90">
                DIGITAL MARKETING
              </span>

              {/* Line 2 */}
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90">
                AGENCY
              </span>

              {/* Line 3 (Animated) */}
              <div className="block mt-1 md:mt-2 min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text pb-2"
                    style={{ backgroundImage: BRAND_GRADIENT }}
                  >
                    {ROTATING_WORDS[index]}.
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            <motion.p
              variants={fastFadeUp}
              className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-lg mb-10 font-light leading-relaxed"
            >
              We engineer digital ecosystems for global brands.
              <span className="font-semibold text-white"> Elite execution</span>
              , delivered to the world.
            </motion.p>

            <motion.div
              variants={fastFadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  style={{ background: BRAND_GRADIENT }}
                  className="min-w-[180px] w-full sm:w-auto shadow-[0_0_20px_rgba(120,50,255,0.3)] text-white border-0 font-bold py-4 text-sm sm:text-base"
                >
                  Get a Proposal
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Scene - RESPONSIVE & INTERACTIVE */}
          <div className="relative w-full min-h-[400px] md:h-[500px] flex items-center justify-center perspective-2000 py-6 md:py-0 order-2 lg:order-2">
            {/* 3D Context Wrapper */}
            <motion.div className="relative w-full h-full flex items-center justify-center will-change-transform">
              {/* Background Cube */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40 md:opacity-100 pointer-events-none scale-75 md:scale-100">
                <Cube
                  size={300}
                  z={-100}
                  rotateSpeed={15}
                  color="rgba(255,255,255,0.05)"
                />
              </div>

              {/* The Main Card */}
              <div className="z-20 w-full max-w-[90%] md:max-w-[420px]">
                <div
                  className="w-full bg-[#0A0A0A]/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden relative group transition-all duration-300 hover:border-white/20"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Background Decor */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />

                  {/* Giant Quote Icon for texture */}
                  <Quote className="absolute top-6 right-6 text-white/5 w-24 h-24 rotate-12 pointer-events-none" />

                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full min-h-[350px]">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                        <span className="font-pixel text-xs md:text-sm text-white/70 tracking-widest uppercase">
                          Client Feed
                        </span>
                      </div>
                      {/* Star Rating */}
                      <div className="flex gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            fill="#EAB308"
                            className="text-yellow-500"
                          />
                        ))}
                        <span className="text-[10px] text-white/50 ml-1 font-mono pt-[1px]">
                          5.0
                        </span>
                      </div>
                    </div>

                    {/* Dynamic Content Area */}
                    <div className="flex-1 relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={heroReviewIndex}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="flex flex-col gap-6"
                        >
                          {/* The Quote */}
                          <p className="text-lg md:text-xl text-white font-light leading-relaxed italic">
                            {HERO_REVIEWS[heroReviewIndex].text}
                          </p>

                          {/* The Author */}
                          <div className="flex items-center gap-4 mt-2">
                            <div className="relative">
                              <img
                                src={HERO_REVIEWS[heroReviewIndex].img}
                                alt={HERO_REVIEWS[heroReviewIndex].name}
                                className="w-12 h-12 rounded-full border-2 border-white/10 object-cover"
                              />
                              {/* Online Badge */}
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#111] rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                            </div>

                            <div>
                              <div className="text-white font-medium text-base">
                                {HERO_REVIEWS[heroReviewIndex].name}
                              </div>
                              <div className="text-xs text-white/50 font-mono uppercase tracking-wide">
                                {HERO_REVIEWS[heroReviewIndex].role}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Footer / Controls */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      {/* Progress Dots */}
                      <div className="flex gap-1.5">
                        {HERO_REVIEWS.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setHeroReviewIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === heroReviewIndex
                                ? "w-6 bg-white"
                                : "w-1.5 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>

                      {/* Arrow Controls */}
                      <div className="flex gap-2">
                        <button
                          onClick={handlePrevReview}
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300"
                          aria-label="Previous Review"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={handleNextReview}
                          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300"
                          aria-label="Next Review"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-white/5 py-10 bg-[#050505] overflow-hidden relative">
        <div className="flex gap-16 md:gap-32 animate-scroll w-max opacity-50 hover:opacity-100 transition-opacity duration-500 will-change-transform">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                "Semrush",
                "Google Keyword Planner",
                "Wordpress",
                "Ahrefs",
                "Canva",
                "Google Analytics 4",
              ].map((name) => (
                <span
                  key={name}
                  className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-white/40"
                >
                  {name}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative overflow-hidden">
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

      {/* --- METHODOLOGY SECTION --- */}

      {/* Capabilities Section */}
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

      <section
        ref={methodologyRef}
        className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Header */}
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

          {/* Timeline Container */}
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

      {/* --- SUCCESS STORIES SECTION --- */}
      <section
        ref={storiesRef}
        className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="story-card opacity-0 relative group rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col min-h-[500px]"
              >
                {/* 1. IMAGE CONTAINER (Top Half) */}
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

                {/* 2. CONTENT (Bottom Half) */}
                <div className="relative z-20 p-8 flex flex-col flex-1 justify-between -mt-12">
                  <div>
                    {/* Header */}
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

                    {/* Quote */}
                    <blockquote className="text-base text-gray-300 font-light leading-relaxed mb-8">
                      {story.quote}
                    </blockquote>
                  </div>

                  {/* Stats Footer */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-[9px] text-[#555] font-bold uppercase tracking-widest mb-4">
                      Results from GMBOPTIMIZATION
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {story.stats.map((stat, i) => (
                        <div key={i}>
                          <div
                            className={`text-xl font-bold mb-1 ${story.highlight}`}
                          >
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
          {/* Header */}
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

          {/* Accordion */}
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
                        className={`transition-colors ${
                          openFaq === i ? "text-purple-400" : "text-gray-500"
                        }`}
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

      {/* Optimized CTA */}
      <section className="py-24 md:py-40 px-6 text-center relative overflow-hidden">
        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8 text-white tracking-tight">
            Ready to{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              scale?
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-[#666] mb-12 font-light">
            We operate on a waitlist basis to maintain quality.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              style={{ background: BRAND_GRADIENT }}
              className="px-12 py-6 text-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] text-white border-0 hover:opacity-90 hover:scale-105 transition-all duration-300 font-bold"
            >
              Book Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
