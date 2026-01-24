/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { Search, FileCode, Rocket, PenTool, Zap, Settings } from "lucide-react";
import { Cube } from "@/components/Shapes3D";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const PHASES = [
  {
    id: "01",
    title: "Discovery & Blueprint",
    subtitle: "We measure twice, cut once.",
    desc: "Before a single line of code is written, we deconstruct your business model, audit your existing infrastructure, and map out a ruthless strategy for growth.",
    icon: Search,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
    deliverables: [
      "Technical Audit",
      "Competitor Analysis",
      "User Journey Maps",
      "Architecture Blueprint",
    ],
    tools: ["Figma", "Notion", "Linear"],
  },
  {
    id: "02",
    title: "Design & Prototype",
    subtitle: "Systems that scale, interfaces that convert.",
    desc: "We design high-fidelity prototypes that look and feel like the final product. We iterate rapidly based on feedback to ensure the UX is seamless.",
    icon: PenTool,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
    deliverables: [
      "High-Fidelity UI",
      "Interactive Prototypes",
      "Design System",
      "Component Library",
    ],
    tools: ["Figma", "Storybook", "Rive"],
  },
  {
    id: "03",
    title: "Agile Engineering",
    subtitle: "Elite code. Two-week sprints.",
    desc: "Our engineering team takes over. We build using a component-driven architecture, ensuring your platform is modular, fast, and testable.",
    icon: FileCode,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-transparent",
    deliverables: [
      "Clean, Typed Code",
      "API Documentation",
      "Unit & Integration Tests",
      "CI/CD Pipeline",
    ],
    tools: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "04",
    title: "Launch & Growth",
    subtitle: "Deployment is just the starting line.",
    desc: "We handle the DevOps for a zero-downtime launch. Then, we switch gears to optimization—analyzing user data to improve conversion rates.",
    icon: Rocket,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-transparent",
    deliverables: [
      "Production Deployment",
      "Analytics Setup",
      "SEO Optimization",
      "Handover Training",
    ],
    tools: ["Vercel", "AWS", "Google Analytics", "Sentry"],
  },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // 1. Hero Reveal
      gsap.fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.2 },
      );

      // 2. Draw the Central Line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".process-container",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );

      // 3. Phase Animations (One by One)
      const phases = gsap.utils.toArray(".process-phase");
      phases.forEach((phase: any, i) => {
        const direction = i % 2 === 0 ? -50 : 50; // Left or Right

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: phase,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate Visual
        tl.fromTo(
          phase.querySelector(".phase-visual"),
          { x: direction, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        )
          // Animate Content
          .fromTo(
            phase.querySelector(".phase-content"),
            { x: -direction, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "<", // Start at same time
          )
          // Light up the center node
          .fromTo(
            phase.querySelector(".center-node"),
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
            "-=0.4",
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] text-white selection:bg-purple-500/30 overflow-hidden w-full min-h-screen"
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

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="absolute top-20 left-0 perspective-1000 hidden lg:block opacity-30 pointer-events-none">
          <Cube size={80} rotateSpeed={15} color="rgba(255,255,255,0.05)" />
        </div>
        <div className="absolute top-32 right-0 perspective-1000 hidden lg:block opacity-30 pointer-events-none">
          <Cube
            size={60}
            y={50}
            rotateSpeed={10}
            color="rgba(255,255,255,0.05)"
          />
        </div>

        <div>
          <div className="hero-content inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Settings size={14} className="text-white animate-spin-slow" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">
              Our Framework
            </span>
          </div>

          <h1 className="hero-content text-5xl sm:text-7xl md:text-9xl font-display font-extrabold mb-8 text-white tracking-tighter leading-[0.9]">
            The{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Method.
            </span>
          </h1>

          <p className="hero-content text-lg md:text-2xl text-[#a1a1aa] font-light max-w-3xl mx-auto leading-relaxed">
            Creativity is chaotic. Delivery {`shouldn't be`}.{" "}
            <br className="hidden md:block" />
            We use a battle-tested framework to take products from{" "}
            <span className="font-semibold text-white">
              Zero to One
            </span> and{" "}
            <span className="font-semibold text-white">One to Scale</span>.
          </p>
        </div>
      </div>

      {/* Process Grid */}
      <div className="process-container max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative">
        {/* The Central Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block">
          <div className="timeline-line w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top" />
        </div>

        <div className="space-y-24 md:space-y-40">
          {PHASES.map((phase, index) => (
            <div
              key={phase.id}
              className={`process-phase relative flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Center Node Marker */}
              <div className="center-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-full z-20 hidden md:flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,1)]">
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>

              {/* Visual Side */}
              <div className="phase-visual w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden group">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <phase.icon
                        size={40}
                        className={`text-white ${phase.color}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Floating Tool Pills */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 justify-center">
                    {phase.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#151515]/80 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="phase-content w-full md:w-1/2">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0
                      ? "md:items-start md:text-left"
                      : "md:items-end md:text-right"
                  }`}
                >
                  <span className="text-8xl font-display font-bold text-white/5 mb-4 select-none absolute -top-10 opacity-50 pointer-events-none">
                    {phase.id}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white relative z-10">
                    {phase.title}
                  </h3>

                  <div
                    className={`inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 ${phase.color}`}
                  >
                    <Zap size={12} fill="currentColor" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {phase.subtitle}
                    </span>
                  </div>

                  <p className="text-lg text-[#a1a1aa] leading-relaxed font-light mb-8 max-w-md">
                    {phase.desc}
                  </p>

                  <div
                    className={`bg-[#111] rounded-2xl p-6 w-full max-w-md border border-white/5 hover:border-white/10 transition-colors`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2 justify-between">
                      <span>Deliverables</span>
                      <div className="h-px bg-white/10 flex-1 ml-4" />
                    </h4>
                    <ul className="space-y-3">
                      {phase.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm font-medium text-gray-300 flex items-center gap-3 ${
                            index % 2 !== 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${phase.color.replace("text-", "bg-")}`}
                          ></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
    </div>
  );
};

export default Process;
