"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTA from "@/components/CTA";

export const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

// --- DATA ---
const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    category: "Development",
    href: "/services/web-development",
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Strategic SEO",
    category: "Growth",
    href: "/services/seo",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Brand Identity",
    category: "Design",
    href: "/services/branding",
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Google Ads (PPC)",
    category: "Marketing",
    href: "/services/google-ads",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Social Media",
    category: "Content",
    href: "/services/social-media-marketing",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "GBP Optimization",
    category: "Local SEO",
    href: "/services/gbp-optimization",
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<{ src: string } | null>(
    null,
  );

  // Mouse position for the floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the image movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);

  // Update mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Center the image on cursor (Offset -200px X and -150px Y based on image size)
    mouseX.set(clientX - 200);
    mouseY.set(clientY - 150);
  };

  useGSAP(
    () => {
      // Initial Load Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".page-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
      );
      tl.fromTo(
        ".service-row",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-[#050505] text-white min-h-screen w-full relative overflow-hidden font-sans selection:bg-purple-500/30"
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(60,60,80,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* --- HEADER --- */}
      <header className="pt-32 pb-20 px-6 md:px-12 border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="page-title text-sm font-bold uppercase tracking-widest text-purple-400 mb-4">
            Our Expertise
          </p>
          <h1 className="page-title text-6xl md:text-9xl font-display font-medium tracking-tighter leading-[0.9] text-white/90">
            Creating <br /> Impact.
          </h1>
        </div>
      </header>

      {/* --- FLOATING PREVIEW IMAGE (The "Ghost" Element) --- */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 hidden md:block"
      >
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.src}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full h-full"
            >
              {/* Image Container with Glow */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={activeService.src}
                  alt="Service Preview"
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay for text contrast if needed */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* The "View" Circle Overlay - Using BRAND_GRADIENT */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold tracking-wide shadow-[0_0_30px_rgba(120,50,255,0.4)]"
                style={{ background: BRAND_GRADIENT }}
              >
                View
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- SERVICES LIST --- */}
      <section className="px-6 md:px-12 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            {SERVICES.map((service) => (
              <Link
                href={service.href}
                key={service.id}
                className="group relative"
                onMouseEnter={() => setActiveService({ src: service.src })}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-row py-12 md:py-16 border-b border-white/10 flex flex-col md:flex-row items-baseline justify-between transition-all duration-500 group-hover:border-white/20 group-hover:px-4">
                  {/* Left: Title */}
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-7xl font-display font-medium text-white/50 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 ease-out">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right: Meta Info */}
                  <div className="flex items-center gap-12 mt-4 md:mt-0 relative z-10 group-hover:-translate-x-4 transition-transform duration-500 ease-out">
                    <span className="text-sm font-mono text-purple-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.category}
                    </span>
                    <span className="hidden md:block text-sm font-mono text-gray-600 group-hover:text-white transition-colors duration-300">
                      {service.id}
                    </span>
                  </div>

                  {/* Hover Background Strip */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <CTA />
    </div>
  );
}
