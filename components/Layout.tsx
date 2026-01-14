/* eslint-disable react-hooks/set-state-in-effect */
"use client"; // Required for hooks and Framer Motion in Next.js

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Next.js Link
import { usePathname } from "next/navigation"; // Next.js equivalent of useLocation
import { Menu, X, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS } from "@/constant";
import { Button } from "./Button";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Next.js hook to get current path
  const ticking = useRef(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light relative selection:bg-brand-accent selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Glass Navigation */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "top-4" : "top-0 md:top-6"
        }`}
      >
        <div
          className={`
          w-full md:max-w-5xl px-6 py-3 md:rounded-full transition-all duration-500
          flex justify-between items-center
          ${
            isScrolled || isMobileMenuOpen
              ? "bg-white/70 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
              : "bg-transparent border border-transparent"
          }
        `}
        >
          <Link
            href="/"
            className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-brand-black z-50"
          >
            MERIDIAN<span className="text-brand-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xs font-bold uppercase tracking-wider transition-all hover:text-brand-accent relative group px-2 py-1 ${
                    isActive ? "text-brand-black" : "text-gray-500"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full group-hover:opacity-100 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  ></span>
                </Link>
              );
            })}
            <Link href="/contact">
              <Button
                variant="primary"
                size="sm"
                className="bg-brand-black hover:bg-brand-accent text-white border-0 shadow-lg shadow-brand-black/20"
              >
                Start Project
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-brand-black p-2 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 mx-4 mt-2 p-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col gap-6 md:hidden overflow-hidden"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-2xl font-display font-bold text-brand-black hover:text-brand-accent transition-colors flex items-center justify-between group"
                >
                  {item.label}
                  <span className="w-2 h-2 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <div className="h-px bg-gray-100 w-full my-2" />
              <Link href="/contact" className="w-full">
                <Button fullWidth size="lg">
                  {`    Let's Talk`}
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-24 pb-12 rounded-t-[3rem] mt-12 mx-2">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-display font-bold mb-6">MERIDIAN.</h3>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
              We bridge the gap between high-level strategy and relentless
              execution. Global standards, Eastern efficiency.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-bold">
              Explore
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-bold">
              Connect
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">hello@meridian.agency</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 opacity-60">
                <span className="text-xs">
                  Operating globally (EST/GMT/PST)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} Meridian Digital. All rights
            reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
