/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowUpRight, Code, Database, Globe } from "lucide-react";
import { Button } from "../components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { TiltCard } from "../components/TiltCard";
import { Cube } from "../components/Shapes3D";
import { BentoGrid } from "../components/BentoGrid";
import { SERVICES } from "@/constant";

// Faster, snappier transition settings
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
    transition: { staggerChildren: 0.08 }, // Faster stagger
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  // Reduced transform range for better performance
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div className="overflow-x-hidden w-full bg-[#fafafa]">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none -z-10 will-change-transform" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        {/* Optimized Gradients */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] bg-blue-100 rounded-full blur-[80px] opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] bg-purple-100 rounded-full blur-[80px] opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
          <motion.div
            variants={snappyStagger}
            initial="hidden"
            animate="visible"
            className="text-left w-full"
          >
            <motion.div
              variants={fastFadeUp}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500">
                Waitlist: October 2023
              </span>
            </motion.div>

            <motion.h1
              variants={fastFadeUp}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold leading-[1.0] md:leading-[0.95] mb-8 text-[#0a0a0a] tracking-tighter"
            >
              SCALE <br /> WITHOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">
                CHAOS.
              </span>
            </motion.h1>

            {/* title : Be found by customers, outrank competitors, and generate ROI with local SEO */}

            <motion.p
              variants={fastFadeUp}
              className="text-lg md:text-2xl text-gray-600 max-w-lg mb-12 font-light"
            >
              We engineer digital ecosystems for global brands.
              <span className="font-semibold text-[#0a0a0a]">
                {" "}
                Elite execution
              </span>
              , delivered to the world.
            </motion.p>

            <motion.div
              variants={fastFadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="min-w-[200px] w-full sm:w-auto shadow-xl bg-[#0a0a0a] text-white hover:bg-[#2563eb] transition-colors"
                >
                  Get a Proposal
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-w-[200px] bg-white/50 backdrop-blur-sm border border-gray-200 text-[#0a0a0a]"
                >
                  Case Studies
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Scene */}
          <div className="relative h-[400px] md:h-[600px] w-full perspective-2000 hidden lg:flex items-center justify-center">
            <motion.div
              style={{ y: y2 }}
              className="relative w-full h-full flex items-center justify-center will-change-transform"
            >
              <Cube
                size={300}
                z={-200}
                rotateSpeed={20}
                color="rgba(0,0,0,0.02)"
              />
              <TiltCard className="z-20">
                <div className="w-[380px] h-[480px] bg-[#0a0a0a] rounded-3xl shadow-2xl p-8 text-white relative border border-white/10 overflow-hidden">
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-8">
                      <div className="font-display font-bold text-2xl tracking-tight">
                        MERIDIAN_OS
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Globe,
                          label: "Global Traffic",
                          val: "2.4M",
                          color: "text-blue-400",
                        },
                        {
                          icon: Database,
                          label: "Server Load",
                          val: "42ms",
                          color: "text-purple-400",
                        },
                        {
                          icon: Code,
                          label: "Deploys",
                          val: "15/day",
                          color: "text-orange-400",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/10 rounded-xl p-4 border border-white/5"
                        >
                          <div className="flex items-center gap-3 mb-1">
                            <item.icon size={14} className={item.color} />
                            <span className="text-[10px] uppercase text-gray-400 tracking-widest">
                              {item.label}
                            </span>
                          </div>
                          <div className="text-xl font-mono">{item.val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-8 border-t border-white/10 flex justify-between text-xs text-gray-500">
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
      <section className="border-y border-gray-200 py-10 bg-white overflow-hidden relative">
        <div className="flex gap-16 md:gap-32 animate-scroll w-max grayscale opacity-30 hover:opacity-100 transition-opacity duration-500 will-change-transform">
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
                  className="text-3xl md:text-4xl font-display font-bold text-gray-800"
                >
                  {name}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-[#fafafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 text-[#0a0a0a]"
            >
              Why Meridian?
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              The strategic depth of a consultancy with the engineering power of
              a dev shop.
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
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#0a0a0a] text-white rounded-[2rem] md:rounded-[3rem] mx-2 md:mx-6 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-7xl font-display font-bold">
              Capabilities.
            </h2>
            <Link
              href="/services"
              className="group flex items-center gap-2 text-gray-400 mt-8 md:mt-0"
            >
              <span className="border-b border-gray-800 group-hover:border-white transition-colors pb-1">
                View all services
              </span>
              <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <TiltCard intensity={10} className="h-full">
                  <div className="group h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <service.icon size={32} className="text-[#2563eb] mb-8" />
                      <h3 className="text-2xl font-bold mb-4 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#2563eb]">
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
      <section className="py-24 md:py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8 text-[#0a0a0a]">
            Ready to scale?
          </h2>
          <p className="text-lg md:text-2xl text-gray-500 mb-12 font-light">
            We operate on a waitlist basis to maintain quality.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="px-12 py-5 shadow-2xl bg-[#0a0a0a] text-white hover:bg-[#2563eb]"
            >
              Book Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
