"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Smartphone, Music, Disc, Sliders, WifiOff, Sparkles, Layers } from "lucide-react";

const mobileFeatures = [
  { icon: Smartphone, title: "Android & Kotlin", desc: "Native Android app engineering using Kotlin, Jetpack libraries, clean architecture & custom UI/UX." },
  { icon: Music, title: "Audio Processing & DSP", desc: "Digital Signal Processing, custom equalizers, bass enhancement, Buxi Atmos & Buxi Aura spatial sound." },
  { icon: Sliders, title: "Reels-Style Browsing", desc: "Vertical gesture music discovery, video-style browsing & dynamic media streaming pipelines." },
  { icon: WifiOff, title: "Offline Capabilities", desc: "Smart caching, offline audio playback concepts, background audio service & notifications." },
];

const MobileDevSection = () => {
  return (
    <SectionWrapper id="mobile-dev" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="mobile-dev"
        title="Mobile Application Development"
        desc="Native Android engineering, Flutter cross-platform builds, custom UI & advanced audio processing."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Mobile Showcase */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mobileFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                className="glass-card p-5 rounded-xl border border-zinc-800 hover:border-gold/40 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="p-2.5 w-fit rounded-lg bg-zinc-900 text-gold border border-zinc-800 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* AI Music Highlight Card */}
        <motion.div
          className="lg:col-span-5 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold/40 relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-mono text-gold uppercase tracking-wider">Flagship Software Build</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-2">
            AI Music / Buxi Music
          </h3>
          <p className="text-xs font-mono text-zinc-400 mb-4">
            Kotlin • Android Media APIs • DSP • Ambient Sound Engine
          </p>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            A next-generation Android music platform delivering immersive sound through custom audio processing, YouTube-based discovery, ambient Rain & Thunder soundscapes, and reels-style vertical music navigation.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Reels Browsing", "Buxi Atmos", "Buxi Aura", "Bass Boost", "Offline Mode"].map((tag) => (
              <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-gold/10 text-gold border border-gold/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MobileDevSection;
