"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Lightbulb, Network, Code2, Link2, CheckCircle, Rocket, ArrowRight } from "lucide-react";

const steps = [
  { step: "01", icon: Lightbulb, title: "Idea", desc: "Understand the core problem & define product value." },
  { step: "02", icon: Network, title: "Architecture", desc: "Design data pipelines, system schema & hardware logic." },
  { step: "03", icon: Code2, title: "Development", desc: "Write clean, scalable, maintainable modular code." },
  { step: "04", icon: Link2, title: "Integration", desc: "Connect APIs, databases, AI models, hardware & cloud." },
  { step: "05", icon: CheckCircle, title: "Testing", desc: "Debug, profile memory, optimize performance & validate." },
  { step: "06", icon: Rocket, title: "Deployment", desc: "Release to production & iterate continuously." }
];

const ProcessSection = () => {
  return (
    <SectionWrapper id="process" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="process"
        title="Development Process"
        desc="Systematic methodology for bringing complex technology products to life."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              className="glass-card p-6 rounded-2xl border border-zinc-800 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-gold px-3 py-1 rounded bg-gold/10 border border-gold/20">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-xl bg-zinc-900 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-700">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ProcessSection;
