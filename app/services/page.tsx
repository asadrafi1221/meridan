"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Layout,
  Search,
  MousePointerClick,
  Gem,
  Share2,
  Target,
  Bot,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Web Development",
    desc: "High-performance digital architectures designed to convert.",
    icon: Layout,
    href: "/services/web-development",
    gradient: "from-blue-600/20 to-purple-900/40",
    border: "group-hover:border-blue-500/50",
    text_gradient: "from-blue-400 to-purple-400",
  },
  {
    title: "Strategic SEO",
    desc: "Dominate organic search and own your market share.",
    icon: Search,
    href: "/services/seo",
    gradient: "from-emerald-600/20 to-teal-900/40",
    border: "group-hover:border-emerald-500/50",
    text_gradient: "from-emerald-400 to-teal-400",
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused designs that turn clicks into customers.",
    icon: MousePointerClick,
    href: "/services/landing-page",
    gradient: "from-orange-600/20 to-pink-900/40",
    border: "group-hover:border-orange-500/50",
    text_gradient: "from-orange-400 to-pink-400",
  },
  {
    title: "Brand Identity",
    desc: "Build a legacy with a premium visual and verbal identity.",
    icon: Gem,
    href: "/services/branding",
    gradient: "from-amber-600/20 to-yellow-900/40",
    border: "group-hover:border-amber-500/50",
    text_gradient: "from-amber-400 to-yellow-400",
  },
  {
    title: "Social Media",
    desc: "Viral content production and community growth strategies.",
    icon: Share2,
    href: "/services/social-media-marketing",
    gradient: "from-pink-600/20 to-violet-900/40",
    border: "group-hover:border-pink-500/50",
    text_gradient: "from-pink-400 to-violet-400",
  },
  {
    title: "Google Ads (PPC)",
    desc: "Instant revenue through high-intent paid search campaigns.",
    icon: Target,
    href: "/services/google-ads",
    gradient: "from-blue-600/20 to-green-900/40",
    border: "group-hover:border-blue-500/50",
    text_gradient: "from-blue-400 to-green-400",
  },
  {
    title: "AI Solutions",
    desc: "Automate operations with intelligent agents and workflows.",
    icon: Bot,
    href: "/services/ai-solutions",
    gradient: "from-violet-600/20 to-fuchsia-900/40",
    border: "group-hover:border-violet-500/50",
    text_gradient: "from-violet-400 to-fuchsia-400",
  },
  {
    title: "GBP Optimization",
    desc: "Rank #1 on Google Maps and dominate your local territory.",
    icon: MapPin,
    href: "/services/gbp-optimization",
    gradient: "from-red-600/20 to-orange-900/40",
    border: "group-hover:border-red-500/50",
    text_gradient: "from-red-400 to-orange-400",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      // Hero Animation
      gsap.fromTo(
        ".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
      );

      // Card Stagger
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-grid",
            start: "top 80%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] text-white selection:bg-purple-500/30 w-full overflow-hidden min-h-screen font-sans"
    >
      {/* Background Noise */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(120,50,255,0.08),rgba(255,255,255,0))]" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto z-10">
          <div className="hero-element inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300">
              Our Expertise
            </span>
          </div>

          <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter leading-[0.95]">
            Complete Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Dominance.
            </span>
          </h1>

          <p className="hero-element text-lg text-gray-400 max-w-2xl mx-auto font-light">
            A full-stack ecosystem designed to scale your business from every
            angle.
          </p>
        </div>
      </section>

      {/* --- SERVICE GRID --- */}
      <section className="px-4 md:px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Link href={service.href} key={index} className="block group">
                <div className="service-card h-full">
                  <TiltCard intensity={10} className="h-full">
                    <div
                      className={`h-full p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] relative overflow-hidden transition-all duration-500 ${service.border}`}
                    >
                      {/* Hover Gradient Bg */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <service.icon size={28} className="text-white" />
                          </div>
                          <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {service.title}
                        </h3>

                        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                          {service.desc}
                        </p>

                        <div
                          className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${service.text_gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300`}
                        >
                          Explore Solution
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
