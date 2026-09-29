"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Cpu, Rocket, ShieldCheck, Layers, Terminal, Sparkles, Workflow } from "lucide-react";

const domains = [
  "Mobile Applications",
  "Web Applications",
  "AI & ML Systems",
  "Computer Vision",
  "Cloud Applications",
  "Firebase Ecosystem",
  "IoT & Embedded Systems",
  "Drone Technology",
  "Autonomous Systems",
  "Game Development",
  "Digital Product Development"
];

const lifecycleSteps = [
  { step: "01", title: "Idea", desc: "Understanding the problem & framing user value" },
  { step: "02", title: "Architecture", desc: "Designing scalable system & data pipelines" },
  { step: "03", title: "Development", desc: "Writing clean, high-performance code" },
  { step: "04", title: "Integration", desc: "Connecting APIs, AI models, hardware & cloud" },
  { step: "05", title: "Testing", desc: "Debugging, optimizing performance & validation" },
  { step: "06", title: "Deployment", desc: "Releasing to production & continuous updates" }
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <SectionHeader
        id="about"
        title="About Sahadat Buxi"
        desc="Software builder & technology entrepreneur with a complete end-to-end product engineering mindset."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Overview text */}
        <motion.div
          className="lg:col-span-7 glass-card-gold p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gold/10 text-gold border border-gold/30">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Multidisciplinary Technology Builder</h3>
              <p className="text-xs text-gold font-mono">Developer & Innovator Since 2023</p>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-6">
            Sahadat Buxi (officially <strong className="text-white font-semibold">Shahadat Husain</strong>) is an independent software developer and technology entrepreneur focused on engineering intelligent software systems, autonomous hardware-software platforms, and impactful digital products.
          </p>

          <p className="text-zinc-400 leading-relaxed text-sm sm:text-base mb-8">
            Rather than confining code to a single framework or isolated discipline, Sahadat approaches technology with a product-building mindset — bridging computer vision, native mobile engineering, cloud backends, embedded robotics, and modern web architectures into unified, working solutions.
          </p>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Technical Domains & Specializations
          </h4>

          <div className="flex flex-wrap gap-2 mb-4">
            {domains.map((domain, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs sm:text-sm text-zinc-300 hover:border-gold/50 hover:text-gold transition-colors"
              >
                {domain}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right column: Lifecycle */}
        <motion.div
          className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gold/10 text-gold border border-gold/30">
              <Workflow className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Product Development Process</h3>
              <p className="text-xs text-zinc-400 font-mono">End-to-End Lifecycle Execution</p>
            </div>
          </div>

          <div className="space-y-4 relative">
            {lifecycleSteps.map((step, idx) => (
              <div
                key={step.step}
                className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-gold/40 transition-colors"
              >
                <span className="text-base font-mono font-bold text-gold bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
                  {step.step}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-white">{step.title}</h4>
                  <p className="text-xs text-zinc-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
