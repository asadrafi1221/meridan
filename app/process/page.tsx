/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import {
  Search,
  PenTool,
  Settings,
  Users,
  BarChart3,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Cube } from "@/components/Shapes3D";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA from "@/components/CTA";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const PHASES = [
  {
    id: "01",
    title: "Strategy & Alignment",
    subtitle: "One-on-one clarity from day one.",
    desc: "We kick off every partnership with a deep-dive strategy session. We deconstruct your current challenges and explain exactly how our systems will work for your unique business model.",
    icon: Search,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
    deliverables: [
      "One-on-One Kickoff Meeting",
      "System Walkthrough",
      "Goal Alignment Session",
      "Expectation Mapping",
    ],
    tools: ["Google Meet", "Notion", "Zoom"],
  },
  {
    id: "02",
    title: "Tailored Solution",
    subtitle: "Custom solutions, not cookie-cutter templates.",
    desc: "No two businesses are identical. We build a bespoke roadmap specifically engineered for your brand, ensuring every marketing move we make solves a real problem.",
    icon: PenTool,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
    deliverables: [
      "Custom Growth Roadmap",
      "Business-Specific Strategy",
      "Target Audience Analysis",
      "Competitor Gap Report",
    ],
    tools: ["Figma", "Miro", "PDF"],
  },
  {
    id: "03",
    title: "Dedicated Account Manager",
    subtitle: "Elite support. A direct line to success.",
    desc: "You aren't just a ticket number. We pair you with a Dedicated Account Manager who is always available during your time of need, acting as a proactive extension of your own team.",
    icon: Users,
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-transparent",
    deliverables: [
      "Dedicated Account Manager",
      "Priority Communication Channel",
      "Crisis Management Support",
      "Weekly Progress Syncs",
    ],
    tools: ["Call", "Message", "Email"],
  },
  {
    id: "04",
    title: "Analysis & Expansion",
    subtitle: "Transparency through data.",
    desc: "We provide comprehensive monthly reports that detail exactly what work was performed and the tangible results achieved. From there, we become your long-term partner for any future marketing needs.",
    icon: BarChart3,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-transparent",
    deliverables: [
      "Monthly Performance Reports",
      "ROI & Result Tracking",
      "Strategic Growth Recommendations",
      "Full-Stack Marketing Support",
    ],
    tools: ["Performance Reports", "Google Analytics", "Looker"],
  },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        ".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.2 },
      );

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

      const phases = gsap.utils.toArray(".process-phase");
      phases.forEach((phase: any, i) => {
        const direction = i % 2 === 0 ? -50 : 50;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: phase,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          phase.querySelector(".phase-visual"),
          { x: direction, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        )
          .fromTo(
            phase.querySelector(".phase-content"),
            { x: -direction, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "<",
          )
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

          <h1 className="hero-content text-5xl sm:text-7xl md:text-9xl font-display font-thin mb-8 text-white tracking-tighter leading-[0.9]">
            The{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Method.
            </span>
          </h1>

          <p className="hero-content text-lg text-[#a1a1aa] font-light max-w-3xl mx-auto leading-relaxed">
            Communication is chaotic. Collaboration shouldn’t be.{" "}
            <br className="hidden md:block" />
            We use a real-tested framework to ensure your business is{" "}
            <span className="font-semibold text-white">
              never left in the dark
            </span>{" "}
            and always moving toward{" "}
            <span className="font-semibold text-white">growth</span>.
          </p>
        </div>
      </div>

      {/* Process Grid */}
      <div className="process-container max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative">
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <phase.icon
                        size={40}
                        className={`text-white ${phase.color}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

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

              {/* Content Side - Modified for mobile centering */}
              <div className="phase-content w-full md:w-1/2">
                <div
                  className={`flex flex-col items-center text-center ${
                    index % 2 === 0
                      ? "md:items-start md:text-left"
                      : "md:items-end md:text-right"
                  }`}
                >
                  {/* Phase ID Number - Centered on mobile */}
                  <span className="text-8xl font-display font-bold text-white/5 mb-4 select-none absolute -top-10 md:static opacity-50 pointer-events-none left-1/2 -translate-x-1/2 md:translate-x-0">
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

                  <div className="bg-[#111] rounded-2xl p-6 w-full max-w-md border border-white/5 hover:border-white/10 transition-colors">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2 justify-center md:justify-between">
                      <span className="hidden md:inline">Deliverables</span>
                      <span className="md:hidden">Our Deliverables</span>
                      <div className="h-px bg-white/10 flex-1 ml-4 hidden md:block" />
                    </h4>
                    <ul className="space-y-3">
                      {phase.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm font-medium text-gray-300 flex items-center gap-3 justify-center ${
                            index % 2 === 0
                              ? "md:justify-start"
                              : "md:justify-end md:flex-row-reverse"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${phase.color.replace("text-", "bg-")}`}
                          />
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

      <CTA />
    </div>
  );
};

export default Process;
