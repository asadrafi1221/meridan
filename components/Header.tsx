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
  MessageSquare, // AEO
  Globe, // GEO
  Bot, // AIO
  Cpu, // Virtual AI
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Button } from "./Button";
import { NAV_ITEMS } from "@/constant";
import { BRAND_GRADIENT } from "@/app/page";

// --- DATA CONFIGURATION ---
const SERVICE_ITEMS = [
  {
    label: "GBP Optimization",
    path: "/services/gbp-optimization",
    icon: MapPin,
    desc: "Local map ranking",
  },
  {
    label: "SEO",
    path: "/services/seo",
    icon: Search,
    desc: "Organic traffic growth",
  },
  {
    label: "Web Development",
    path: "/services/web-development",
    icon: Code,
    desc: "Custom coding",
  },
  {
    label: "Landing Page Website",
    path: "/services/landing-page",
    icon: Layout,
    desc: "High conversion pages",
  },
  {
    label: "Logo Design & Branding",
    path: "/services/branding",
    icon: Palette,
    desc: "Visual identity",
  },
  {
    label: "Social Media Marketing",
    path: "/services/smm",
    icon: Share2,
    desc: "Engagement & reach",
  },
  {
    label: "Google Ads (PPC)",
    path: "/services/google-ads",
    icon: MousePointerClick,
    desc: "Paid search campaigns",
  },
  {
    label: "AEO Optimization",
    path: "/services/aeo",
    icon: MessageSquare,
    desc: "Answer Engine Opt",
  },
  {
    label: "GEO Optimization",
    path: "/services/geo",
    icon: Globe,
    desc: "Generative Engine Opt",
  },
  {
    label: "AIO Optimization",
    path: "/services/aio",
    icon: Bot,
    desc: "AI Engine Opt",
  },
  {
    label: "Virtual AI Solutions",
    path: "/services/ai-solutions",
    icon: Cpu,
    desc: "Automated workflows",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile specific state for services accordion
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Desktop specific state for dropdown hover
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px]  z-[110] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`max-w-7xl text-white mx-auto px-6 py-3 md:rounded-full
  flex justify-between items-center
  transition-all duration-500
  ${
    isScrolled
      ? `
        backdrop-blur-xl
        backdrop-filter
        border border-white/20
        shadow-lg
        `
      : "border-transparent"
  }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-extrabold tracking-tighter text-white z-[110]"
          >
            GMB-
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              OPTIMIZATION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setIsHoveringServices(true)}
                    onMouseLeave={() => setIsHoveringServices(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-[#2563eb] py-4 ${
                        pathname.includes("/services")
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isHoveringServices ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    <AnimatePresence>
                      {isHoveringServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6 overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-4">
                            {SERVICE_ITEMS.map((service) => (
                              <Link
                                key={service.path}
                                href={service.path}
                                className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                              >
                                <div className="p-2 bg-gray-100 rounded-lg group-hover/item:bg-[#2563eb]/10 group-hover/item:text-[#2563eb] transition-colors text-gray-600">
                                  <service.icon size={20} />
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-gray-900 group-hover/item:text-[#2563eb] transition-colors">
                                    {service.label}
                                  </h4>
                                  <p className="text-[10px] text-gray-500 mt-1 font-medium">
                                    {service.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
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
                  className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-[#2563eb] relative group ${
                    pathname === item.path ? "text-[#0a0a0a]" : "text-gray-500"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#2563eb] transition-all duration-300 ${
                      pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[#0a0a0a] text-white hover:bg-[#2563eb] rounded-full px-8 py-2 text-xs font-bold transition-all border-none">
                START PROJECT
              </Button>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden relative z-[110] p-2 text-[#0a0a0a]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[101] md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[102] md:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col p-8 pt-24 overflow-y-auto"
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
                      {item.label === "Services" ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                            className="group w-full flex items-end justify-between border-b border-gray-100 pb-4"
                          >
                            <span className="text-4xl font-display font-bold text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors">
                              {item.label}
                            </span>
                            <ChevronDown
                              className={`text-gray-300 group-hover:text-[#2563eb] transition-all duration-300 ${
                                mobileServicesOpen
                                  ? "rotate-180 text-[#2563eb]"
                                  : ""
                              }`}
                              size={24}
                            />
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
                                <div className="flex flex-col gap-4 py-6 pl-4 border-l-2 border-gray-100 ml-2">
                                  {SERVICE_ITEMS.map((service) => (
                                    <Link
                                      key={service.path}
                                      href={service.path}
                                      className="flex items-center gap-3 text-gray-600 hover:text-[#2563eb]"
                                    >
                                      <service.icon size={18} />
                                      <span className="text-sm font-bold font-display uppercase tracking-wider">
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
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mt-auto pt-12">
                <div className="flex gap-6 mb-8">
                  <Instagram
                    size={20}
                    className="hover:text-[#2563eb] transition-colors"
                  />
                  <Twitter
                    size={20}
                    className="hover:text-[#2563eb] transition-colors"
                  />
                  <Linkedin
                    size={20}
                    className="hover:text-[#2563eb] transition-colors"
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
