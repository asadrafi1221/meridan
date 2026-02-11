/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useLayoutEffect, useRef } from "react";
import { CASE_STUDIES } from "@/constant";
import { ArrowRight, Trophy, Zap, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTA from "@/components/CTA";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- DUMMY DATA ---
const STUDY_EXTRAS: Record<
  string,
  { tags: string[]; challenge: string; icon: any }
> = {
  "1": {
    tags: ["Local SEO", "GMB Optimization", "Review Mgmt"],
    challenge: "Invisible on Google Maps with zero inbound calls.",
    icon: Target,
  },
  "2": {
    tags: ["PPC Strategy", "Conversion Rate", "Landing Page"],
    challenge: "High ad spend with low conversion rates during off-peak.",
    icon: Zap,
  },
  "3": {
    tags: ["Web Architecture", "Core Web Vitals", "UX/UI"],
    challenge: "Outdated architecture causing 70% bounce rates.",
    icon: Trophy,
  },
};

const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from(".hero-element", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      revealRefs.current.forEach((el, index) => {
        if (!el) return;
        const imageContainer = el.querySelector(".img-container");
        const image = el.querySelector(".img-actual");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          imageContainer,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
          },
        )
          .fromTo(
            image,
            { scale: 1.2 },
            { scale: 1, duration: 1.4, ease: "power2.out" },
            "<",
          )
          .from(
            el.querySelectorAll(".anim-text"),
            {
              y: 30,
              opacity: 0,
              duration: 0.8,
              stagger: 0.05,
              ease: "power2.out",
            },
            "-=0.8",
          );
      });

      gsap.from(".cta-section", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 95%",
          end: "bottom center",
          scrub: 1,
        },
        scale: 0.95,
        opacity: 0.8,
        y: 50,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#030303] min-h-screen text-white relative selection:bg-purple-500/30 overflow-hidden"
    >
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="pt-32 md:pt-48 pb-24 px-6 max-w-[1400px] mx-auto relative z-10">
        {/* --- HERO SECTION --- */}
        <div className="mb-40 md:mb-56 flex flex-col items-center text-center">
          <div className="hero-element mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-purple-300 backdrop-blur-md">
            <Sparkles size={12} />
            <span>Selected Works</span>
          </div>

          <h1 className="hero-element text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[0.9] text-white mb-8">
            Proven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-white">
              Results.
            </span>
          </h1>

          <p className="hero-element text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
            {`We don't believe in luck. We believe in data, strategy, and relentless execution. Explore the metrics behind our most successful campaigns.`}
          </p>

          <div className="hero-element h-16 w-px bg-gradient-to-b from-purple-500/50 to-transparent mt-12"></div>
        </div>

        {/* --- CASE STUDIES LIST --- */}
        <div className="space-y-40">
          {CASE_STUDIES.map((study, index) => {
            const extras = STUDY_EXTRAS[study.id] || {
              tags: [],
              challenge: "",
              icon: Target,
            };
            const Icon = extras.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={study.id}
                ref={(el) => {
                  if (el) revealRefs.current[index] = el;
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              >
                {/* IMAGE COLUMN */}
                <div
                  className={`lg:col-span-7 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="block group">
                    <div className="img-container relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10">
                      <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img
                        src={study.image}
                        alt={study.title}
                        className="img-actual w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                      />
                      <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXT COLUMN - UPDATED FOR MOBILE CENTERING */}
                <div
                  className={`lg:col-span-5 flex flex-col items-center text-center ${
                    isEven
                      ? "lg:items-start lg:text-left lg:order-2"
                      : "lg:items-end lg:text-right lg:order-1"
                  }`}
                >
                  {/* Index Header */}
                  <div
                    className={`anim-text w-full mb-6 border-b border-white/10 pb-4 flex items-end justify-center ${isEven ? "lg:justify-between" : "lg:justify-between lg:flex-row-reverse"}`}
                  >
                    <span className="text-sm text-purple-400 font-bold uppercase tracking-widest">
                      Case Study
                    </span>
                    <span className="text-5xl font-display font-bold text-white/10 leading-none ml-4 lg:ml-0">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="anim-text text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1] hover:text-purple-300 transition-colors">
                    {study.title}
                  </h2>

                  {/* Challenge Description */}
                  <div className="anim-text mb-8 w-full max-w-md lg:max-w-none">
                    <div
                      className={`flex items-center gap-2 mb-2 text-white/60 justify-center ${isEven ? "lg:justify-start" : "lg:justify-end"}`}
                    >
                      <Icon size={14} className="text-purple-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        The Challenge
                      </span>
                    </div>
                    <p
                      className={`text-sm md:text-base text-neutral-400 font-light italic px-4 lg:px-0 lg:pl-6 ${isEven ? "lg:border-l" : "lg:border-r lg:pr-6 lg:pl-0"} border-white/10`}
                    >
                      &quot;{extras.challenge}&quot;
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="anim-text w-full grid grid-cols-2 gap-x-4 gap-y-6 mb-8 py-6 border-y border-white/5">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="text-center lg:text-inherit">
                        <p className="text-3xl font-bold text-white tracking-tight mb-1">
                          {m.value}
                        </p>
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Link */}
                  <div
                    className={`anim-text flex flex-col gap-6 w-full items-center ${isEven ? "lg:items-start" : "lg:items-end"}`}
                  >
                    <div
                      className={`flex flex-wrap gap-2 justify-center ${isEven ? "lg:justify-start" : "lg:justify-end"}`}
                    >
                      {extras.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-500 uppercase tracking-wider font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.id}`}
                      className="group/btn inline-flex items-center gap-2 text-white font-medium hover:text-purple-400 transition-colors mt-2"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <CTA />
      </div>
    </div>
  );
};

export default Work;
