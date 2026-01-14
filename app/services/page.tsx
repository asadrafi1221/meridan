"use client";

import React from "react";
import { SERVICES } from "@/constant";
import { Check, ChevronRight, Layers } from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import Link from "next/link";

// Detailed data augmentation for services
const SERVICE_DETAILS: Record<
  string,
  { checklist: string[]; stack: string[] }
> = {
  "growth-systems": {
    checklist: [
      "Funnel Architecture",
      "CRM Integration (HubSpot/Salesforce)",
      "Email Automation Workflows",
      "Retargeting Pixel Setup",
    ],
    stack: ["HubSpot", "Zapier", "Meta Ads", "GA4"],
  },
  "web-engineering": {
    checklist: [
      "Headless CMS Setup",
      "Frontend Performance Optimization",
      "SEO Technical Audit",
      "PWA Capability",
    ],
    stack: ["React", "Next.js", "TypeScript", "Vercel"],
  },
  "conversion-design": {
    checklist: [
      "Heuristic Analysis",
      "A/B Testing Framework",
      "High-Fidelity UI Design",
      "Interactive Prototyping",
    ],
    stack: ["Figma", "Hotjar", "Optimizely", "Rive"],
  },
  "seo-content": {
    checklist: [
      "Keyword Strategy",
      "Content Calendar",
      "Backlink Outreach",
      "Technical SEO Fixes",
    ],
    stack: ["Ahrefs", "Semrush", "SurferSEO", "GSC"],
  },
};

const Services: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none -z-10" />

      {/* Hero */}
      <section className="bg-brand-light pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 md:mb-8 tracking-tight text-brand-black"
            >
              Capabilities<span className="text-brand-accent">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-gray-600 leading-relaxed font-light"
            >
              {` We don't offer a menu of tasks. We offer strategic levers to pull
              for business growth. From engineering to acquisition, we handle
              the hard work.`}
            </motion.p>
          </div>

          {/* 3D Visual */}
        </div>
      </section>

      {/* Service Detail Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 space-y-20 md:space-y-40">
        {SERVICES.map((service, index) => {
          const details = SERVICE_DETAILS[service.id] || {
            checklist: [],
            stack: [],
          };

          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 md:gap-20 items-stretch ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="p-3 md:p-4 bg-brand-black text-white rounded-2xl shadow-lg">
                    <service.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                    Service 0{index + 1}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 text-brand-black leading-tight">
                  {service.title}
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed font-light">
                  {service.description}{" "}
                  {`We dive deep into your business logic to
                  create solutions that aren't just functional, but foundational
                  to your growth strategy.`}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {details.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="block text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">
                    {` What's Included`}
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {details.checklist.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 text-sm font-medium"
                      >
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <Check size={10} strokeWidth={4} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider">
                        Outcome
                      </span>
                      <span className="text-lg font-display font-bold text-brand-black">
                        {service.outcome}
                      </span>
                    </div>
                    <Link href="/contact">
                      <button className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
                        <ChevronRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full min-h-[400px]">
                <TiltCard intensity={10} className="h-full">
                  <div className="relative group w-full h-full rounded-3xl overflow-visible">
                    <div className="absolute inset-0 bg-gray-200 translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-6 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 md:group-hover:translate-x-8 md:group-hover:translate-y-8"></div>
                    <div className="h-full overflow-hidden rounded-3xl border border-gray-100 bg-white relative">
                      <img
                        src={`https://picsum.photos/800/800?grayscale&random=${
                          index + 10
                        }`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

                      {/* Floating Card Content */}
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold mb-3">
                          <Layers size={12} />
                          <span>Premium Execution</span>
                        </div>
                        <p className="text-sm font-light opacity-90 line-clamp-2">
                          Delivering scalable architecture and pixel-perfect
                          design for global brands.
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-brand-black text-white py-24 md:py-32 px-6 text-center rounded-t-[2rem] md:rounded-t-[3rem] mx-2 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">
            Stop guessing. Start growing.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            {` Your competition isn't waiting. Neither should you.`}
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-black px-12 w-full sm:w-auto"
            >
              Discuss Your Needs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Services;
