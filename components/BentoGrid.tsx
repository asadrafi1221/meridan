import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Zap,
  Globe,
  Code2,
  ArrowUpRight,
  Lock,
  ChevronDown,
  MessageSquare,
  Terminal,
  Cpu,
} from "lucide-react";

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  colSpan?: number;
  rowSpan?: number;
}

const BentoItem: React.FC<BentoItemProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  // 1. Use MotionValues instead of State.
  // This updates the DOM directly without triggering a React re-render.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Add a spring for a "buttery" feel (optional, remove for absolute raw speed)
  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Create the background string logic outside the render loop
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(37,99,235,0.06), transparent 40%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className={`bg-white rounded-3xl border border-gray-100 relative overflow-hidden group transition-shadow hover:shadow-xl ${className}`}
    >
      {/* The Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 will-change-transform"
        style={{ background }}
      />

      <div className="relative z-20 h-full p-6 md:p-8 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};
const AccordionItem = ({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-4 text-left group"
    >
      <span
        className={`font-display font-bold text-lg transition-colors duration-300 ${
          isOpen
            ? "text-brand-accent"
            : "text-brand-black group-hover:text-brand-accent"
        }`}
      >
        {title}
      </span>
      <div
        className={`p-1 rounded-full transition-all duration-300 ${
          isOpen
            ? "bg-brand-accent/10 rotate-180"
            : "bg-gray-50 group-hover:bg-brand-accent/10"
        }`}
      >
        <ChevronDown
          className={`transform transition-colors ${
            isOpen
              ? "text-brand-accent"
              : "text-gray-400 group-hover:text-brand-accent"
          }`}
          size={16}
        />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-4 text-sm text-gray-500 leading-relaxed font-medium">
            {children}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const PlaybookAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const items = [
    {
      title: "Strategic Audit",
      content:
        "We analyze your current infrastructure, bottlenecks, and unit economics before writing a single line of code.",
    },
    {
      title: "Agile Sprints",
      content:
        "Two-week delivery cycles with dedicated channels. You see progress in real-time, not just at the deadline.",
    },
    {
      title: "Quality Assurance",
      content:
        "Automated testing pipelines and manual code reviews ensure enterprise-grade stability upon every deploy.",
    },
  ];

  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          isOpen={activeIndex === idx}
          onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {/* 1. Global Standard - Simplified Gradients */}
      <BentoItem className="md:col-span-2 bg-brand-black text-white min-h-[300px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="h-full flex flex-col justify-between relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Globe size={12} />
              <span>Global Standard</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
              Silicon Valley Quality.
              <br />
              <span className="text-gray-500">Lahore Costs.</span>
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-gray-400 text-sm max-w-xs font-light">
              Top 1% engineering talent without the inflated US salary bands.
            </p>
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </BentoItem>

      {/* 2. Engineering Playbook - Reduced motion complexity */}
      <BentoItem className="md:col-span-2" delay={0.05}>
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6 text-brand-accent">
            <Terminal size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Engineering Playbook
            </span>
          </div>
          {/* Keep this component simple inside */}
          <div className="space-y-2 opacity-80">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium">
              01. Automated CI/CD Pipelines
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium">
              02. Type-Safe Architecture
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium">
              03. Weekly Sprint Cycles
            </div>
          </div>
        </div>
      </BentoItem>

      {/* 3. Tech Stack - Static visuals are faster */}
      <BentoItem className="bg-gray-50/50" delay={0.1}>
        <div className="h-full flex flex-col justify-between text-center">
          <div className="p-2 bg-white rounded-lg border border-gray-100 w-fit mx-auto shadow-sm">
            <Code2 size={20} className="text-gray-600" />
          </div>
          <div className="py-6 flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "TypeScript", "Node", "Go"].map((t) => (
              <span
                key={t}
                className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] font-bold uppercase"
              >
                {t}
              </span>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-brand-black">Modern Stack</h4>
            <p className="text-xs text-gray-500 mt-1">Vercel • AWS • Docker</p>
          </div>
        </div>
      </BentoItem>

      {/* 4. Comms Hub - Fast CSS transitions instead of JS delays */}
      <BentoItem className="bg-blue-50/30 border-blue-50" delay={0.15}>
        <div className="flex justify-between items-start mb-6">
          <MessageSquare size={20} className="text-blue-600" />
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
            Live Sync
          </span>
        </div>
        <div className="space-y-2">
          <div className="bg-white p-2.5 rounded-xl shadow-sm border border-blue-100 text-[11px] text-gray-600 w-[90%]">
            Deployment complete.
          </div>
          <div className="bg-blue-600 p-2.5 rounded-xl shadow-md text-[11px] text-white ml-auto w-[80%]">
            Metrics look solid!
          </div>
        </div>
        <div className="mt-auto pt-8">
          <h4 className="font-bold text-brand-black">Seamless Comms</h4>
          <p className="text-xs text-gray-500">Slack • Jira • Linear</p>
        </div>
      </BentoItem>

      {/* 5. Scalability - Optimized Bar Animation (Scale instead of Height) */}
      <BentoItem className="md:col-span-2 bg-zinc-950 text-white" delay={0.2}>
        <div className="flex flex-row h-full">
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-3 text-purple-400">
              <Cpu size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Infrastructure
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Built to Scale.</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed max-w-[200px]">
                Architectures built for 10x traffic growth.
              </p>
            </div>
          </div>

          <div className="w-1/3 flex items-end justify-end gap-1.5 pb-2">
            {[40, 60, 45, 90, 70, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: h / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                style={{ originY: 1 }} // Ensures it grows from bottom
                className="w-3 h-full bg-gradient-to-t from-purple-900 to-purple-400 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </BentoItem>

      {/* 6. Velocity - Static and clean */}
      <BentoItem className="bg-gray-50" delay={0.25}>
        <Zap size={20} className="text-yellow-500 mb-8" />
        <div className="text-5xl font-display font-bold text-brand-black mb-2 tracking-tighter">
          2.5x
        </div>
        <p className="text-xs text-gray-500 font-medium leading-relaxed">
          Faster delivery than US agencies.
        </p>
      </BentoItem>

      {/* 7. IP Protection */}
      <BentoItem delay={0.3}>
        <Lock size={20} className="text-green-600 mb-8" />
        <h4 className="font-bold text-brand-black mb-1">IP Ownership</h4>
        <p className="text-xs text-gray-500 font-light">
          100% legal transfer on delivery.
        </p>
      </BentoItem>
    </div>
  );
};
