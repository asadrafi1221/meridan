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
  MapPin,
  Search,
  Code,
  Layout,
  Palette,
  Share2,
  MousePointerClick,
  Bot,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Button } from "./Button";
import { NAV_ITEMS } from "@/constant";

// --- CONFIG ---
const BRAND_GRADIENT = "linear-gradient(to right, #6366f1, #a855f7, #ec4899)";

const SERVICE_ITEMS = [
  {
    label: "GBP Optimization",
    query: "gbp-optimization",
    icon: MapPin,
    desc: "Local Maps Ranking",
    color: "text-blue-400",
  },
  {
    label: "SEO Strategies",
    query: "seo",
    icon: Search,
    desc: "Organic Growth",
    color: "text-emerald-400",
  },
  {
    label: "Web Engineering",
    query: "web-development",
    icon: Code,
    desc: "High-Performance Sites",
    color: "text-purple-400",
  },
  {
    label: "Conversion Design",
    query: "landing-page",
    icon: Layout,
    desc: "Landing Pages",
    color: "text-orange-400",
  },
  {
    label: "Brand Identity",
    query: "branding",
    icon: Palette,
    desc: "Visual Systems",
    color: "text-pink-400",
  },
  {
    label: "Social Growth",
    query: "smm",
    icon: Share2,
    desc: "Viral Content",
    color: "text-cyan-400",
  },
  {
    label: "PPC & Ads",
    query: "google-ads",
    icon: MousePointerClick,
    desc: "Paid Acquisition",
    color: "text-yellow-400",
  },
  {
    label: "AI Solutions",
    query: "ai-solutions",
    icon: Bot,
    desc: "Automation Agents",
    color: "text-indigo-400",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[120] origin-left"
        style={{ scaleX, background: BRAND_GRADIENT }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled
            ? "py-3 bg-black/60 backdrop-blur-xl border-white/5 shadow-2xl"
            : "py-6 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="group relative z-[110] flex items-center gap-2.5"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <Sparkles
                size={18}
                className="text-white group-hover:text-purple-300 transition-colors"
              />
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isServices = item.label === "Services";
              const isActive = pathname === item.path;

              if (isServices) {
                return (
                  <div
                    key={item.path}
                    className="relative group px-1"
                    onMouseEnter={() => setIsHoveringServices(true)}
                    onMouseLeave={() => setIsHoveringServices(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                        isHoveringServices || pathname.includes("/services")
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isHoveringServices ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* MEGA MENU DROPDOWN */}
                    <AnimatePresence>
                      {isHoveringServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
                        >
                          <div className="bg-[#0A0A0A]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden">
                            {/* Gradient Border Top */}
                            <div
                              className="h-[2px] w-full"
                              style={{ background: BRAND_GRADIENT }}
                            />

                            <div className="p-2 grid grid-cols-2 gap-2">
                              {SERVICE_ITEMS.map((service) => (
                                <Link
                                  key={service.query}
                                  href={`/services/${service.query}`}
                                  className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                >
                                  <div
                                    className={`p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover/item:bg-white/10 transition-colors ${service.color}`}
                                  >
                                    <service.icon size={20} />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-semibold text-white group-hover/item:text-purple-300 transition-colors">
                                      {service.label}
                                    </h4>
                                    <p className="text-[11px] text-gray-500 group-hover/item:text-gray-400">
                                      {service.desc}
                                    </p>
                                  </div>
                                  <ArrowUpRight
                                    className="ml-auto opacity-0 group-hover/item:opacity-50 -translate-x-2 group-hover/item:translate-x-0 transition-all text-white"
                                    size={14}
                                  />
                                </Link>
                              ))}
                            </div>

                            <div className="p-4 bg-white/5 border-t border-white/5 flex justify-between items-center">
                              <span className="text-xs text-gray-400">
                                Ready to scale?
                              </span>
                              <Link
                                href="/services"
                                className="text-xs font-bold text-white hover:text-purple-400 flex items-center gap-1 transition-colors"
                              >
                                View All Services <ArrowRight size={12} />
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
                <div key={item.path} className="px-1">
                  <Link
                    href={item.path}
                    className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* --- ACTIONS --- */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button
                style={{ background: BRAND_GRADIENT }}
                className="rounded-full px-6 py-2.5 text-xs font-bold text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300 border-none"
              >
                START PROJECT
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-[110] p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[101] md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#050505] border-l border-white/10 z-[102] md:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24 min-h-full flex flex-col">
                {/* Menu Header */}
                <div className="mb-10 pb-6 border-b border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    Menu
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item.label === "Services" ? (
                        <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                          <button
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                            className="w-full flex items-center justify-between p-4"
                          >
                            <span className="text-xl font-medium text-white">
                              Services
                            </span>
                            <ChevronDown
                              className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                              size={20}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-2 pb-2 grid gap-1">
                                  {SERVICE_ITEMS.map((service) => (
                                    <Link
                                      key={service.query}
                                      href={`/services/${service.query}`}
                                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                    >
                                      <service.icon
                                        size={16}
                                        className={service.color}
                                      />
                                      <span className="text-sm text-gray-300">
                                        {service.label}
                                      </span>
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
                          className="block p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-xl font-medium text-gray-300 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Footer */}
                <div className="mt-auto pt-10">
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="block mb-8"
                  >
                    <Button
                      style={{ background: BRAND_GRADIENT }}
                      className="w-full py-4 rounded-xl font-bold text-white shadow-lg"
                    >
                      Start Project
                    </Button>
                  </Link>

                  <div className="flex justify-center gap-6">
                    {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
