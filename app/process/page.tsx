"use client";
import React from "react";
import { Search, FileCode, Rocket, CheckCircle2, PenTool } from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Cube } from "@/components/Shapes3D";
import Link from "next/link";

const Process: React.FC = () => {
  const phases = [
    {
      id: "01",
      title: "Discovery & Blueprint",
      subtitle: "We measure twice, cut once.",
      desc: "Before a single line of code is written, we deconstruct your business model, audit your existing infrastructure, and map out a ruthless strategy for growth.",
      icon: Search,
      deliverables: [
        "Technical Audit",
        "Competitor Analysis",
        "User Journey Maps",
        "Architecture Blueprint",
      ],
      tools: ["Figma", "Notion", "Linear"],
    },
    {
      id: "02",
      title: "Design & Prototype",
      subtitle: "Systems that scale, interfaces that convert.",
      desc: "We design high-fidelity prototypes that look and feel like the final product. We iterate rapidly based on feedback to ensure the UX is seamless.",
      icon: PenTool,
      deliverables: [
        "High-Fidelity UI",
        "Interactive Prototypes",
        "Design System",
        "Component Library",
      ],
      tools: ["Figma", "Storybook", "Rive"],
    },
    {
      id: "03",
      title: "Agile Engineering",
      subtitle: "Elite code. Two-week sprints.",
      desc: "Our engineering team takes over. We build using a component-driven architecture, ensuring your platform is modular, fast, and testable.",
      icon: FileCode,
      deliverables: [
        "Clean, Typed Code",
        "API Documentation",
        "Unit & Integration Tests",
        "CI/CD Pipeline",
      ],
      tools: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: "04",
      title: "Launch & Growth",
      subtitle: "Deployment is just the starting line.",
      desc: "We handle the DevOps for a zero-downtime launch. Then, we switch gears to optimization—analyzing user data to improve conversion rates.",
      icon: Rocket,
      deliverables: [
        "Production Deployment",
        "Analytics Setup",
        "SEO Optimization",
        "Handover Training",
      ],
      tools: ["Vercel", "AWS", "Google Analytics", "Sentry"],
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="pt-24 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="absolute top-10 left-0 perspective-1000 hidden lg:block opacity-50 pointer-events-none">
          <Cube size={80} rotateSpeed={15} color="rgba(37,99,235,0.1)" />
        </div>
        <div className="absolute top-20 right-0 perspective-1000 hidden lg:block opacity-50 pointer-events-none">
          <Cube size={60} y={50} rotateSpeed={10} color="rgba(0,0,0,0.1)" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold mb-8 text-brand-black tracking-tighter">
            The Method<span className="text-brand-accent">.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {` Creativity is chaotic. Delivery shouldn't be`}.{" "}
            <br className="hidden md:block" />
            We use a battle-tested framework to take products from{" "}
            <span className="font-semibold text-brand-black">
              Zero to One
            </span>{" "}
            and{" "}
            <span className="font-semibold text-brand-black">One to Scale</span>
            .
          </p>
        </motion.div>
      </div>

      {/* Process Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

        <div className="space-y-12 md:space-y-32">
          {phases.map((phase, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              key={phase.id}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-24 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Center Node Marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-brand-accent rounded-full z-20 hidden md:block shadow-[0_0_0_8px_rgba(255,255,255,1)]"></div>

              {/* Visual Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className={`relative w-full max-w-md aspect-[4/3] bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden group hover:border-brand-accent/30 transition-colors duration-500`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-black group-hover:scale-110 transition-transform duration-500">
                      <phase.icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Floating Tool Pills */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 flex-wrap px-6">
                    {phase.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs font-bold text-gray-500 shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0
                      ? "md:items-start md:text-left"
                      : "md:items-end md:text-right"
                  }`}
                >
                  <span className="text-6xl font-display font-bold text-gray-100 mb-4 select-none">
                    {phase.id}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-brand-black">
                    {phase.title}
                  </h3>
                  <p className="text-brand-accent font-medium mb-6 text-sm uppercase tracking-wider">
                    {phase.subtitle}
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed font-light mb-8 max-w-md">
                    {phase.desc}
                  </p>

                  <div
                    className={`bg-gray-50 rounded-2xl p-6 w-full max-w-md border border-gray-100`}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 size={14} /> Key Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {phase.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className={`text-sm font-medium text-gray-700 flex items-center gap-3 ${
                            index % 2 !== 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-24 md:py-32 bg-brand-black text-white text-center mt-12 md:mt-20 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8">
            Transparency is our policy.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light mb-10 md:mb-12">
            No hidden fees. No hostage situations with your code or data. We
            build trust by delivering excellence, sprint after sprint.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-black w-full sm:w-auto"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="text"
                size="lg"
                className="text-white hover:text-gray-300 w-full sm:w-auto"
              >
                See Results &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
