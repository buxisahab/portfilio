"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { CERTIFICATIONS, EDUCATION } from "@/data/constants";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Download,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  BookmarkCheck,
} from "lucide-react";
import { Button } from "../ui/button";

const CertificationsSection = () => {
  return (
    <SectionWrapper id="credentials" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="credentials"
        title="Certifications & Education"
        desc="Verified Google credentials, specialized platform certifications, and academic engineering foundation."
      />

      {/* Top Banner / Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl glass-card border border-gold/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">Verified Engineering Credentials</h4>
            <p className="text-xs text-zinc-400 font-mono">
              Official identity: <span className="text-white font-semibold">Shahadat Husain</span> | Professional: <span className="text-gold font-semibold">Sahadat Buxi</span>
            </p>
          </div>
        </div>

        <a
          href="/assets/resume.pdf"
          download="Shahadat_Husain_Sahadat_Buxi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="gold-gradient-bg text-black font-semibold hover:opacity-90 flex items-center gap-2 px-5 shadow-lg shadow-gold/10 cursor-pointer"
          >
            <Download className="w-4 h-4" /> Download Resume PDF
          </Button>
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Certifications Grid */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <Award className="w-5 h-5 text-gold" />
            <h3 className="text-xl font-bold text-white tracking-wide">Professional Certifications</h3>
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-zinc-800 hover:border-gold/50 transition-all duration-300 relative group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full gold-gradient-bg text-black">
                        {cert.badge}
                      </span>
                      {cert.credentialId && (
                        <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                          ID: <span className="text-gold font-bold">{cert.credentialId}</span>
                        </span>
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-zinc-900/80 text-[11px] font-mono text-zinc-300 border border-zinc-800/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Education Journey */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <GraduationCap className="w-5 h-5 text-gold" />
            <h3 className="text-xl font-bold text-white tracking-wide">Education & Academia</h3>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-zinc-800 hover:border-gold/40 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-gold/15 text-gold border border-gold/30">
                    {edu.period}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold" /> {edu.location}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-0.5">{edu.degree}</h4>
                <p className="text-xs text-gold font-mono mb-2">{edu.field}</p>
                <p className="text-xs text-zinc-300 font-semibold mb-3">{edu.institution}</p>

                {edu.details && edu.details.length > 0 && (
                  <ul className="space-y-1.5 border-t border-zinc-800/70 pt-3">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quick Summary Card */}
          <div className="glass-card-gold p-5 rounded-2xl border border-gold/40 text-xs text-zinc-300 space-y-2">
            <div className="flex items-center gap-2 text-gold font-bold text-sm">
              <Sparkles className="w-4 h-4" /> Continuous Self-Directed Mastery
            </div>
            <p className="leading-relaxed">
              Combining formal academic computer science education with practical, real-world execution across autonomous systems, robotics, edge AI, and high-performance native mobile applications since 2022.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
