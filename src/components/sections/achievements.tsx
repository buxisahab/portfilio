"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { ACHIEVEMENTS } from "@/data/constants";
import { motion } from "framer-motion";
import { Award, Trophy, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="achievements"
        title="Hackathons & Achievements"
        desc="Recognized innovation, competitive hackathon selections, and prize-winning prototype builds."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.id}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-zinc-800 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full gold-gradient-bg text-black shadow-sm">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-gold flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" /> Verified Achievement
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <h4 className="text-xs font-mono text-zinc-400 mb-4">{item.event}</h4>

              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {item.projectAssociated && (
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 mb-4 font-mono">
                  <span className="text-gold font-bold">Associated Project: </span>
                  {item.projectAssociated}
                </div>
              )}

              {item.team && (
                <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 text-xs text-gold font-mono mb-4">
                  <span>Team: </span> <span className="text-white font-bold">{item.team}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-zinc-800/80 space-y-1.5">
              {item.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
