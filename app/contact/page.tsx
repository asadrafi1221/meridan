"use client";

import React from "react";
import { Button } from "@/components/Button";
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen pt-32 md:pt-40 pb-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-b from-blue-100 to-transparent opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold mb-8 md:mb-10 text-brand-black leading-[0.9]">
            {`Let's talk`} <br />
            growth.
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 md:mb-16 font-light leading-relaxed max-w-lg">
            {`  Tell us about your challenges. We'll tell you if we can solve them.
            No hard sales, just an honest conversation about your potential.`}
          </p>

          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="text-brand-black" size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl mb-1">
                  Email Us
                </h3>
                <p className="text-gray-600 font-medium">
                  hello@meridian.agency
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Response time: &lt; 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <MessageSquare className="text-brand-black" size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl mb-1">
                  Discovery Call
                </h3>
                <p className="text-gray-600 font-medium">
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
          className="bg-white p-6 md:p-12 shadow-2xl shadow-gray-200/50 rounded-3xl border border-white/50 backdrop-blur-sm"
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
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-brand-black focus:bg-white transition-all rounded-t-lg"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-brand-black focus:bg-white transition-all rounded-t-lg"
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
                className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-brand-black focus:bg-white transition-all rounded-t-lg"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Project Type
              </label>
              <select className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-brand-black focus:bg-white transition-all rounded-t-lg text-brand-black">
                <option>Select an option</option>
                <option>Web Development / Engineering</option>
                <option>Growth Marketing / Ads</option>
                <option>SEO & Content Strategy</option>
                <option>Full Digital Transformation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Tell us about your goals
              </label>
              <textarea
                rows={4}
                className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 md:p-4 text-base md:text-lg font-medium focus:outline-none focus:border-brand-black focus:bg-white transition-all rounded-t-lg resize-none"
                placeholder="We are looking to scale to..."
              ></textarea>
            </div>

            <Button
              fullWidth
              size="lg"
              className="mt-4 py-4 md:py-5 text-base md:text-lg"
            >
              Send Message
            </Button>
            <p className="text-xs text-gray-400 text-center mt-4">
              By submitting, you agree to our privacy policy. We respect your
              inbox.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
