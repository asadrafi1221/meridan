"use client";

import React from "react";
import { Button } from "@/components/Button";
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 md:pt-40 pb-24 px-4 md:px-6 relative overflow-hidden text-white selection:bg-purple-500/30">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold mb-8 md:mb-10 text-white leading-[0.9]">
            {`Let's talk`} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              growth.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-12 md:mb-16 font-light leading-relaxed max-w-lg">
            {`  Tell us about your challenges. We'll tell you if we can solve them.
            No hard sales, just an honest conversation about your potential.`}
          </p>

          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full shadow-sm group-hover:scale-110 transition-transform group-hover:border-purple-500/50">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-white">
                  Email Us
                </h3>
                <p className="text-gray-400 font-medium hover:text-purple-400 transition-colors cursor-pointer">
                  hello@meridian.agency
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Response time: &lt; 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full shadow-sm group-hover:scale-110 transition-transform group-hover:border-purple-500/50">
                <MessageSquare className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-white">
                  Discovery Call
                </h3>
                <p className="text-gray-400 font-medium">
                  Free 30-minute strategy session with a lead
                  engineer/strategist.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#0A0A0A]/80 p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl border border-white/10 backdrop-blur-xl"
        >
          <form
            className="space-y-6 md:space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border-b-2 border-white/10 p-3 md:p-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all rounded-t-lg"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border-b-2 border-white/10 p-3 md:p-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all rounded-t-lg"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Work Email
              </label>
              <input
                type="email"
                className="w-full bg-white/5 border-b-2 border-white/10 p-3 md:p-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all rounded-t-lg"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Project Type
              </label>
              <select className="w-full bg-white/5 border-b-2 border-white/10 p-3 md:p-4 text-base md:text-lg font-medium text-white focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all rounded-t-lg appearance-none cursor-pointer">
                <option className="bg-[#111] text-gray-400">
                  Select an option
                </option>
                <option className="bg-[#111]">
                  Web Development / Engineering
                </option>
                <option className="bg-[#111]">Growth Marketing / Ads</option>
                <option className="bg-[#111]">SEO & Content Strategy</option>
                <option className="bg-[#111]">
                  Full Digital Transformation
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Tell us about your goals
              </label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border-b-2 border-white/10 p-3 md:p-4 text-base md:text-lg font-medium text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all rounded-t-lg resize-none"
                placeholder="We are looking to scale to..."
              ></textarea>
            </div>

            <Button fullWidth size="lg">
              Send Message
            </Button>
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you agree to our privacy policy. We respect your
              inbox.
            </p>
          </form>
        </motion.div>
      </div>

      {/* --- CALENDAR SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-20 md:mt-32 relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Book a Meeting
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Schedule a time directly with our team.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
