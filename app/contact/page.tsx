"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";
import { LocationEdit, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
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
        {/* LEFT SECTION - UPDATED FOR MOBILE CENTERING */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-10 leading-[0.9]">
            Let’s talk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              growth.
            </span>
          </h1>

          <p className="text-lg md:text-lg text-gray-400 mb-16 max-w-lg mx-auto md:mx-0">
            Tell us about your challenges. No hard sales just an honest
            conversation.
          </p>

          <div className="space-y-10 w-full flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                <Mail />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold text-xl">Email Us</h3>
                <a
                  href="mailto:mike.gmbrankup@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  mike.gmbrankup@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10 mt-5 w-full flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                <Phone />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold text-xl">Whatsapp</h3>
                <a
                  href="https://wa.me/923151885725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +92 315 1885725
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10 mt-5 w-full flex flex-col items-center md:items-start">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-full">
                <LocationEdit />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-gray-400">Melbourne, Australia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM SECTION */}
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
              className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none appearance-none"
            >
              <option value="" className="bg-black">
                Select project type
              </option>

              <option value="Free Business Audit" className="bg-black">
                Free Business Audit
              </option>
              <option value="Request Meeting" className="bg-black">
                Request Meeting
              </option>
              <option value="GBP Optimization" className="bg-black">
                GBP Optimization
              </option>
              <option value="SEO" className="bg-black">
                SEO
              </option>
              <option value="Web Development" className="bg-black">
                Web Development
              </option>
              <option value="Landing Page" className="bg-black">
                Landing Page
              </option>
              <option value="Social Media Marketing" className="bg-black">
                Social Media Marketing
              </option>
              <option value="Google Ads" className="bg-black">
                Google Ads
              </option>
              <option value="Branding" className="bg-black">
                Branding
              </option>
              <option value="AI Solutions" className="bg-black">
                AI Solutions
              </option>
              <option value="Something else" className="bg-black">
                Something else
              </option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals..."
              className="w-full bg-white/5 border-b-2 border-white/10 p-4 text-white focus:border-purple-500 outline-none resize-none"
            />

            {/* Button container - Centers on mobile, Left on desktop */}
            <div className="flex items-center justify-center md:justify-start">
              <Button
                size="lg"
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
