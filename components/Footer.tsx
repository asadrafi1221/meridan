"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 px-4 md:px-6">
      {/* CTA Box with Cinematic Gradient */}
      <div className="max-w-7xl mx-auto relative z-10 translate-y-12">
        <div className="bg-gradient-to-br from-[#0a0a0a] via-[#171717] to-[#2563eb] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-display font-bold text-white leading-[1.1] mb-6">
                {` LET'S BUILD THE`} <br /> NEXT CHAPTER.
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light">
                Premium digital execution for brands that refuse to be average.
              </p>
            </div>
            <Link href="/contact" className="group">
              <div className="bg-white text-[#0a0a0a] p-6 md:p-10 rounded-full aspect-square flex flex-col items-center justify-center transition-transform hover:scale-105 active:scale-95">
                <ArrowUpRight
                  size={32}
                  className="group-hover:rotate-45 transition-transform"
                />
                <span className="font-bold text-xs mt-2 uppercase tracking-tighter">
                  Start
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#0a0a0a] rounded-t-[3rem] pt-32 pb-12 px-6 md:px-12 -mx-4 md:-mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <span className="text-3xl font-display font-black text-white">
                MERIDIAN<span className="text-[#2563eb]">.</span>
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                A strategic design and technology partner for companies looking
                to scale at global standards.
              </p>
            </div>

            {/* Links 1 */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-6">
                Navigation
              </h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
                {["Services", "Case Studies", "Our Process", "Waitlist"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-6">
                Inquiries
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:hello@meridian.agency"
                  className="text-white text-lg font-medium hover:text-[#2563eb] transition-colors flex items-center gap-2"
                >
                  <Mail size={16} /> hello@meridian.agency
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  Lahore, Pakistan • Global Operations
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-6">
                Connect
              </h4>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#2563eb] hover:border-[#2563eb] transition-all text-white"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Meridian Digital. All rights
              reserved.
            </p>
            <div className="flex gap-8 text-gray-600 text-xs">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white font-bold hover:text-[#2563eb] transition-colors"
              >
                BACK TO TOP ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
