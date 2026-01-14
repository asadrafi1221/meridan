"use client";

import React from "react";
import { CASE_STUDIES } from "@/constant";
import { ArrowUpRight, Code, Layout, Smartphone } from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { GrowthChart3D } from "@/components/Shapes3D";
import Link from "next/link";

// Augmented data for UI
const STUDY_EXTRAS: Record<string, { tags: string[]; challenge: string }> = {
  "fintech-scale": {
    tags: ["Next.js", "Node.js", "AWS", "Stripe Connect"],
    challenge:
      "Legacy infrastructure was causing 4s+ load times and 15% drop-off at checkout.",
  },
  "ecom-brand": {
    tags: ["Shopify Plus", "Liquid", "React", "Klaviyo"],
    challenge: "Conversion rate stagnant at 1.2% despite heavy ad spend.",
  },
  "health-tech": {
    tags: ["React Native", "Python/Django", "PostgreSQL", "HIPAA Compliant"],
    challenge:
      "Manual patient intake forms were costing the clinic 40+ admin hours weekly.",
  },
};

const Work: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-gray-200 text-xs font-bold uppercase tracking-wider mb-6 text-gray-500">
              <Code size={12} />
              <span>Case Studies</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold tracking-tighter text-brand-black mb-6">
              Results<span className="text-brand-accent">.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-lg">
              Real metrics from real businesses. We let the numbers do the
              talking.
            </p>
          </motion.div>

          <div className="perspective-1000 hidden md:block">
            <motion.div
              initial={{ rotateY: -30, opacity: 0 }}
              animate={{ rotateY: -10, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <GrowthChart3D />
            </motion.div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {CASE_STUDIES.map((study, index) => {
            const extras = STUDY_EXTRAS[study.id] || {
              tags: [],
              challenge: "",
            };

            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                key={study.id}
                className="group cursor-pointer border-b border-gray-100 pb-20 last:border-0"
              >
                <div className="overflow-hidden mb-10 md:mb-12 rounded-[2rem] bg-gray-100 border border-gray-200 relative">
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
                    <div className="bg-white text-brand-black px-6 py-3 rounded-full font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform">
                      View Case Study
                    </div>
                  </div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      <span className="text-brand-black px-3 py-1 bg-gray-100 rounded-md">
                        {study.client}
                      </span>
                      <span>{study.industry}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 group-hover:text-brand-accent transition-colors leading-tight">
                      {study.title}
                    </h2>

                    <div className="mb-8 p-6 bg-brand-light rounded-2xl border-l-4 border-brand-accent">
                      <p className="text-xs font-bold uppercase text-gray-400 mb-2">
                        The Challenge
                      </p>
                      <p className="text-gray-700 italic font-medium">
                        {`"${extras.challenge}"`}
                      </p>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed font-light max-w-xl mb-6">
                      {study.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {extras.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-gray-200 rounded-full text-xs font-medium text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 flex flex-row md:flex-col justify-between md:justify-start gap-8 md:gap-10 md:border-l border-gray-100 md:pl-16 pt-2">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <span className="block text-4xl md:text-6xl font-display font-bold text-brand-black mb-2 tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                    <div className="mt-4 hidden md:block">
                      <Button
                        variant="text"
                        className="group-hover:translate-x-2 transition-transform pl-0"
                      >
                        Read Full Story &rarr;
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-40 p-10 md:p-20 bg-brand-black text-white rounded-[3rem] text-center border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Want results like these?
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg font-light">
              We only work with 3 new clients per quarter to ensure this level
              of attention and impact.
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-black w-full sm:w-auto"
              >
                {` Let's Talk Strategy`}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
