/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Button } from "./Button"; // Assuming you have a Button component
import { NAV_ITEMS } from "@/constant";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#2563eb] z-[110] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 px-6 py-3 md:rounded-full border flex justify-between items-center ${
            isScrolled
              ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-extrabold tracking-tighter text-[#0a0a0a] z-[110]"
          >
            MERIDIAN<span className="text-[#2563eb]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-[#2563eb] relative group ${
                  pathname === item.path ? "text-[#0a0a0a]" : "text-gray-500"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#2563eb] transition-all duration-300 ${
                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[#0a0a0a] text-white hover:bg-[#2563eb] rounded-full px-8 py-2 text-xs font-bold transition-all border-none">
                START PROJECT
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-[110] p-2 text-[#0a0a0a]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[101] md:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[102] md:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col p-8 pt-24"
            >
              <div className="flex flex-col gap-8">
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
                  Menu
                </span>
                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        className="group flex items-end justify-between border-b border-gray-100 pb-4"
                      >
                        <span className="text-4xl font-display font-bold text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors">
                          {item.label}
                        </span>
                        <ArrowRight
                          className="text-gray-300 group-hover:text-[#2563eb] group-hover:translate-x-2 transition-all"
                          size={24}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto pt-12">
                <div className="flex gap-6 mb-8">
                  <Instagram
                    size={20}
                    className="text-[#0a0a0a] hover:text-[#2563eb] transition-colors"
                  />
                  <Twitter
                    size={20}
                    className="text-[#0a0a0a] hover:text-[#2563eb] transition-colors"
                  />
                  <Linkedin
                    size={20}
                    className="text-[#0a0a0a] hover:text-[#2563eb] transition-colors"
                  />
                </div>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-[#2563eb] text-white py-4 rounded-xl font-bold tracking-tight">
                    {` LET'S TALK`}
                  </Button>
                </Link>
                <p className="text-[10px] text-gray-400 mt-6 text-center tracking-widest uppercase">
                  © {new Date().getFullYear()} Meridian Digital
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
