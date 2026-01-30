"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";
import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { BRAND_GRADIENT } from "@/constant";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-32 md:pt-40 pb-24 px-4 md:px-6 relative overflow-hidden text-white selection:bg-purple-500/30">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-10 leading-[0.9]">
            Let’s talk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              growth.
            </span>
          </h1>

          <p className="text-lg  md:text-lg text-gray-400 mb-16 max-w-lg">
            Tell us about your challenges. No hard sales just an honest
            conversation.
          </p>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                <Mail />
              </div>
              <div>
                <h3 className="font-bold text-xl">Email Us</h3>
                <p className="text-gray-400">mike.gmbrankup@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#0A0A0A]/80 p-6 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none"
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none"
              />
            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Work Email"
              type="email"
              className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none"
            />

            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none"
            >
              <option value="">Select project type</option>
              <option>Web Development</option>
              <option>Growth Marketing</option>
              <option>SEO & Content</option>
              <option>Full Digital Transformation</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals..."
              className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none resize-none"
            />

            <div className="flex items-center justify-center">
              <Button
                size="lg"
                fullWidth
                style={{ background: BRAND_GRADIENT }}
                disabled={loading}
                className="w-full sm:w-auto min-w-[160px] shadow-[0_0_30px_rgba(120,50,255,0.25)] text-white border-0 font-semibold h-12 rounded-xl text-sm transition-transform hover:scale-105"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
