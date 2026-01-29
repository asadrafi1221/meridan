/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constant";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

const LiquidNavbar = () => {
  const pathname = usePathname();
  const debugRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({
    width: 880,
    height: 64,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Configuration
  const config = {
    frost: 0.05,
    saturation: 1.0,
    radius: 16,
    border: 0.07,
    alpha: 0.93,
    lightness: 50,
    inputBlur: 11,
    outputBlur: 0.2,
    channelX: "R",
    channelY: "B",
    blend: "difference",
    scale: -180,
    ...dimensions,
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(880, window.innerWidth - 32);
      const height = 64;
      setDimensions({ width, height });
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // GSAP Liquid Filter Logic
  useEffect(() => {
    const buildDisplacementImage = () => {
      if (!debugRef.current) return;

      const border =
        Math.min(config.width, config.height) * (config.border * 0.5);

      const svgContent = `
        <svg class="displacement-image" viewBox="0 0 ${config.width} ${config.height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#000"/>
              <stop offset="100%" stop-color="red"/>
            </linearGradient>
            <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#000"/>
              <stop offset="100%" stop-color="blue"/>
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="${config.width}" height="${config.height}" fill="black"></rect>
          <rect x="0" y="0" width="${config.width}" height="${config.height}" rx="${config.radius}" fill="url(#red)" />
          <rect x="0" y="0" width="${config.width}" height="${config.height}" rx="${config.radius}" fill="url(#blue)" style="mix-blend-mode: ${config.blend}" />
          <rect x="${border}" y="${
            Math.min(config.width, config.height) * (config.border * 0.5)
          }" width="${config.width - border * 2}" height="${
            config.height - border * 2
          }" rx="${config.radius}" fill="hsl(0 0% ${config.lightness}% / ${
            config.alpha
          })" style="filter:blur(${config.inputBlur}px)" />
        </svg>
      `;

      debugRef.current.innerHTML = svgContent;
      const svgEl = debugRef.current.querySelector(".displacement-image");
      if (svgEl) {
        const serialized = new XMLSerializer().serializeToString(svgEl);
        const encoded = encodeURIComponent(serialized);
        const dataUri = `data:image/svg+xml,${encoded}`;

        gsap.set(".liquid-nav-root", {
          "--width": config.width,
          "--height": config.height,
          "--radius": config.radius,
          "--frost": config.frost,
          "--saturation": config.saturation,
        });

        const feImage = document.querySelector("#liquid-filter feImage");
        if (feImage) feImage.setAttribute("href", dataUri);

        const feDisplacementMap = document.querySelector(
          "#liquid-filter feDisplacementMap",
        );
        if (feDisplacementMap) {
          feDisplacementMap.setAttribute("xChannelSelector", config.channelX);
          feDisplacementMap.setAttribute("yChannelSelector", config.channelY);
          feDisplacementMap.setAttribute("scale", String(config.scale));
        }
      }
    };
    buildDisplacementImage();
  }, [config.width, config.height]);

  // --- Styles Helper ---
  const getLinkStyle = (isActive: boolean) =>
    isActive
      ? {
          background:
            "linear-gradient(135deg, rgb(103, 33, 255) 0%, rgb(234, 14, 150) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "none",
          filter:
            "brightness(1.2) drop-shadow(0 0 8px rgba(103, 33, 255, 0.6)) drop-shadow(0 0 12px rgba(234, 14, 150, 0.4))",
          fontWeight: "600",
        }
      : {
          color: "rgba(255, 255, 255, 0.8)",
          textShadow:
            "0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 1), 0 0 12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6), 0 3px 6px rgba(0, 0, 0, 0.7)",
          filter: "brightness(1.1)",
        };

  return (
    <>
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] liquid-nav-root">
        <div
          className="relative flex items-center justify-between px-6 backdrop-blur-3xl overflow-visible"
          style={{
            width: config.width,
            height: config.height,
            borderRadius: config.radius,
            background: `light-dark(hsl(0 0% 100% / ${config.frost}), hsl(0 0% 0% / ${config.frost}))`,
            backdropFilter: `url(#liquid-filter) saturate(${config.saturation})`,
            boxShadow: `0 0 2px 1px rgba(255,255,255,0.1) inset, 0 0 10px 44px rgba(255,255,255,0.05) inset, 0px 4px 16px rgba(0,0,0,0.1)`,
          }}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="font-bold text-white text-lg tracking-tight shrink-0 mr-8"
            style={{
              textShadow:
                "0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 1), 0 0 12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6), 0 3px 6px rgba(0, 0, 0, 0.7)",
              color: "#FFFFFF",
              filter: "brightness(1.1)",
            }}
          >
            GMB
            <span
              className="text-purple-400"
              style={{
                textShadow:
                  "0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 1)",
              }}
            >
              .
            </span>
          </Link>

          {!isMobile ? (
            <>
              {/* DESKTOP NAV */}
              <nav className="flex items-center gap-6 relative z-10 shrink-0 h-full">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.path;
                  const hasChildren = item.children && item.children.length > 0;

                  if (hasChildren) {
                    return (
                      <div
                        key={idx}
                        className="relative group h-full flex items-center"
                      >
                        <Link
                          href={item.path} // Make the parent clickable too if desired
                          className="flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap hover:text-white py-4"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            textShadow:
                              "0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 1)",
                            filter: "brightness(1.1)",
                          }}
                        >
                          {item.label}
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </Link>

                        {/* 
                            FIXED: Changed mt-4 to pt-4. 
                            The padding creates an invisible bridge so mouse doesn't fall into the gap.
                        */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                          <div className="p-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1">
                            {item.children.map((child: any) => (
                              <Link
                                key={child.path}
                                href={child.path}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-sm font-medium transition-colors whitespace-nowrap py-4 ${
                        isActive ? "" : "hover:text-white"
                      }`}
                      style={getLinkStyle(isActive)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="ml-auto shrink-0">
                <Link
                  href="/contact"
                  className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-gray-100 transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  Start Project
                </Link>
              </div>
            </>
          ) : (
            // Mobile Menu Toggle
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto p-2 text-white hover:bg-white/10 rounded-full"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          )}
        </div>

        {/* Debug/Filter Setup */}
        <div ref={debugRef} className="hidden" />
        <svg
          className="absolute w-0 h-0 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="liquid-filter"
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
            >
              <feImage result="map" preserveAspectRatio="none" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                scale={config.scale}
                xChannelSelector={config.channelX}
                yChannelSelector={config.channelY}
                result="displaced"
              />
              <feGaussianBlur in="displaced" stdDeviation={config.outputBlur} />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl overflow-y-auto">
          <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-10 px-6">
            <nav className="flex flex-col gap-6 items-center w-full max-w-md">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.path;
                const hasChildren = item.children && item.children.length > 0;
                const isDropdownOpen = activeDropdown === item.label;

                if (hasChildren) {
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center w-full"
                    >
                      <button
                        onClick={() =>
                          setActiveDropdown(isDropdownOpen ? null : item.label)
                        }
                        className="text-2xl font-bold text-white hover:text-purple-400 flex items-center gap-2"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-6 h-6 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`flex flex-col items-center gap-4 mt-4 w-full overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        {item.children.map((child: any) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg text-gray-400 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-2xl font-bold transition-colors ${isActive ? "text-purple-400" : "text-white hover:text-purple-400"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-8 px-8 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Project
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export const Header = LiquidNavbar;
