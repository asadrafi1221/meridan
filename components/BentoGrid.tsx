"use client";

import React, { useRef, forwardRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  Globe,
  Code2,
  ArrowUpRight,
  Lock,
  MessageSquare,
  Terminal,
  Cpu,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// The specific MyAIO-style gradient
const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
}

// 1. WRAP IN forwardRef so we can pass the DOM element to GSAP
const BentoItem = forwardRef<HTMLDivElement, BentoItemProps>(
  ({ children, className = "" }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Spotlight effect
    const background = useTransform(
      [smoothX, smoothY],
      ([x, y]) =>
        `radial-gradient(500px circle at ${x}px ${y}px, rgba(120, 50, 255, 0.1), transparent 40%)`,
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        // Start invisible (opacity-0) so GSAP can fade it in
        className={`bento-item relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] bg-gradient-to-b from-[#111111] to-[#0A0A0A] hover:border-white/10 transition-colors duration-300 group opacity-0 ${className}`}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 will-change-transform"
          style={{ background }}
        />
        <div className="relative z-20 h-full p-6 md:p-8 flex flex-col">
          {children}
        </div>
      </motion.div>
    );
  },
);
BentoItem.displayName = "BentoItem";

export const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // 2. Store refs in an array to preserve order
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!itemsRef.current.length) return;

      // 3. Create the Master Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Animation starts when top of grid hits 80% of viewport
          toggleActions: "play none none reverse",
        },
      });

      // 4. Iterate through refs to animate ONE BY ONE
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        // Generate random start positions for this specific item
        const randomX = gsap.utils.random(-100, 100);
        const randomY = gsap.utils.random(50, 200);
        const randomRot = gsap.utils.random(-15, 15);

        tl.fromTo(
          item,
          {
            x: randomX,
            y: randomY,
            rotation: randomRot,
            scale: 0.8,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)", // The "Jelly" effect
            clearProps: "transform, opacity", // Clean up after animation so hover effects work
          },
          // 5. The Timeline Position parameter (index * 0.1)
          // This ensures strict sequential order: 0s, 0.1s, 0.2s...
          index * 0.15,
        );
      });
    },
    { scope: containerRef },
  );

  // Helper to collect refs
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    itemsRef.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {/* 1. Global Standard */}
      <BentoItem
        ref={(el) => addToRefs(el, 0)}
        className="md:col-span-2 min-h-[300px]"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="h-full flex flex-col justify-between relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-6 text-gray-300 backdrop-blur-sm">
              <Globe size={12} className="text-indigo-400" />
              <span>Global Standard</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter text-white">
              Silicon Valley Quality.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: BRAND_GRADIENT }}
              >
                Lahore Costs.
              </span>
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-[#888] text-sm max-w-xs font-light leading-relaxed">
              Top 1% engineering talent without the inflated US salary bands.
            </p>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </BentoItem>

      {/* 2. Engineering Playbook */}
      <BentoItem ref={(el) => addToRefs(el, 1)} className="md:col-span-2">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6 text-purple-400">
            <Terminal size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Engineering Playbook
            </span>
          </div>

          <div className="space-y-3">
            {[
              "Automated CI/CD Pipelines",
              "Type-Safe Architecture",
              "Weekly Sprint Cycles",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-[#151515] rounded-xl border border-white/5 text-sm font-medium text-gray-300 hover:bg-[#1a1a1a] hover:border-purple-500/20 transition-colors"
              >
                <span className="text-gray-600 font-mono text-xs">
                  0{i + 1}.
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </BentoItem>

      {/* 3. Tech Stack */}
      <BentoItem ref={(el) => addToRefs(el, 2)} className="">
        <div className="h-full flex flex-col justify-between text-center">
          <div className="p-3 bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl border border-white/10 w-fit mx-auto shadow-inner relative group/icon">
            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity" />
            <Code2 size={24} className="text-gray-200 relative z-10" />
          </div>

          <div className="py-8 flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "TS", "Go"].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#1a1a1a] border border-white/5 rounded-md text-[10px] font-bold uppercase text-gray-400 hover:text-white hover:border-purple-500/30 transition-all"
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-white text-sm">Modern Stack</h4>
            <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wide">
              Vercel • AWS • Docker
            </p>
          </div>
        </div>
      </BentoItem>

      {/* 4. Comms Hub */}
      <BentoItem ref={(el) => addToRefs(el, 3)} className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <MessageSquare size={20} className="text-indigo-500" />
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
              Live Sync
            </span>
          </div>

          <div className="space-y-3 flex-1">
            <div className="bg-[#1A1A1A] p-3 rounded-2xl rounded-tl-sm border border-white/5 text-[11px] text-gray-400 w-[90%]">
              Deployment #420 complete.
            </div>
            <div
              style={{ background: BRAND_GRADIENT }}
              className="p-3 rounded-2xl rounded-tr-sm shadow-lg shadow-purple-900/20 text-[11px] text-white ml-auto w-[80%] font-medium"
            >
              Metrics look solid! 🚀
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-[10px] text-gray-500 font-mono text-center">
              SLACK • LINEAR • GITHUB
            </p>
          </div>
        </div>
      </BentoItem>

      {/* 5. Scalability */}
      <BentoItem ref={(el) => addToRefs(el, 4)} className="md:col-span-2">
        <div className="flex flex-row h-full">
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-3 text-pink-400">
              <Cpu size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Infrastructure
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Built to Scale.
              </h3>
              <p className="text-[#888] text-xs font-light leading-relaxed max-w-[200px]">
                Architectures built for 10x traffic growth without the downtime.
              </p>
            </div>
          </div>

          <div className="w-1/3 flex items-end justify-end gap-1.5 pb-2">
            {[35, 60, 45, 80, 70, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: h / 100 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.5 + i * 0.08, // Increased delay to ensure card is visible first
                  ease: "easeOut",
                }}
                style={{
                  originY: 1,
                  backgroundImage: i === 5 ? BRAND_GRADIENT : undefined,
                }}
                className={`w-3 h-[120px] rounded-t-sm ${
                  i === 5
                    ? "shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-[#1a1a1a] border-t border-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </BentoItem>

      {/* 6. Velocity */}
      <BentoItem ref={(el) => addToRefs(el, 5)} className="">
        <Zap
          size={20}
          className="text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
        <div
          className="text-5xl font-display font-bold text-transparent bg-clip-text mb-2 tracking-tighter"
          style={{ backgroundImage: BRAND_GRADIENT }}
        >
          2.5x
        </div>
        <p className="text-xs text-[#888] font-medium leading-relaxed">
          Faster delivery than US agencies via parallel workstreams.
        </p>
      </BentoItem>

      {/* 7. IP Protection */}
      <BentoItem ref={(el) => addToRefs(el, 6)}>
        <Lock
          size={20}
          className="text-pink-400 mb-6 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
        />
        <h4 className="font-bold text-white mb-1">IP Ownership</h4>
        <p className="text-xs text-[#888] font-light leading-relaxed">
          100% legal transfer. <br />
          NDA signed before kickoff.
        </p>
      </BentoItem>
    </div>
  );
};
