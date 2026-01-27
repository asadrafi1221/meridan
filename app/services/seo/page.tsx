/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Search,
  BarChart,
  Globe,
  Anchor,
  Check,
  ChevronRight,
  TrendingDown,
  AlertOctagon,
  Ghost,
  Coins,
  Zap,
  Target,
  FileText,
  Share2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { TiltCard } from "@/components/TiltCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// --- DATA ---

const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const PAIN_POINTS = [
  {
    title: "Invisible in Search",
    desc: "Great products die in obscurity. If you aren't on Page 1, you don't exist.",
    icon: Ghost,
    color: "text-gray-400",
  },
  {
    title: "Wasted Ad Spend",
    desc: "Renting traffic is expensive. Stop burning cash on clicks that don't convert.",
    icon: Coins,
    color: "text-red-400",
  },
  {
    title: "Wrong Traffic",
    desc: "high bounce rates indicate you're attracting looky-loos, not buyers.",
    icon: Target,
    color: "text-orange-400",
  },
  {
    title: "Traffic Plateaus",
    desc: "Hit a growth ceiling? Technical debt is likely throttling your indexing.",
    icon: TrendingDown,
    color: "text-yellow-400",
  },
];

const PROCESS_STEPS = [
  { title: "Audit", desc: "Technical Health Check" },
  { title: "Strategy", desc: "Keyword & Intent Mapping" },
  { title: "Optimization", desc: "On-Page & Content" },
  { title: "Authority", desc: "Link Acquisition" },
  { title: "Growth", desc: "Monitoring & Scaling" },
];

const SERVICES_DATA = [
  {
    id: "technical-seo",
    category: "01. FOUNDATION",
    title: "Technical SEO Engineering",
    description:
      "Google is a robot. We speak its language. We optimize your site's architecture so search engines can crawl, index, and rank your content without friction.",
    icon: Zap,
    outcome: "100% Indexability",
    stack: ["Screaming Frog", "GSC", "Lighthouse"],
    checklist: [
      "Core Web Vitals Optimization",
      "Schema Markup Implementation",
      "Crawl Budget Management",
      "Canonicalization Strategy",
    ],
    imageGradient: "from-blue-600/20 to-indigo-900/40",
  },
  {
    id: "content-strategy",
    category: "02. RELEVANCE",
    title: "Content & Editorial Strategy",
    description:
      "We don't just write 'blog posts'. We build topical authority networks that answer user intent and position your brand as the industry leader.",
    icon: FileText,
    outcome: "Topical Authority",
    stack: ["SurferSEO", "Ahrefs", "MarketMuse"],
    checklist: [
      "Intent-Based Keyphrase Mapping",
      "Content Cluster Creation",
      "Competitor Gap Analysis",
      "Existing Content Optimization",
    ],
    imageGradient: "from-emerald-600/20 to-teal-900/40",
  },
  {
    id: "off-page",
    category: "03. TRUST",
    title: "Authority & Link Building",
    description:
      "Backlinks are the currency of the web. We execute high-level digital PR and outreach campaigns to earn trust signals from the most authoritative sites in your niche.",
    icon: Anchor,
    outcome: "Higher Domain Rating",
    stack: ["Pitchbox", "Hunter.io", "HARO"],
    checklist: [
      "High-DR Guest Placement",
      "Digital PR Campaigns",
      "Unlinked Mention Reclamation",
      "Toxic Backlink Disavowal",
    ],
    imageGradient: "from-purple-600/20 to-violet-900/40",
  },
  {
    id: "analytics",
    category: "04. INTELLIGENCE",
    title: "Data & Revenue Attribution",
    description:
      "Stop guessing. We track every click, scroll, and conversion to prove ROI and uncover hidden opportunities for aggressive growth.",
    icon: BarChart,
    outcome: "Clear ROI Tracking",
    stack: ["GA4", "Looker Studio", "Semrush"],
    checklist: [
      "Custom Conversion Event Setup",
      "Looker Studio Dashboards",
      "Rank Tracking Automation",
      "User Behavior Analysis",
    ],
    imageGradient: "from-pink-600/20 to-rose-900/40",
  },
];

