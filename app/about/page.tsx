"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  MapPin,
  Zap,
  Shield,
  Globe,
  Terminal,
  Cpu,
  Search,
  ArrowUpRight,
  Database,
  Lock,
  LayoutTemplate,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import CTA from "@/components/CTA";

// --- CONSTANTS ---
export const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const TECH_STACK = [
  "Google Maps API",
  "Python Selenium",
  "BrightLocal",
  "PlaceID Extraction",
  "Schema.org JSON-LD",
  "Geotagging Matrix",
  "Review Sentiment AI",
];

// --- COMPONENTS ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
    {children}
  </div>
);

const GlassCard = ({
  children,
  className = "",
  gradient = false,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#080808] ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      {/* Brand Gradient Border Glow (Optional) */}
      {gradient && (
        <div
          className="absolute inset-x-0 top-0 h-px opacity-50"
          style={{ background: BRAND_GRADIENT }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// --- ANIMATED WIDGETS ---

const SimulatedTerminal = () => {
  const [lines, setLines] = useState([
    "> Initializing GMB Protocol...",
    "> Scanning local proximity...",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const newLines = [...prev];
        if (newLines.length > 5) newLines.shift();
        const commands = [
          "> Optimizing CID...",
          "> Injecting Schema...",
          "> verifying_entity.json",
          "> Rank_Tracking: #1",
          "> Citations: 100% indexed",
        ];
        newLines.push(commands[Math.floor(Math.random() * commands.length)]);
        return newLines;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] md:text-xs text-neutral-400 space-y-1 p-4">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="text-purple-500">$</span>
          <span>{line}</span>
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="w-2 h-4 bg-purple-500 inline-block align-middle ml-1"
      />
    </div>
  );
};

// --- MAIN PAGE ---

const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="bg-[#020202] min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden font-sans"
    >
      {/* --- AMBIENT LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Grain */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        {/* Top Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 border-b border-white/5 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 text-center max-w-5xl"
        >
          <Badge>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              System Online v3.0
            </span>
          </Badge>

          <h1 className="mt-8 text-6xl md:text-9xl font-display font-medium tracking-tighter leading-[0.9] text-white">
            Engineering <br />
            <span
              style={{ backgroundImage: BRAND_GRADIENT }}
              className="bg-clip-text text-transparent"
            >
              Visibility.
            </span>
          </h1>

          <p className="mt-8 text-lg px-8 md:px-0 md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            {`  Stop treating Google Maps like social media. It's a`}{" "}
            <span className="text-white">database</span>. We are the database
            architects who force the algorithm to rank you #1.
          </p>

          <div className="mt-12 hidden lg:flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Tech Stack Marquee */}
            <div className="flex gap-6 text-xs font-mono text-neutral-600 uppercase tracking-widest">
              {TECH_STACK.slice(0, 4).map((tech, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Cpu size={12} /> {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Radar Effect at Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-purple-900/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* --- BENTO GRID SYSTEM --- */}
      <section className="py-32 px-4 md:px-6 max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">
              The{" "}
              <span
                style={{ backgroundImage: BRAND_GRADIENT }}
                className="bg-clip-text text-transparent"
              >
                Optimization Matrix
              </span>
            </h2>
            <p className="text-neutral-500 max-w-md text-lg">
              Our proprietary infrastructure designed to signal maximum
              authority to Google.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 auto-rows-[280px] gap-6">
          {/* CARD 1: HYPER LOCAL (Map) */}
          <GlassCard className="md:col-span-2 lg:col-span-4 lg:row-span-2 bg-gradient-to-b from-white/[0.02] to-transparent">
            <div className="p-8 h-full flex flex-col justify-between relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-purple-400">
                  <MapPin size={20} />
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">
                  Geo-Grid Dominance
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {`   We don't just target a city. We target specific coordinates,
                  creating a net of relevance across your entire service area.`}
                </p>
              </div>

              {/* Abstract Radar Visual */}
              <div className="relative h-32 w-full mt-4 border-t border-white/10 pt-4 flex items-center justify-center overflow-hidden">
                <div className="absolute w-[200%] h-[200%] border border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[150%] h-[150%] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white]" />
                {/* Scanning Line */}
                <div className="absolute top-1/2 left-1/2 w-[50%] h-px bg-gradient-to-r from-purple-500 to-transparent origin-left animate-[spin_3s_linear_infinite]" />
              </div>
            </div>
          </GlassCard>

          {/* CARD 2: CODE (Terminal) */}
          <GlassCard className="md:col-span-2 lg:col-span-4 bg-black">
            <div className="flex flex-col h-full">
              <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500">
                  optimization_engine.py
                </span>
                <Terminal size={12} className="text-neutral-600" />
              </div>
              <div className="flex-1 bg-black/50">
                <SimulatedTerminal />
              </div>
            </div>
          </GlassCard>

          {/* CARD 3: KEYWORDS (Tags) */}
          <GlassCard className="md:col-span-2 lg:col-span-4 flex flex-col justify-center p-8 bg-gradient-to-br from-purple-900/10 to-black">
            <div className="mb-4">
              <Search className="text-white/50 mb-4" size={24} />
              <h3 className="text-xl font-medium text-white">
                Semantic Search
              </h3>
              <p className="text-sm text-neutral-500">
                {` We speak Google's NLP language.`}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Best rated",
                "Near me",
                "Top 10",
                "Open 24/7",
                "Emergency",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-purple-200 font-mono"
                >
                  {` ${tag}`}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* CARD 4: CONVERSION (Graph) */}
          <GlassCard
            gradient
            className="md:col-span-2 lg:col-span-5 lg:row-span-1 p-8 flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-xs font-bold uppercase tracking-wider">
                  Live Metrics
                </span>
              </div>
              <h3 className="text-5xl font-display font-medium text-white mb-1">
                +400<span className="text-2xl text-neutral-500">%</span>
              </h3>
              <p className="text-neutral-400 text-sm">Call Volume Increase</p>
            </div>
            <div className="h-20 w-32 flex items-end gap-1">
              {[40, 60, 45, 80, 70, 90, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-white/20 rounded-t-sm hover:bg-purple-500 transition-colors"
                />
              ))}
            </div>
          </GlassCard>

          {/* CARD 5: SPAM FIGHTING (Shield) */}
          <GlassCard className="md:col-span-2 lg:col-span-3 p-6 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Spam Assassin</h4>
              <p className="text-xs text-neutral-500">
                {`We report and remove your competitors' fake listings.`}
              </p>
            </div>
          </GlassCard>

          {/* CARD 6: REVIEWS (Quote) */}
          <GlassCard className="md:col-span-4 lg:col-span-4 p-8 flex flex-col justify-center bg-white/[0.02]">
            <Database className="text-neutral-700 mb-6" />
            <h3 className="text-lg text-white font-light leading-relaxed mb-4">
              {` "Our previous agency just posted on Facebook. GMB Optimization
              actually fixed our data layer. Calls doubled in 30 days."`}
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div>
                <div className="text-xs font-bold text-white">David Chen</div>
                <div className="text-[10px] text-neutral-500 uppercase">
                  CEO, Apex Logistics
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* --- COMPARISON TABLE (Dark Mode Style) --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              Old SEO vs. <span className="text-purple-400">Engineering</span>
            </h2>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-3 border-b border-white/5 bg-white/[0.02]">
              <div className="p-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Strategy
              </div>
              <div className="p-6 text-xs font-mono text-neutral-500 uppercase tracking-widest border-l border-white/5">
                Typical Agency
              </div>
              <div className="p-6 text-xs font-mono text-purple-400 uppercase tracking-widest border-l border-white/5 bg-purple-500/5">
                GMB Optimization
              </div>
            </div>

            {[
              {
                title: "Focus",
                bad: "Social Media Posts",
                good: "Database & API Signals",
              },
              {
                title: "Keywords",
                bad: "Guesswork",
                good: "Reverse-Engineered Data",
              },
              {
                title: "Reporting",
                bad: "PDFs once a month",
                good: "24/7 Live Dashboard",
              },
              {
                title: "Speed",
                bad: "Slow (Manual)",
                good: "Instant (Programmatic)",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="p-6 text-sm font-medium text-white">
                  {row.title}
                </div>
                <div className="p-6 text-sm text-neutral-500 border-l border-white/5">
                  {row.bad}
                </div>
                <div className="p-6 text-sm text-white border-l border-white/5 bg-purple-500/5 font-medium flex items-center gap-2">
                  <Zap size={14} className="text-purple-400" /> {row.good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <CTA />
    </div>
  );
};

export default About;
