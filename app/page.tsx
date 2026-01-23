/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// Added MapPin, Bot, Layout for the new services
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

// The specific gradient provided
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

// New Capabilities Data
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
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
          <motion.div
            variants={snappyStagger}
            initial="hidden"
            animate="visible"
            className="text-left w-full"
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

          {/* Interactive Scene */}
          <div className="relative h-[350px] md:h-[500px] w-full perspective-2000 hidden lg:flex items-center justify-center">
            <motion.div
              style={{ y: y2 }}
              className="relative w-full h-full flex items-center justify-center will-change-transform"
            >
              <Cube
                size={250}
                z={-200}
                rotateSpeed={20}
                color="rgba(255,255,255,0.05)"
              />
              <TiltCard className="z-20">
                <div className="w-[320px] h-[420px] bg-[#0A0A0A]/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 text-white relative border border-white/10 overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-[150px] h-[150px] bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-8">
                      <div className="font-display font-bold text-xl tracking-tight text-white">
                        MERIDIAN_OS
                      </div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          icon: Globe,
                          label: "Global Traffic",
                          val: "2.4M",
                          color: "text-indigo-400",
                          bg: "bg-indigo-400/10",
                        },
                        {
                          icon: "Database", // Adjusted to string to match existing Lucide usage if dynamic, else import Database
                          label: "Server Load",
                          val: "42ms",
                          color: "text-purple-400",
                          bg: "bg-purple-400/10",
                        },
                        {
                          icon: Code,
                          label: "Deploys",
                          val: "15/day",
                          color: "text-pink-400",
                          bg: "bg-pink-400/10",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-[#111111] hover:bg-[#161616] transition-colors rounded-xl p-3 border border-white/5 flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`p-1 rounded-md ${item.bg}`}>
                              {/* Handle icon rendering safely if mix of strings/components */}
                              {typeof item.icon === "string" ? (
                                <Database size={12} className={item.color} />
                              ) : (
                                <item.icon size={12} className={item.color} />
                              )}
                            </div>
                            <span className="text-[9px] uppercase text-[#666] tracking-widest font-semibold">
                              {item.label}
                            </span>
                          </div>
                          <div className="text-lg font-mono text-gray-200 pl-1">
                            {item.val}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-white/10 flex justify-between text-[10px] text-[#555]">
                      <span>Status: Operational</span>
                      <span>LHR • NY • LDN</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
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
                "ACME Corp",
                "Technius",
                "GlobalFlow",
                "Elevate",
                "Stratos",
                "Ventus",
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
              Why <br />
              <span
                className="text-transparent relative bg-clip-text"
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

      {/* Capabilities Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative mx-2 md:mx-6">
        <div className="absolute inset-0 bg-[#080808] rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white">
              Capabilities.
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

          {/* Mapped Capabilities */}
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
                    {/* Hover Glow Gradient */}
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
