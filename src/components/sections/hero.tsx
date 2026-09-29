"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FileText, ArrowRight, Mail, Sparkles, Cpu, Code2, Bot, Navigation } from "lucide-react";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  return (
    <SectionWrapper id="hero" className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background Subtle Tech & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold.bright/5 rounded-full blur-[100px]" />
        
        {/* Subtle Floating Technology Badges */}
        <div className="hidden xl:block">
          <div className="absolute top-28 left-[6%] p-3 rounded-xl glass-card border border-gold/20 flex items-center gap-2 text-xs font-mono text-gold/80 animate-pulse">
            <Cpu className="w-4 h-4 text-gold" /> Edge AI & Vision
          </div>
          <div className="absolute bottom-36 left-[4%] p-3 rounded-xl glass-card border border-gold/20 flex items-center gap-2 text-xs font-mono text-gold/80">
            <Navigation className="w-4 h-4 text-gold" /> Autonomous Systems
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[75vh]">
          {/* Left Column: Personal Brand Info */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Brand Tagline Badge */}
            <BlurIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-gold/40 text-xs sm:text-sm text-gold font-mono mb-6 shadow-lg shadow-gold/5">
                <Sparkles className="w-4 h-4 text-gold animate-spin" style={{ animationDuration: '8s' }} />
                <span>Independent Software Developer & Entrepreneur</span>
              </div>
            </BlurIn>

            {/* Main Heading */}
            <BlurIn delay={0.4}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4">
                SAHADAT <span className="gold-gradient-text">BUXI</span>
              </h1>
            </BlurIn>

            {/* Headline */}
            <BlurIn delay={0.6}>
              <h2 className="text-lg sm:text-2xl font-medium text-zinc-200 mb-5 max-w-2xl">
                Building Intelligent Software, AI Systems, Digital Products & Next-Gen Technology Solutions.
              </h2>
            </BlurIn>

            {/* Supporting text */}
            <BlurIn delay={0.8}>
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
                I build intelligent software, AI-powered applications, autonomous systems, and digital products across mobile, web, AI, IoT, drone technology, and game development.
              </p>
            </BlurIn>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3.5 w-full mb-8">
              <BoxReveal delay={1.0} width="fit-content">
                <Link href="#projects">
                  <Button className="h-12 px-6 rounded-xl gold-gradient-bg text-black font-semibold text-sm sm:text-base shadow-xl shadow-gold/20 hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer">
                    <span>Explore My Projects</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </BoxReveal>

              <BoxReveal delay={1.1} width="fit-content">
                <Link href="#contact">
                  <Button variant="outline" className="h-12 px-6 rounded-xl glass-card border-gold/40 text-white font-medium text-sm sm:text-base hover:bg-gold/10 hover:border-gold transition-all flex items-center gap-2 cursor-pointer">
                    <Mail className="w-4 h-4 text-gold" />
                    <span>Contact Me</span>
                  </Button>
                </Link>
              </BoxReveal>

              <BoxReveal delay={1.2} width="fit-content">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Shahadat_Husain_Resume.pdf"
                >
                  <Button variant="ghost" className="h-12 px-5 rounded-xl border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all flex items-center gap-2 cursor-pointer">
                    <FileText className="w-4 h-4 text-gold" />
                    <span>Download Resume</span>
                  </Button>
                </a>
              </BoxReveal>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl glass-card border border-zinc-800 text-zinc-300 hover:text-gold hover:border-gold/50 transition-all transform hover:scale-105"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl glass-card border border-zinc-800 text-zinc-300 hover:text-gold hover:border-gold/50 transition-all transform hover:scale-105"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={config.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="p-3 rounded-xl glass-card border border-zinc-800 text-zinc-300 hover:text-gold hover:border-gold/50 transition-all transform hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Transparent viewport area where 3D Keyboard floats on desktop */}
          <div className="hidden lg:block lg:col-span-5 h-[500px] pointer-events-none relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
