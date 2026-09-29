"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Gamepad2, Sparkles, Cpu, Layers, Joystick, Orbit, Zap } from "lucide-react";

const gameSkills = [
  "Gameplay Programming",
  "Game Mechanics",
  "Game UI / UX",
  "2D Game Development",
  "3D Game Experiments",
  "Physics Systems",
  "State Animations",
  "Interactive Interfaces",
  "Mobile Game Optimization",
  "Frame-Rate Tuning"
];

const GameDevSection = () => {
  return (
    <SectionWrapper id="game-dev" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="game-dev"
        title="Game Development & Interactive Experiments"
        desc="Exploring gameplay loops, physics simulations, 2D/3D graphics, and mobile performance."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          className="lg:col-span-6 glass-card-gold p-6 sm:p-8 rounded-2xl border border-gold/40 relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-3.5 w-fit rounded-xl bg-gold/10 text-gold border border-gold/30 mb-5">
            <Gamepad2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-3">
            Interactive Engineering & Physics
          </h3>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Game development serves as a technical testing ground for low-latency state machines, complex physics math, custom UI viewports, and mobile GPU optimization.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Unity", "C#", "Android", "Kotlin", "Java", "JavaScript", "Blender"].map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1 rounded bg-zinc-900 text-gold border border-gold/20">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skill tags list */}
        <div className="lg:col-span-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
            <Joystick className="w-4 h-4 text-gold" /> Specialized Game Development Capabilities
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {gameSkills.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-3.5 rounded-xl glass-card border border-zinc-800 flex items-center gap-3 hover:border-gold/40 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-zinc-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GameDevSection;
