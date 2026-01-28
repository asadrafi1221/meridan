import { BRAND_GRADIENT } from "@/constant";
import { ArrowUpRight } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <section className="py-24 bg-black text-white px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-5xl md:text-8xl font-display font-bold mb-8">
            {`Let's work`} <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              together
            </span>
          </h2>
          <a
            href="mailto:hello@gmboptimization.com"
            className="text-xl md:text-2xl border-b border-white/30 pb-2 hover:border-white hover:text-purple-300 transition-all"
          >
            hello@gmboptimization.com
          </a>
        </div>
        <div className="mt-12 md:mt-0">
          <div className="group w-32 h-32 rounded-full border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer bg-white/5">
            <ArrowUpRight
              size={40}
              className="group-hover:rotate-45 transition-transform duration-300 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