export default function SEOPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // 1. Hero Animations
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
      );

      // 2. Pain Points (Alert Cards)
      ScrollTrigger.batch(".alert-card", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.1,
              duration: 0.6,
              ease: "back.out(1.5)",
            },
          ),
      });

      // 3. Process Steps (Connector Line)
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".process-section", start: "top 75%" },
        },
      );

      gsap.fromTo(
        ".process-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: { trigger: ".process-section", start: "top 75%" },
        },
      );

      // 4. Service Spec Sheets
      const services = gsap.utils.toArray(".service-row");
      services.forEach((row: any) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse",
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
      className="bg-[#050505] text-white selection:bg-purple-500/30 w-full overflow-hidden min-h-screen font-sans"
    >
      {/* Cinematic Background */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,50,255,0.08),rgba(255,255,255,0))]" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto z-10">
          <div className="hero-element inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">
              Search Intelligence
            </span>
          </div>

          <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter leading-[0.95]">
            Dominate <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Organic Search.
            </span>
          </h1>

          <p className="hero-element text-lg md:text-2xl text-[#888] max-w-2xl mx-auto font-light leading-relaxed">
            {`Stop renting attention. We help you own the search results with data-driven SEO strategies that compound over time.`}
          </p>
        </div>
      </section>

      {/* --- PROBLEM / ALERT SECTION --- */}
      <section className="py-24 px-6 relative bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Visibility <span className="text-red-500">Critical</span>
              </h2>
              <p className="text-gray-500 max-w-md">
                {`If they can't find you, they can't buy from you.`}
              </p>
            </div>
            <div className="h-px bg-white/10 flex-1 ml-8 mb-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_POINTS.map((pain, i) => (
              <div
                key={i}
                className="alert-card group relative p-6 rounded-xl bg-[#0F0F0F] border border-white/5 hover:border-red-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <pain.icon className={`w-8 h-8 ${pain.color}`} />
                    <span className="text-[10px] font-mono text-gray-600">
                      ERR_0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pain.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-white/5 pl-3">
                    {pain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS PIPELINE --- */}
      <section className="process-section py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">
              {` // Optimization Cycle`}
            </span>
          </div>

          <div className="relative hidden md:flex justify-between items-center max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="process-line absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 origin-left" />

            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="process-node relative z-10 flex flex-col items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-colors shadow-[0_0_20px_rgba(0,0,0,1)]">
                  <div className="w-2 h-2 rounded-full bg-white group-hover:bg-purple-400 transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Process */}
          <div className="md:hidden space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5"
              >
                <div className="text-purple-400 font-mono text-xs">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPEC SHEET SERVICES --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 space-y-40">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className={`service-row flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text / Spec Sheet */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-purple-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                  {service.category}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-[1.1]">
                {service.title}
              </h2>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light border-l border-white/10 pl-6">
                {service.description}
              </p>

              {/* The "Spec Sheet" Container */}
              <div className="bg-[#111]/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="bg-white/5 px-6 py-3 border-b border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    Protocol_Specs
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                    <div className="w-2 h-2 rounded-full bg-green-500/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <span className="text-xs font-bold text-white mb-3 block">
                      Tools & Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.checklist.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-4 h-4 rounded bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover/item:border-purple-500/50 transition-colors">
                          <Check size={10} className="text-purple-400" />
                        </div>
                        <span className="text-sm text-gray-300 font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Outcome */}
                <div className="bg-purple-900/10 px-6 py-4 border-t border-purple-500/10 flex justify-between items-center">
                  <span className="text-xs text-purple-200">
                    TARGET OUTCOME
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide">
                    {service.outcome}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-white font-semibold border-b border-white/20 pb-1 hover:border-white transition-all"
                >
                  Start Ranking
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Visual (Tilt Card) */}
            <div className="flex-1 min-h-[400px] lg:min-h-[600px]">
              <TiltCard intensity={15} className="h-full">
                <div className="w-full h-full rounded-2xl border border-white/10 bg-[#0c0c0c] relative overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.imageGradient} opacity-20`}
                  />

                  {/* Abstract Grid Background */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Center Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform duration-700">
                      <service.icon
                        size={64}
                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      />
                    </div>
                  </div>

                  {/* Corner Details */}
                  <div className="absolute top-6 right-6">
                    <Zap className="text-yellow-400 w-5 h-5 opacity-50" />
                  </div>
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] text-gray-600">
                    ID: {service.id.toUpperCase()}_SEO_01
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        ))}
      </div>

      {/* --- CTA --- */}
      <section className="relative py-40 px-6 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
            READY TO <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              BE SEEN?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Stop losing traffic to competitors. Claim your spot at the top.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              style={{ background: BRAND_GRADIENT }}
              className="px-12 py-6 text-lg shadow-[0_0_50px_rgba(168,85,247,0.4)] text-white border-0 hover:scale-105 transition-all duration-300 font-bold"
            >
              Get Your SEO Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
