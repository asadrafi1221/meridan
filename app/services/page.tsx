/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Layout,
  Search,
  Bot,
  Check,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  BarChart3,
  Globe,
} from "lucide-react";
import { Button } from "@/components/Button";
import { TiltCard } from "@/components/TiltCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// --- CONSTANTS & DATA ---

const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const PAIN_POINTS = [
  {
    title: "Competitors Outranking You",
    desc: "They appear in the Google Map Pack while you stay hidden on page 2.",
    icon: TrendingUp,
  },
  {
    title: "Missed Calls & Leads",
    desc: "Outdated profiles make it hard for customers to find your number or hours.",
    icon: AlertCircle,
  },
  {
    title: "Lack of Trust",
    desc: "Google rewards verified profiles. Unoptimized listings limit visibility.",
    icon: Globe,
  },
  {
    title: "Damaged Credibility",
    desc: "Incorrect addresses or missing details weaken your brand reputation.",
    icon: BarChart3,
  },
];

const PROCESS_STEPS = [
  "Meet Your Marketing Expert",
  "Build a Custom Plan",
  "Custom Strategy Execution",
  "Activate Your Hours",
  "Focus on Results",
];

const SERVICES_DATA = [
  {
    id: "gbp",
    category: "01. LOCAL DOMINANCE",
    title: "Google Business Profile Optimization",
    description:
      "Outrank competitors and maximize local visibility. We optimize your profile to ensure you appear in the 'Local 3-Pack' when customers search nearby.",
    icon: MapPin,
    outcome: "300% More Footfall",
    stack: ["Google Maps", "GMB API", "Review Mgmt", "Local SEO"],
    checklist: [
      "Profile Setup & Verification",
      "Keyword & Category Optimization",
      "Posts, Photos & Review Management",
      "Insights & Performance Tracking",
    ],
    imageGradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    id: "web",
    category: "02. DIGITAL FOUNDATION",
    title: "High-Performance Web Development",
    description:
      "We don't just build websites; we build conversion engines tailored to your unique business model and optimized to meet user intent.",
    icon: Layout,
    outcome: "Industry Leading Conversion",
    stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
    checklist: [
      "Headless CMS Setup",
      "Frontend Performance Optimization",
      "SEO Technical Audit",
      "PWA Capability",
    ],
    imageGradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    id: "seo",
    category: "03. ORGANIC GROWTH",
    title: "Strategic SEO & Content",
    description:
      "Align your website with user intent. We eliminate high bounce rates and engage high-intent traffic for maximum conversion.",
    icon: Search,
    outcome: "Max Search Visibility",
    stack: ["Ahrefs", "Semrush", "GSC", "SurferSEO"],
    checklist: [
      "Keyword Strategy & Mapping",
      "Content Calendar Creation",
      "Backlink Outreach",
      "Technical SEO Fixes",
    ],
    imageGradient: "from-orange-600/20 to-red-600/20",
  },
  {
    id: "ai",
    category: "04. AUTOMATION",
    title: "AI Receptionist & Agents",
    description:
      "Never miss a lead again. Deploy intelligent voice and chat agents that handle inquiries, qualify leads, and book appointments 24/7.",
    icon: Bot,
    outcome: "24/7 Booking Automation",
    stack: ["OpenAI", "Twilio", "Python", "Vapi"],
    checklist: [
      "Custom Voice Training",
      "CRM Integration",
      "24/7 Lead Qualification",
      "Automated Appointment Booking",
    ],
    imageGradient: "from-pink-600/20 to-rose-600/20",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Refresh ScrollTrigger to ensure positions are correct after render
      ScrollTrigger.refresh();

      // 1. Hero Text Reveal - Robust Timeline
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-text",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
        },
      ).fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5",
      );

      // 2. Pain Points - Batch Animation for Reliability
      // Use batch to ensure they animate even if scrolled quickly
      ScrollTrigger.batch(".pain-card", {
        start: "top 90%",
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              overwrite: true,
            },
          );
        },
        once: true, // Run once to prevent "stuck" issues on reverse scroll
      });

      // 3. Process Steps - Sequential Fade In
      gsap.fromTo(
        ".process-step",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 80%",
            toggleActions: "play none none none", // Play once and stay
          },
        },
      );

      // 4. Large Service Cards - Independent Triggers
      const serviceCards = gsap.utils.toArray(".service-card");
      serviceCards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Triggers slightly earlier
              end: "bottom 20%",
              toggleActions: "play none none reverse", // Allows re-playing but ensures it settles
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] text-white selection:bg-purple-500/30 w-full overflow-hidden min-h-screen"
    >
      {/* Background Noise/Grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,50,255,0.1),rgba(255,255,255,0))]" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[70vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto z-10">
          <div className="hero-text inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md opacity-0">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-300">
              Agency Capabilities
            </span>
          </div>

          <h1 className="hero-text opacity-0 text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter leading-[1.1]">
            Make Your Brand <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Stand Out.
            </span>
          </h1>

          <p className="hero-sub opacity-0 text-lg md:text-2xl text-[#a1a1aa] max-w-2xl mx-auto font-light leading-relaxed">
            Maximize your local reach with Google Business Profile optimization.
            We turn searches into customers.
          </p>
        </div>
      </section>

      {/* --- PAIN POINTS SECTION --- */}
      <section className="pain-section py-20 px-6 relative border-y border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
              {`  Why Aren't Customers`} <br /> Finding You?
            </h2>
            <p className="text-gray-400">
              Without optimization, you are invisible. Here is the risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_POINTS.map((pain, i) => (
              <div
                key={i}
                className="pain-card opacity-0 p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-red-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  <pain.icon size={24} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">
                  {pain.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="process-section py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">
              The Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 text-white">
              Here’s how it works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="process-step opacity-0 relative p-6 rounded-2xl bg-[#111] border border-white/5 hover:bg-[#151515] transition-colors"
              >
                <div className="text-4xl font-display font-bold text-white/10 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-200">{step}</h3>
                {i !== PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-700">
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAIN SERVICES LIST --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 space-y-32">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className={`service-card opacity-0 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  {service.category}
                </span>
                <div className="h-px w-12 bg-gray-800" />
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
                {service.title}
              </h2>

              <p className="text-lg text-[#a1a1aa] mb-8 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-[#151515] text-gray-400 text-xs font-bold rounded-md border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Checklist Box */}
              <div className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.imageGradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <span className="block text-xs font-bold uppercase tracking-widest text-white mb-6 relative z-10">
                  What&apos;s Included
                </span>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 relative z-10">
                  {service.checklist.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 text-sm"
                    >
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div>
                    <span className="block text-[10px] uppercase text-gray-500 font-bold tracking-wider mb-1">
                      Expected Outcome
                    </span>
                    <span className="text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                      {service.outcome}
                    </span>
                  </div>
                  <Link href="/contact">
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                      <ChevronRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Visual Content (Tilt Card) */}
            <div className="flex-1 w-full min-h-[400px] lg:h-[600px]">
              <TiltCard intensity={15} className="h-full">
                <div className="relative group w-full h-full rounded-[2rem] overflow-visible">
                  {/* Decorative Back Layer */}
                  <div className="absolute inset-0 bg-[#1a1a1a] translate-x-4 translate-y-4 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 border border-white/5"></div>

                  {/* Main Card */}
                  <div className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] relative flex items-center justify-center">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.imageGradient} opacity-20`}
                    />

                    {/* Abstract Icon/Graphic Center */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700">
                      <div className="w-32 h-32 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl">
                        <service.icon size={48} className="text-white" />
                      </div>
                    </div>

                    {/* Grid Overlay */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Floating Label */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span>Active Service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        ))}
      </div>

      {/* --- CTA SECTION --- */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8 text-white tracking-tight">
            Stop guessing. <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Start growing.
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-[#666] mb-12 font-light">
            {`  Your competition isn't waiting. Neither should you.`}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              style={{ background: BRAND_GRADIENT }}
              className="px-12 py-6 text-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] text-white border-0 hover:scale-105 transition-all duration-300 font-bold"
            >
              Discuss Your Needs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
