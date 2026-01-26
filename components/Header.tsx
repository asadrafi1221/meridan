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
  ChevronDown,
  // Service Icons
  MapPin,
  Search,
  Code,
  Layout,
  Palette,
  Share2,
  MousePointerClick,
  MessageSquare,
  Globe,
  Bot,
  Cpu,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Button } from "./Button";
import { NAV_ITEMS } from "@/constant";
import { BRAND_GRADIENT } from "@/app/page";

// --- DATA CONFIGURATION ---
const SERVICE_ITEMS = [
  {
    label: "GBP Optimization",
    query: "gbp-optimization",
    icon: MapPin,
    desc: "Dominate local maps",
    color: "text-blue-400",
  },
  {
    label: "SEO Strategies",
    query: "seo",
    icon: Search,
    desc: "Organic traffic growth",
    color: "text-purple-400",
  },
  {
    label: "Web Engineering",
    query: "web-development",
    icon: Code,
    desc: "High-performance code",
    color: "text-pink-400",
  },
  {
    label: "Conversion Design",
    query: "landing-page",
    icon: Layout,
    desc: "Landing pages that sell",
    color: "text-orange-400",
  },
  {
    label: "Brand Identity",
    query: "branding",
    icon: Palette,
    desc: "Logo & visual systems",
    color: "text-emerald-400",
  },
  {
    label: "Social Growth",
    query: "smm",
    icon: Share2,
    desc: "Viral content strategy",
    color: "text-cyan-400",
  },
  {
    label: "PPC & Ads",
    query: "google-ads",
    icon: MousePointerClick,
    desc: "ROI-focused campaigns",
    color: "text-yellow-400",
  },
  {
    label: "AI Solutions",
    query: "ai-solutions",
    icon: Bot,
    desc: "Automation & Agents",
    color: "text-indigo-400",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);

  const pathname = usePathname();

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

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[120] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 md:px-6 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 flex justify-between items-center
            ${
              isScrolled
                ? "bg-black/20 backdrop-blur-3xl backdrop-saturate-150 border border-white/10 rounded-full py-3 px-6 shadow-2xl shadow-purple-900/5 supports-[backdrop-filter]:bg-black/10"
                : "bg-transparent border-transparent py-2 px-2"
            }
          `}
        >
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="group relative z-[110] flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors backdrop-blur-md">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-display font-extrabold tracking-tight text-white">
              GMB
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: BRAND_GRADIENT }}
              >
                OPTIMIZATION
              </span>
            </span>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.path}
                    className="relative group h-full"
                    onMouseEnter={() => setIsHoveringServices(true)}
                    onMouseLeave={() => setIsHoveringServices(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 text-[13px] font-medium transition-all py-2 px-3 rounded-full hover:bg-white/10 hover:backdrop-blur-md ${
                        isHoveringServices || pathname.includes("/services")
                          ? "text-white"
                          : "text-[#ccc] hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          isHoveringServices ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* --- MEGA MENU (GLASS) --- */}
                    <AnimatePresence>
                      {isHoveringServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.23, 1, 0.32, 1],
                          }}
                          className="absolute top-full -left-[200px] w-[700px] pt-6"
                        >
                          <div className="bg-black/40 backdrop-blur-3xl backdrop-saturate-150 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 overflow-hidden">
                            {/* Decorative Top Line */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            <div className="grid grid-cols-2 gap-2 p-2">
                              {SERVICE_ITEMS.map((service) => (
                                <Link
                                  key={service.query}
                                  href={`/services?name=${service.query}`}
                                  className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 relative overflow-hidden"
                                >
                                  {/* Icon Box */}
                                  <div
                                    className={`p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover/item:border-white/10 transition-colors backdrop-blur-md ${service.color}`}
                                  >
                                    <service.icon size={20} />
                                  </div>

                                  <div>
                                    <h4 className="text-sm font-bold text-white group-hover/item:text-purple-400 transition-colors flex items-center gap-2">
                                      {service.label}
                                      <ArrowRight
                                        size={12}
                                        className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300"
                                      />
                                    </h4>
                                    <p className="text-[11px] text-[#888] mt-1 font-medium group-hover/item:text-[#aaa]">
                                      {service.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Bottom CTA */}
                            <div className="bg-white/5 p-3 text-center border-t border-white/5 backdrop-blur-sm">
                              <Link
                                href="/services"
                                className="text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-white transition-colors flex items-center justify-center gap-2"
                              >
                                View All Capabilities
                                <ArrowRight size={12} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-[13px] font-medium transition-all py-2 px-3 rounded-full hover:bg-white/10 hover:backdrop-blur-md relative ${
                    pathname === item.path
                      ? "text-white"
                      : "text-[#ccc] hover:text-white"
                  }`}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* --- CTA BUTTON --- */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                style={{ background: BRAND_GRADIENT }}
                className="text-white hover:opacity-90 rounded-full px-6 py-2.5 text-xs font-bold transition-all border-none shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                START PROJECT
              </Button>
            </Link>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-[110] p-2 text-white hover:bg-white/10 rounded-full transition-colors backdrop-blur-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE OVERLAY (FULL GLASS) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[100%] sm:w-[400px] bg-black/40 backdrop-blur-3xl backdrop-saturate-150 z-[102] md:hidden border-l border-white/10 flex flex-col p-8 pt-28 overflow-y-auto"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-600/30 blur-[100px] pointer-events-none" />

              <div className="flex flex-col gap-10 relative z-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#888] uppercase border-b border-white/10 pb-4">
                  Navigation
                </span>
                <nav className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      {item.label === "Services" ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                            className="group w-full flex items-center justify-between py-2"
                          >
                            <span className="text-3xl font-display font-bold text-white group-hover:text-purple-400 transition-colors">
                              {item.label}
                            </span>
                            <div
                              className={`p-2 rounded-full border border-white/10 transition-all ${
                                mobileServicesOpen
                                  ? "bg-white text-black rotate-180"
                                  : "text-white"
                              }`}
                            >
                              <ChevronDown size={20} />
                            </div>
                          </button>

                          {/* Mobile Submenu */}
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-1 gap-2 pt-4 pl-2">
                                  {SERVICE_ITEMS.map((service) => (
                                    <Link
                                      key={service.query}
                                      href={`/services?name=${service.query}`}
                                      onClick={toggleMenu}
                                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 text-[#aaa] hover:text-white transition-all border border-transparent hover:border-white/10"
                                    >
                                      <service.icon
                                        size={18}
                                        className={service.color}
                                      />
                                      <div>
                                        <span className="block text-sm font-bold text-white">
                                          {service.label}
                                        </span>
                                        <span className="text-[10px] opacity-60">
                                          {service.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={toggleMenu}
                          className="group flex items-center justify-between py-2"
                        >
                          <span className="text-3xl font-display font-bold text-white group-hover:text-purple-400 transition-colors">
                            {item.label}
                          </span>
                          <ArrowRight
                            className="text-[#555] group-hover:text-purple-400 group-hover:-rotate-45 transition-all duration-300"
                            size={28}
                          />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mt-auto pt-12 relative z-10">
                <div className="flex gap-6 mb-8 justify-center">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-3 rounded-full bg-white/5 border border-white/5 text-[#888] hover:text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-sm"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
                <Link href="/contact" className="w-full" onClick={toggleMenu}>
                  <Button
                    style={{ background: BRAND_GRADIENT }}
                    className="w-full text-white py-5 rounded-2xl font-bold tracking-widest text-sm shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                  >
                    START PROJECT
                  </Button>
                </Link>
                <p className="text-[10px] text-[#666] mt-8 text-center tracking-widest uppercase">
                  © {new Date().getFullYear()} GMB OPTIMIZATION.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
