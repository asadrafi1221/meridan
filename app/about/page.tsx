"use client";

import React from "react";
import {
  Globe,
  Clock,
  Zap,
  ArrowDown,
  MapPin,
  Users,
  Heart,
  Coffee,
} from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import CTA from "@/components/CTA";

const About: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Gradient / Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,60,255,0.15),rgba(255,255,255,0))]" />

      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero */}
      <div className="relative pt-24 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-8 md:mb-12 text-white leading-[1.1] md:leading-[0.9]"
            >
              The Meridian <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                Standard.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-3xl text-[#a1a1aa] leading-relaxed font-light"
            >
              We are a collective of strategists, engineers, and creatives
              obsessed with one thing:
              <strong className="text-white font-semibold">
                {" "}
                Building businesses that last.
              </strong>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Origin Story */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="prose prose-lg max-w-none">
          <span className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Our Origin
          </span>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            Bridging the Gap
          </h3>
          <p className="mb-6 text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed">
            {` In a digital world full of "experts" and "gurus," we noticed a
            massive gap. Agencies were either affordable but low-quality, or
            elite but prohibitively expensive. There was no middle ground for
            ambitious startups and SMEs who needed`}{" "}
            <span className="text-white font-semibold">
              Silicon Valley execution without the Silicon Valley burn rate.
            </span>
          </p>
          <p className="mb-12 md:mb-16 text-lg md:text-xl text-[#a1a1aa] font-light leading-relaxed">
            Meridian was born to fill that gap. We stripped away the account
            managers, the fancy office snacks, and the jargon. We kept the
            strategy, the engineering talent, and the discipline.
          </p>

          <div className="my-20 p-8 bg-[#0A0A0A] border border-white/10 text-white rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-display font-bold mb-2">
                  Lahore HQ
                </h4>
                <p className="text-[#888] font-light text-sm">
                  {`Our engineering & design center. Home to top 1% talent from
                  the region's best universities.`}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-purple-400" />{" "}
                  <span>
                    Serving Clients in{" "}
                    <strong className="text-white">New York</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-purple-400" />{" "}
                  <span>
                    Serving Clients in{" "}
                    <strong className="text-white">London</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-purple-400" />{" "}
                  <span>
                    Serving {`Client's `}in{" "}
                    <strong className="text-white">Dubai</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 md:mb-8">
            The Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
            {[
              {
                icon: Zap,
                title: "Velocity",
                text: "Updates while you sleep. We utilize time zone overlap for 24/7 productivity cycles.",
              },
              {
                icon: Globe,
                title: "Global Mindset",
                text: "Fluency in Western business culture, English, and modern tech stacks.",
              },
              {
                icon: Clock,
                title: "Efficiency",
                text: "Reinvest the savings into ad spend or R&D. We give you more runway.",
              },
            ].map((item, i) => (
              <TiltCard key={i} intensity={5}>
                <div className="bg-[#0A0A0A] p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors duration-300 h-full group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-display font-bold text-lg md:text-xl mb-3 text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#888] leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Stats */}
      <div className="py-20 bg-[#050505] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-white flex justify-center items-center gap-2">
                <Users className="text-purple-400" size={24} /> 25+
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#666]">
                Team Members
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-white flex justify-center items-center gap-2">
                <Heart className="text-red-500" size={24} /> 96%
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#666]">
                Client Retention
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-white flex justify-center items-center gap-2">
                <Coffee className="text-amber-500" size={24} /> 10k+
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#666]">
                Sprints Completed
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-white flex justify-center items-center gap-2">
                <Globe className="text-blue-500" size={24} /> 7
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#666]">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
};

export default About;
