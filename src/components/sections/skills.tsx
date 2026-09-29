"use client";

import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILL_LIST, SkillCategory } from "@/data/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Layers, Code, Server, Bot, Wrench, Search, Sparkles, Keyboard } from "lucide-react";

const categories = [
  "All",
  SkillCategory.LANGUAGES,
  SkillCategory.FRAMEWORKS,
  SkillCategory.BACKEND_CLOUD,
  SkillCategory.AI_ML,
  SkillCategory.DRONE_ROBOTICS,
  SkillCategory.TOOLS,
];

const categoryIcons: Record<string, React.ElementType> = {
  All: Layers,
  [SkillCategory.LANGUAGES]: Code,
  [SkillCategory.FRAMEWORKS]: Cpu,
  [SkillCategory.BACKEND_CLOUD]: Server,
  [SkillCategory.AI_ML]: Bot,
  [SkillCategory.DRONE_ROBOTICS]: Cpu,
  [SkillCategory.TOOLS]: Wrench,
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = SKILL_LIST.filter((skill) => {
    const matchesCategory =
      activeCategory === "All" || skill.category === activeCategory;
    const matchesSearch =
      skill.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SectionWrapper id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 3D Interactive Keyboard Stage */}
      <div className="w-full min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-start pointer-events-none relative mb-16">
        <SectionHeader
          id="skills-3d"
          title="3D Interactive Tech Keyboard"
          desc="( Hint: Hover over keycaps or press keys on your physical keyboard to interact )"
          className="pointer-events-auto"
        />

        <div className="mt-4 px-4 py-2 rounded-full glass-card border border-gold/30 text-xs font-mono text-gold flex items-center gap-2 pointer-events-auto shadow-lg shadow-gold/5">
          <Keyboard className="w-4 h-4 text-gold animate-bounce" />
          <span>Real-time 3D physics keycap simulation active</span>
        </div>
      </div>

      {/* Categorized Skills Section */}
      <div className="pt-8 border-t border-zinc-800/80">
        <SectionHeader
          id="skills-list"
          title="Languages & Technologies Matrix"
          desc="Engineered across native mobile, cloud backends, AI vision, and embedded robotics."
        />

        {/* Filter Tabs & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat] || Layers;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "gold-gradient-bg text-black font-semibold shadow-md shadow-gold/20"
                      : "glass-card text-zinc-400 hover:text-white hover:border-gold/40 border border-zinc-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl glass-card border border-zinc-800 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold/60 transition-colors pointer-events-auto"
            />
          </div>
        </div>

        {/* Grid of Interactive Skill Cards */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={skill.id}
                className="glass-card p-4 sm:p-5 rounded-xl border border-zinc-800/80 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 p-2 flex items-center justify-center shrink-0 group-hover:border-gold/40 transition-colors">
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-gold transition-colors">
                        {skill.label}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {skill.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-gold/70">
                  <span>Verified Stack</span>
                  <span className="w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold animate-pulse" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-zinc-500 font-mono text-sm">
            No technologies matching &quot;{searchQuery}&quot; found in category.
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
