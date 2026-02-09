/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constant";
import gsap from "gsap";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

const LiquidNavbar = () => {
  const pathname = usePathname();
  const debugRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({ width: 880, height: 64 });
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const config = {
    frost: 0.05,
    saturation: 1.1,
    radius: isMobile ? 32 : 16,
    border: 0.07,
    alpha: 0.93,
    lightness: 50,
    inputBlur: 11,
    outputBlur: 0.2,
    scale: isMobile ? -80 : -180,
    ...dimensions,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(880, window.innerWidth - 24);
      setDimensions({ width, height: 64 });
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP: Mobile Menu Animation
  useEffect(() => {
    if (isMobile && mobileMenuRef.current) {
      if (mobileMenuOpen) {
        document.body.style.overflow = "hidden";
        gsap.to(mobileMenuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
          display: "block",
        });
        const children =
          listItemsRef.current?.querySelectorAll(".mobile-nav-item");
        if (children) {
          gsap.fromTo(
            children,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.07, delay: 0.1, ease: "power4.out" },
          );
        }
      } else {
        document.body.style.overflow = "unset";
        gsap.to(mobileMenuRef.current, {
          y: "20px",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          display: "none",
        });
      }
    }
  }, [mobileMenuOpen, isMobile]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Liquid Logic
  useEffect(() => {
    const buildDisplacementImage = () => {
      if (!debugRef.current) return;
      const border =
        Math.min(config.width, config.height) * (config.border * 0.5);
      const svgContent = `<svg class="displacement-image" viewBox="0 0 ${config.width} ${config.height}" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="${config.width}" height="${config.height}" fill="black"></rect>
          <rect x="0" y="0" width="${config.width}" height="${config.height}" rx="${config.radius}" fill="red" />
          <rect x="0" y="0" width="${config.width}" height="${config.height}" rx="${config.radius}" fill="blue" style="mix-blend-mode: difference" />
          <rect x="${border}" y="${border}" width="${config.width - border * 2}" height="${config.height - border * 2}" rx="${config.radius}" fill="hsl(0 0% 50% / 0.9)" style="filter:blur(11px)" />
        </svg>`;
      debugRef.current.innerHTML = svgContent;
      const svgEl = debugRef.current.querySelector(".displacement-image");
      if (svgEl) {
        const encoded = encodeURIComponent(
          new XMLSerializer().serializeToString(svgEl),
        );
        const feImage = document.querySelector("#liquid-filter feImage");
        if (feImage)
          feImage.setAttribute("href", `data:image/svg+xml,${encoded}`);
      }
    };
    buildDisplacementImage();
  }, [config.width, config.height, config.radius]);

  return (
    <>
      {/* BAR CONTAINER */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[110] liquid-nav-root">
        <div
          className="relative flex items-center justify-between px-4 md:px-8"
          style={{
            width: config.width,
            height: config.height,
            borderRadius: config.radius,
            background: `rgba(255, 255, 255, ${config.frost})`,
            backdropFilter: `url(#liquid-filter) saturate(${config.saturation})`,
            boxShadow: `0 0 0 1px rgba(255,255,255,0.1) inset, 0 12px 40px rgba(0,0,0,0.3)`,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-extrabold  text-white text-xl tracking-tighter shrink-0"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="size-20 relative right-5"
            />
          </Link>

          {!isMobile ? (
            /* DESKTOP NAV */
            <nav className="flex items-center gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group flex items-center h-full"
                >
                  <Link
                    href={item.path}
                    className="text-sm font-semibold text-white/80 hover:text-white transition-colors py-4"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-52 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto">
                      <div className="p-2 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
                        {item.children.map((child: any) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:+923151885725"
                className="ml-4 px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold hover:scale-105 transition-transform"
              >
                Start Project
              </a>
            </nav>
          ) : (
            /* MOBILE CONTROLS */
            <div className="flex items-center gap-2">
              <a
                href="tel:+923151885725"
                className="p-2.5 bg-white/10 text-white rounded-full active:scale-90 transition-transform backdrop-blur-md"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 bg-white text-black rounded-full active:scale-90 transition-transform"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}
        </div>

        <div ref={debugRef} className="hidden" />
        <svg className="absolute w-0 h-0 pointer-events-none">
          <filter
            id="liquid-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feImage result="map" preserveAspectRatio="none" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="map"
              scale={config.scale}
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </svg>
      </div>

      {/* MOBILE FULL SCREEN SCROLLABLE MENU */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-[100] bg-[#080808] hidden overflow-y-auto"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        <div className="flex flex-col min-h-screen pt-28 pb-12 px-6">
          <div
            ref={listItemsRef}
            className="flex flex-col gap-1 w-full max-w-lg mx-auto"
          >
            {NAV_ITEMS.map((item, idx) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={idx}
                  className="mobile-nav-item border-b border-white/5 last:border-0"
                >
                  <div className="flex items-center justify-between py-4">
                    {/* Parent Link is now clickable */}
                    <Link
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold transition-all ${pathname === item.path ? "text-purple-500" : "text-white"}`}
                    >
                      {item.label}
                    </Link>

                    {/* Separate Toggle Button for Dropdown */}
                    {hasChildren && (
                      <button
                        onClick={() =>
                          setActiveDropdown(isOpen ? null : item.label)
                        }
                        className={`p-3 rounded-xl transition-all ${isOpen ? "bg-purple-500/20 text-purple-500" : "bg-white/5 text-white/40"}`}
                      >
                        <ChevronDown
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Dropdown Content */}
                  {hasChildren && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[800px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                    >
                      <div className="flex flex-col gap-2 mt-2">
                        {item.children.map((child: any) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 active:bg-white/10 transition-all border border-white/5"
                          >
                            <span className="text-lg text-gray-300 font-medium">
                              {child.label}
                            </span>
                            <ArrowRight size={18} className="text-purple-500" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CALL & CONTACT SECTION */}
            <div className="mobile-nav-item mt-8 flex flex-col gap-4">
              <a
                href="tel:+923151885725"
                className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-3xl text-lg font-bold shadow-xl active:scale-95 transition-transform"
              >
                <Phone size={20} />
                Call Expert Now
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl text-lg font-bold active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare size={20} />
                Get a Quote
              </Link>

              <div className="flex justify-center gap-8 mt-8 pb-6">
                {["IG", "TW", "LI", "FB"].map((social) => (
                  <span
                    key={social}
                    className="text-xs font-bold text-gray-500 tracking-widest"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Header = LiquidNavbar;
