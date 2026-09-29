"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { Bot, Eye, Cpu, Scan, Sparkles, BrainCircuit } from "lucide-react";

const aiTopics = [
  { icon: Bot, title: "Edge AI & Quantized Models", desc: "Deploying lightweight TensorFlow Lite models directly on micro-processors and companion boards without reliance on persistent cloud connectivity." },
  { icon: Eye, title: "Computer Vision & FLIR Vision", desc: "Real-time image processing, optical flow tracking, thermal vision fusion, and environmental hazard detection using OpenCV." },
  { icon: Scan, title: "Object Detection & Recognition", desc: "Training and running bounding-box object detectors to identify survivors, obstacles, and risk zones in real-time camera streams." },
  { icon: BrainCircuit, title: "Intelligent Automation", desc: "Algorithmic decision pipelines connecting sensor inputs, AI confidence thresholds, and automated action triggers." }
];

const AiMlSection = () => {
  return (
    <SectionWrapper id="ai-ml" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="ai-ml"
        title="AI, Machine Learning & Computer Vision"
        desc="Bringing intelligence to edge hardware, vision systems, and automated risk analysis."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiTopics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <motion.div
              key={topic.title}
              className="glass-card p-6 rounded-2xl border border-zinc-800 hover:border-gold/40 transition-colors flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="p-3 w-fit rounded-xl bg-zinc-900 text-gold border border-zinc-800 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{topic.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">{topic.desc}</p>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-gold">
                <span>Integrated System</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default AiMlSection;
