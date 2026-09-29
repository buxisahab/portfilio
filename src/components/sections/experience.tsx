"use client";

import React from "react";
import { EXPERIENCE } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        id="experience"
        title="Experience & Builder Journey"
        desc="Chronological progression of software products, hardware systems, and competitive innovation."
      />

      <div className="mt-12 space-y-8 relative">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-gold/50 transition-all duration-300 relative group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-zinc-800/80 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-gold" />
                  <span className="text-xs font-mono text-gold uppercase tracking-wider">{exp.company}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  {exp.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 w-fit">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>{exp.startDate} – {exp.endDate}</span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-6 text-sm text-zinc-300">
              {exp.description.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 text-xs font-mono text-zinc-300 border border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
