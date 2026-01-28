"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  ArrowRight, // Added for the button
} from "lucide-react";

// Bringing in the gradient for consistency
const BRAND_GRADIENT =
  "linear-gradient(87.22deg, rgb(200, 189, 255) -1.82%, rgb(186, 166, 255) 5.99%, rgb(103, 33, 255) 50.47%, rgb(234, 14, 150) 113.5%)";

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "X.com", icon: Twitter, href: "#" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="w-full px-4 md:px-6 bg-[#050505] text-white border-t border-white/5">
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <span className="text-sm font-display font-black text-white tracking-tight">
                GMB
                <span
                  className="text-transparent text-sm pl-2 bg-clip-text"
                  style={{ backgroundImage: BRAND_GRADIENT }}
                >
                  OPTIMIZATION
                </span>
              </span>
              <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xs">
                A strategic design and technology partner for companies looking
                to scale at global standards.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {SOCIAL_LINKS.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    aria-label={item.name}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 group"
                  >
                    <item.icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Links 1 */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-6">
                Navigation
              </h4>
              <ul className="flex flex-col gap-4 text-[#a1a1aa] text-sm font-medium">
                {["Services", "Case Studies", "Our Process", "Waitlist"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-6">
                Inquiries
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@meridian.agency"
                  className="text-white text-lg font-medium hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <Mail
                    size={16}
                    className="group-hover:-translate-y-1 transition-transform duration-300"
                  />
                  hello@meridian.agency
                </a>
                <p className="text-[#555] text-xs leading-relaxed">
                  Lahore, Pakistan <br /> Global Operations
                </p>
              </div>
            </div>

            {/* Socials & Waitlist */}
            <div>
              {/* Waitlist Input */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">
                  Join The Waitlist
                </h4>
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full z-[99999] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                  />
                  <button
                    onClick={() => setEmail("")}
                    type="submit"
                    className="w-full py-3 z-[99999] rounded-xl font-bold text-xs uppercase tracking-widest text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    style={{ background: BRAND_GRADIENT }}
                  >
                    Join Now <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#555] text-xs">
              © {new Date().getFullYear()} GMB Optimization. All rights
              reserved.
            </p>
            <div className="flex gap-8 text-[#555] text-xs font-medium">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                BACK TO TOP <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
