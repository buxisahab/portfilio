"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Smartphone, Globe, Cpu, Navigation, Gamepad2, PackageCheck } from "lucide-react";

const buildCategories = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "Native & Cross-Platform",
    description: "Android, Kotlin, Flutter and Firebase applications with high-fidelity UI, media engines, and offline capabilities.",
    tags: ["Android", "Kotlin", "Flutter", "Firebase", "Audio DSP"]
  },
  {
    icon: Globe,
    title: "Web Platforms",
    subtitle: "Dashboards & Web Ecosystems",
    description: "Modern, highly-responsive web applications, admin portals, live telemetry dashboards, and real-time WebRTC platforms.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Leaflet.js", "WebRTC"]
  },
  {
    icon: Cpu,
    title: "AI Systems",
    subtitle: "Computer Vision & Edge ML",
    description: "AI/ML models, edge vision pipelines, object detection, thermal camera analysis, and intelligent automation systems.",
    tags: ["TensorFlow Lite", "OpenCV", "Python", "Edge AI", "Object Detection"]
  },
  {
    icon: Navigation,
    title: "Autonomous Systems",
    subtitle: "Drone Technology & Robotics",
    description: "Emergency response drones, Pixhawk flight integration, Raspberry Pi companion computers, telemetry, and smart sensor nodes.",
    tags: ["Pixhawk", "Raspberry Pi", "Arduino", "DroneKit", "QGroundControl"]
  },
  {
    icon: Gamepad2,
    title: "Games",
    subtitle: "Interactive Mechanics & Physics",
    description: "Gameplay programming experiments, 2D/3D physics engines, interactive touch interfaces, and mobile performance tuning.",
    tags: ["Unity", "C#", "Android", "JavaScript", "Blender"]
  },
  {
    icon: PackageCheck,
    title: "Digital Products",
    subtitle: "Concept to Production",
    description: "End-to-end software product design, system architecture, database design, testing, and continuous cloud deployment.",
    tags: ["System Design", "UI/UX", "Architecture", "Firebase Cloud", "Git"]
  }
];

const WhatIBuildSection = () => {
  return (
    <SectionWrapper id="what-i-build" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="what-i-build"
        title="What I Build"
        desc="Core technological pillars and domain capabilities."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buildCategories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-zinc-800/80 hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-mono text-gold mb-3">{cat.subtitle}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default WhatIBuildSection;
